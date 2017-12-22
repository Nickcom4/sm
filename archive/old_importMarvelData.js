let program = require('commander')
let Marvel = require('./callMarvel')

let marvel = new Marvel()

program
  .command('import')
  .description('import some characters from marvel-api')
  .action() => {
    marvel.getData((arrayCharacters) => {
      marvel.insertDocuments(arrayCharacters)
    })
  }

program
  .command('pull', 'pull data from MongoDB MarvelData')
  .arguments('<name>', 'name to query/find')
  .action(name) => {
    marvel.getMongoData(name)
  }

program.parse(process.argv)

if (typeof nameValue === 'undefined') {
   console.error('no command given!')
   process.exit(1)
}
//console.log('command:', nameValue)
if(!program.args.length)  program.help()
