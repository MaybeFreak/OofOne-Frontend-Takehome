migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aqw6x7mn12stw68")

  // remove
  collection.schema.removeField("5vrcw2io")

  // remove
  collection.schema.removeField("e0acti2s")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aqw6x7mn12stw68")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5vrcw2io",
    "name": "question",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e0acti2s",
    "name": "answer",
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
  collection.schema.removeField("begfpika")

  return dao.saveCollection(collection)
})
