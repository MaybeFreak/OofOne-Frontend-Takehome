migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aqw6x7mn12stw68")

  // remove
  collection.schema.removeField("spukvehc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vev7bbvg",
    "name": "data",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aqw6x7mn12stw68")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "spukvehc",
    "name": "data",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("vev7bbvg")

  return dao.saveCollection(collection)
})
