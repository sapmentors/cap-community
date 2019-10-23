Incredibly simple application making use of Composition key word in CDS.

Books is a composition of many Chapters

entity Books {
  key ID : Integer;
  title  : String;
  chapters : Composition of many Chapters on chapters.book = $self;
  stock  : Integer;
}

entity Chapters {
    key ID : Integer;
    book : Association to Books;
    number : Integer;
    name    : String;
}

Performing a deep insert of a book and chapters using the following JSON:

{
	"ID": 1,
	"title": "War and Peace",
	"stock" : 5,
	"chapters" : [{"ID":1, "number":1, "name":"War"},
				  {"ID":2, "number":2, "name":"Peace"}]
}

A node.Js CAP application will insert both the parent and children and add the appropriate book link with no further code.
A Java OData v4 CAP application will insert the parent only and ignore the child records. If the relationhsip Book_ID is provided in the child JSON, the header (book) is the only line inserted.
A Java OData v2 CAP application (this one), with the same payload returns:

<?xml version='1.0' encoding='UTF-8'?>
<error xmlns="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata">
    <code>CDSRuntimeException.QUERY_FAILED</code>
    <message xml:lang="en">CDS Query execution failed. Please check logs for more details</message>
</error>

It may be worth noting that the cascading delete functionality works perfectly well using Java OData v2. 

I had anticipated that the deep insert would work the same as the node.js implementation. If not please advise what is required to be implemented for each OData version and will this be the long term solution or will it ultimately behave like node.js?

I assume the CDSRuntimeException is an issue/bug?

