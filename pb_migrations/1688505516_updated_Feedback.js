migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aqw6x7mn12stw68")

  // remove
  collection.schema.removeField("begfpika")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aqw6x7mn12stw68")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "begfpika",
    "name": "content",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("spukvehc")

  return dao.saveCollection(collection)
})
