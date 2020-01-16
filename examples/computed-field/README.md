# Example: Computed Field

Using JS implementation logic to compute the value of a field at the service level. See the blog post [Computed field example in CAP](https://blogs.sap.com/2019/08/21/computed-field-example-in-cap/) for more information.

## Try it out

First, get the service up and running:

1. Get to right place: `cd examples/computed-field/`
1. Install deps and run in memory: `npm i && cds run --in-memory`

Now retrieve the Authors entityset and profit from the computed field ... using [jq](https://stedolan.github.io/jq/) to make the output more readable:

```shell
curl -s http://localhost:4004/catalog/Authors | jq
```

This will produce something like this, which includes correct values for the `numberOfBooks` property in each case:

```json
{
  "@odata.context": "$metadata#Authors",
  "@odata.metadataEtag": "W/\"8q5jjLD6vJ0ARrjnkajTONXIn38vpa1wxoXucua4kzU=\"",
  "value": [
    {
      "ID": 42,
      "name": "Douglas Adams",
      "numberOfBooks": 3
    },
    {
      "ID": 101,
      "name": "Emily Brontë",
      "numberOfBooks": 1
    },
    {
      "ID": 107,
      "name": "Charlote Brontë",
      "numberOfBooks": null
    },
    {
      "ID": 150,
      "name": "Edgar Allen Poe",
      "numberOfBooks": 2
    },
    {
      "ID": 170,
      "name": "Richard Carpenter",
      "numberOfBooks": 1
    }
  ]
}
```
