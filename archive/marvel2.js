//let api = require('marvel-api')
let MongoClient = require('mongodb').MongoClient

export default class Marvel {
  /*
  constructor(){
    this.marvel = api.createClient({
      publicKey: '07419ec59343f525079f6cccea583c1d',
      privateKey: '4f5f529078f1233922d32d58758d77661f575c3c'
    })
    this.url = 'mongodb://localhost:27017/MarvelData'
  }

  importData(callback){ //callback here
    //For each character sourced from Marvel API
    //Create an object (of data) that pushes into
    //the array of characters
    let arrayCharacters = []
    let obj = {}
    //fetch first 30 characters, beginning at character index 20
    this.marvel.characters.findAll(30,20)
      .then((characters) => {
        characters.data.forEach((character) => {
        obj = {
          name        : character.name,
          description : character.description,
          thumbnail   : character.thumbnail.path + "." + character.thumbnail.extension,
          link        : character.resourceURI
          }
        //console.log(obj)
        arrayCharacters.push(obj)
       })
        //console.log(arrayCharacters)
      callback(arrayCharacters)
      })
      //.fail(console.err)
     // .done
      return arrayCharacters
  }

  insertDocuments(docs){
    MongoClient.connect(this.url, (err, db) => {
     if(!err){
       let collection = db.collection('characters')
         collection.insertMany(docs, (err, result) => {
         console.log(result)
       })
       db.close()
     }
     else {
       console.log(err)
     }
    })
  }
*/
  getMongoData(callback){
    let result = []
    MongoClient.connect(this.url, (err, db) => {
      if (err) throw err
        let query = { name: '' }
        query.name = callback
        db.collection('characters').find(query).toArray((err, result) => {
          if (err) throw err
          //console.log(result)
          //callback && callback(result)
          callback(result)
          console.log(JSON.stringify(result, null, 2))
          //callback(JSON.stringify(result, null, 2))
          db.close()
        })
      return JSON.stringify(result, null, 2)
    })
    //return result
  }
    
}
//module.exports = Marvel
