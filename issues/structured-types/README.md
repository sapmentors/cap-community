# Experiment on structured type(s)


This minimal scoped example describes the domain of a diver owning equipment.

There's 3 [divers](http://localhost:4004/structured-types/Divers), each [having equipment](http://localhost:4004/structured-types/Divers?$expand=equipmentToOne), with only [Mikey owning more than 1 equipment](http://localhost:4004/structured-types/Divers?$filter=name%20eq%20'Mikey'&$expand=equipmentToMany).

Problem showcase: `OData (v4) $filter`ing on complex type of a 1:1 relation fails while it works on a 1:n relation.

## how to follow allong

```bash
$> nvm use # optional
$> npm i
$> npm start
```

launches the `cap` tooling's persistence (`db`) and service (`srv`) with

* in-memory `sqlite`
* on <http://localhost:4004/>

## problem case description

For demonstration purpose, the entity [`Divers`](db/data-model.cds) holds 2 relations to the same target entity [`Equipments`](db/data-model.cds), one in 1:1 (`equipmentToOne`), the other in 1:n (`equipmentToMany`) cardinality.

`Euipments` property `suite` points to the complex type `Suite`, the latter consisting of a single property `formfactor`.

Filtering on the property `formfactor` of the complex type works fine if the complex type is used in an entity that lives in a n:1 relation.  The same `$filter` fails for the complex type living in a 1:1 cardinality.

Sample `OData` queries are located in `/tests` - specifically interesting are the last 2 failing ones in [filter.http](tests/filter.http), showcasing the filtering:

* `?$expand=equipmentToOne($filter=suite_formfactor eq 'kid')`
* `?$expand=equipmentToOn&$filter=equipmentToOne/suite_formfactor eq 'kid'`

Both are supposedly [valid OData v4 query syntax](http://docs.oasis-open.org/odata/odata/v4.01/csprd05/part2-url-conventions/odata-v4.01-csprd05-part2-url-conventions.html#sec_SystemQueryOptionexpand).
