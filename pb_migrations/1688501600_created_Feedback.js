migrate((db) => {
  const collection = new Collection({
    "id": "aqw6x7mn12stw68",
    "created": "2023-07-04 20:13:20.847Z",
    "updated": "2023-07-04 20:13:20.847Z",
    "name": "Feedback",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("aqw6x7mn12stw68");

  return dao.deleteCollection(collection);
})
