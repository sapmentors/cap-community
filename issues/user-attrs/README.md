# Issue: User Attibutes

In a production like scenario, roles have been created to restrict what the user sees in the OData services. In this example, the user is restricted to viewing certain authors in the fake bookstore.

Some OData queries throw SQL errors (in SQLite and HANA) when they are valid OData queries and a response is expected.

This example is based on DJ's computed-field sample and this (link)[https://cap.cloud.sap/docs/guides/authorization#user-attrs].

Note: The documentation (here)[https://cap.cloud.sap/docs/node.js/authentication#authentication-strategies] states to use `userAttributes` in the `package.json` however, only `attributes` property works.


## Try it out

First, get the service up and running:

1. Get to right place: `cd issues/user-attrs/`
2. Install deps and run in memory (with debug): `npm i && DEbUG=true cds run --in-memory`
3. Navigate to `http://localhost:4004/catalog/Books` using user `test@example.com` and password `test` (check out package.json)

Both Authors and Books entity sets return the right results, i.e. restricted to the correct authors.


## OData Queries with Errors

### 1. Group by

Using the OData V4 apply on a field that is not in the authorisations creates a query that is not valid SQL:

```
http://localhost:4004/catalog/Books?$apply=groupby((title))
```

Not entirely sure why you would do this in this scenario but it should return a unique list of book titles. However, the query results in an error:

```xml
<error xmlns="http://docs.oasis-open.org/odata/ns/metadata">
  <code>500</code>
  <message>SQLITE_ERROR: no such column: author_ID</message>
</error>
```

With the following in the debug console:
```shell
GET /catalog/Books?$apply=groupby((title))
[cql] - acquire connection
[cql] - SELECT title FROM (SELECT title FROM CatalogService_Books GROUP BY title) WHERE ( ( author_ID = ? OR author_ID = ? OR author_ID = ? ) ) LIMIT 1000 [ 42, 150, 170 ]
[cql] - release connection
[2019-12-31T01:22:46.192Z | ERROR | 1878711]: SQLITE_ERROR: no such column: author_ID
```

It is applying the where clause to the outer SELECT which doesn't have the author_ID field (restriction from the authorisations). Adding author_ID into the OData query (ie. `/Books?$apply=groupby((title,author_ID))`) is successful as the author_ID field is now on the outer select.

```shell
GET /catalog/Books?$apply=groupby((title,author_ID))
[cql] - acquire connection
[cql] - SELECT title, author_ID FROM (SELECT title, author_ID FROM CatalogService_Books GROUP BY title, author_ID) WHERE ( ( author_ID = ? OR author_ID = ? OR author_ID = ? ) ) LIMIT 1000 [ 42, 150, 170 ]
[cql] - release connection
```

Expected Result: Both queries should work respecting authorisation values.


### 2. $count with $filter and $expand

Using the following OData query, I can retrieve the books and their authors with book titles starting with 'The':

```
http://localhost:4004/catalog/Books?$expand=author&$filter=startswith(title,%27The%27)
```

However, if I add the OData v4 system query parameter `$count=true` an error is returned. The expected result is that the count of all records is also returned (to help client-side paging). This is because in this scenario, the query is performed twice. The first time with limits (for data retrieval) and the second without limits but as a count function to generate the value for the OData count. This second query is failing.

For this query:

```
http://localhost:4004/catalog/Books?$count=true&$expand=author&$filter=startswith(title,%27The%27)
```

The message returned is:

```xml
<error xmlns="http://docs.oasis-open.org/odata/ns/metadata">
  <code>500</code>
  <message>SQLITE_ERROR: no such column: a.author_ID</message>
</error>
```

The console reports:

```shell
GET /catalog/Books?$count=true&$expand=author&$filter=startswith(title,%27The%27)
[cql] - acquire connection
[cql] - acquire connection
[cql] - SELECT a.ID AS "a_ID", a.title AS "a_title", a.stock AS "a_stock", a.author_ID AS "a_author_ID", b.ID AS "b_ID", b.name AS "b_name" FROM CatalogService_Books a LEFT JOIN CatalogService_Authors b ON ( b.ID = a.author_ID ) WHERE ( a.title LIKE ? AND ( ( a.author_ID = ? OR a.author_ID = ? OR a.author_ID = ? ) ) ) AND ( ( ( a.author_ID = ? OR a.author_ID = ? OR a.author_ID = ? ) ) ) LIMIT 1000 [
  'The%', 42,
  150,    170,
  42,     150,
  170
]
[cql] - release connection
[cql] - SELECT count ( ? ) AS "counted" FROM CatalogService_Books WHERE ( title LIKE ? AND ( ( a.author_ID = ? OR a.author_ID = ? OR a.author_ID = ? ) ) ) AND ( ( ( author_ID = ? OR author_ID = ? OR author_ID = ? ) ) ) [
  '1', 'The%',
  42,  150,
  170, 42,
  150, 170
]
[cql] - release connection
[2019-12-31T01:34:44.588Z | ERROR | 1878711]: SQLITE_ERROR: no such column: a.author_ID
```

Note on that the second query has erroneous restrictions on `a.author_ID` that appear to be copied from the first query. In the first query, we also have a duplication of the `a.author_ID` restriction.s 
