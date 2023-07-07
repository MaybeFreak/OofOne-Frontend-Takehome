migrate((db) => {
  const collection = new Collection({
    "id": "rvxdb6cw7gf7ojp",
    "created": "2023-07-07 13:00:40.899Z",
    "updated": "2023-07-07 13:00:40.899Z",
    "name": "forms",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kxtsk0ah",
        "name": "form",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rvxdb6cw7gf7ojp");

  return dao.deleteCollection(collection);
})
