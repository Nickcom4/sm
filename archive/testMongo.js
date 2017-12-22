//let program = require('commander')
//let Marvel = require('./js/components/marvel')
let Marvel = require('./importMarvelData_class')

let marvel = new Marvel()
/*
marvel.importData((arrayCharacters) => {
  marvel.insertDocuments(arrayCharacters)
})
*/
marvel.getMongoData('Ancient One')
