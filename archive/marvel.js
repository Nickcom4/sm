//let mongoClient = require('mongod').MongoClient

class Marvel {
  constructor(){
  }

  getCharacters(){
    db.characters.find(name)
      .then(console.log)
      .fail(console.error)
      .done()
  }
}
