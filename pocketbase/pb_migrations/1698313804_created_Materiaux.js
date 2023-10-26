/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hyif0ujfvmw8ohn",
    "created": "2023-10-26 09:50:03.987Z",
    "updated": "2023-10-26 09:50:03.987Z",
    "name": "Materiaux",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "e26a0ve1",
        "name": "libelle",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
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
  const collection = dao.findCollectionByNameOrId("hyif0ujfvmw8ohn");

  return dao.deleteCollection(collection);
})
