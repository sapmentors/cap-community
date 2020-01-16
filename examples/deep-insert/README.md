# Example: Deep Insert

Inserting parent and children in a single OData operation.

## Try it out

First, get the service up and running:

1. Get to right place: `cd examples/deep-insert/`
1. Install deps and run in memory: `npm i && cds run --in-memory`

Now try a deep insert:

```
curl http://localhost:4004/main/Headers \
  -H "Content-Type: application/json" \
  -d '{ "identifier": "Header 1", "items": [ { "data": "A" }, { "data": "B" } ] }'
```

This should produce something like this:

```json
{"@odata.context":"$metadata#Headers(items())/$entity","@odata.metadataEtag":"W/\"mrBtKQDx8lALPbySv3jWRBzDD/LEPToYN//9it140aI=\"","ID":"c6e6dd45-73e3-4950-9853-a414d265f88a","modifiedAt":null,"createdAt":"2019-10-16T11:15:42Z","createdBy":"anonymous","modifiedBy":null,"identifier":"Header 1","items":[{"ID":"23235a8f-5315-4637-bb7a-5d06c1156113","data":"A","parent_ID":null},{"ID":"222c7d18-94f3-4109-ba75-117b0a7b6716","data":"B","parent_ID":null}]}
```

Now check the data with an OData query operation, expanding the items relationship, and piping the output into [jq](https://stedolan.github.io/jq/), using the default operation that will pretty-print the JSON:

```shell
curl -s http://localhost:4004/main/Headers?\$expand=items | jq
```

This will produce something like this:

```json
{
  "@odata.context": "$metadata#Headers(items())",
  "@odata.metadataEtag": "W/\"mrBtKQDx8lALPbySv3jWRBzDD/LEPToYN//9it140aI=\"",
  "value": [
    {
      "ID": "c6e6dd45-73e3-4950-9853-a414d265f88a",
      "modifiedAt": null,
      "createdAt": "2019-10-16T11:15:42Z",
      "createdBy": "anonymous",
      "modifiedBy": null,
      "identifier": "Header 1",
      "items": [
        {
          "ID": "222c7d18-94f3-4109-ba75-117b0a7b6716",
          "data": "B",
          "parent_ID": "c6e6dd45-73e3-4950-9853-a414d265f88a"
        },
        {
          "ID": "23235a8f-5315-4637-bb7a-5d06c1156113",
          "data": "A",
          "parent_ID": "c6e6dd45-73e3-4950-9853-a414d265f88a"
        }
      ]
    }
  ]
}
```

