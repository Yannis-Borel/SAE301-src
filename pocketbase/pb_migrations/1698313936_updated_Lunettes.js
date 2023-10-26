/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5dd2kd9swdmfr7j")

  collection.name = "Lunette"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5dd2kd9swdmfr7j")

  collection.name = "Lunettes"

  return dao.saveCollection(collection)
})
