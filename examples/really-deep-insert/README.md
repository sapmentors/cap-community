# Example: Deep Insert

Inserting parent and many children in a single OData operation. Shows, that deep-insert works over many nodes (big depth).

## Try it out

First, get the service up and running:

1. Get to right place: `cd examples/really-deep-insert/`
1. Install deps and run in memory: `npm i && cds run --in-memory`

Now try a (really) deep insert:

```
curl http://localhost:4004/main/Heads \
  -H "Content-Type: application/json" \
  -d '{ "name": "test", "node": { "name": "test", "node": { "name": "test", "node": { "name": "test", "node": { "name": "test", "node": { "name": "test" } } } } } }'
```

This should produce something like this:

```json
{
    "@odata.context": "$metadata#Head(node(node(node(node(node())))))/$entity",
    "@odata.metadataEtag": "W/\"lD+uAhRwF8VbRuNWUNOs4st+7nhM3yoEdy88VpCMuj4=\"",
    "ID": "fa3ccd02-779a-4c0f-a05e-160a2555db75",
    "name": "test",
    "node": {
        "ID": "5b1bdce9-8191-4788-87c9-1e58a70b6d29",
        "name": "test",
        "parent_ID": null,
        "node": {
            "ID": "7d93ddce-6b91-445c-b548-14ebc464d863",
            "name": "test",
            "parent_ID": null,
            "node": {
                "ID": "9aad188a-380f-4c88-a7a5-22a8f4617806",
                "name": "test",
                "parent_ID": null,
                "node": {
                    "ID": "30f8a017-ba8a-46ee-88b9-9f7406a9fcbe",
                    "name": "test",
                    "parent_ID": null,
                    "node": {
                        "ID": "b7fa1b24-ace0-4f5e-8a89-0c08497c3fa6",
                        "name": "test",
                        "parent_ID": null
                    }
                }
            }
        }
    }
}
```

Now check the data with an OData query operation, expanding the items relationships recursively, and piping the output into [jq](https://stedolan.github.io/jq/), using the default operation that will pretty-print the JSON:

```shell
curl -s localhost:4004/main/Head?\$expand=node(\$expand=node(\$expand=node(\$expand=node(\$expand=node)))) | jq
```

This will produce something like this:

```json
{
    "@odata.context": "$metadata#Head(node(node(node(node(node())))))",
    "@odata.metadataEtag": "W/\"lD+uAhRwF8VbRuNWUNOs4st+7nhM3yoEdy88VpCMuj4=\"",
    "value": [
        {
            "ID": "fa3ccd02-779a-4c0f-a05e-160a2555db75",
            "name": "test",
            "node": {
                "ID": "5b1bdce9-8191-4788-87c9-1e58a70b6d29",
                "name": "test",
                "parent_ID": "fa3ccd02-779a-4c0f-a05e-160a2555db75",
                "node": {
                    "ID": "7d93ddce-6b91-445c-b548-14ebc464d863",
                    "name": "test",
                    "parent_ID": "5b1bdce9-8191-4788-87c9-1e58a70b6d29",
                    "node": {
                        "ID": "9aad188a-380f-4c88-a7a5-22a8f4617806",
                        "name": "test",
                        "parent_ID": "7d93ddce-6b91-445c-b548-14ebc464d863",
                        "node": {
                            "ID": "30f8a017-ba8a-46ee-88b9-9f7406a9fcbe",
                            "name": "test",
                            "parent_ID": "9aad188a-380f-4c88-a7a5-22a8f4617806",
                            "node": {
                                "ID": "b7fa1b24-ace0-4f5e-8a89-0c08497c3fa6",
                                "name": "test",
                                "parent_ID": "30f8a017-ba8a-46ee-88b9-9f7406a9fcbe"
                            }
                        }
                    }
                }
            }
        }
    ]
}
```

I don´t so a limit in the depth, the operation is really fast with 5 nodes.