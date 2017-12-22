let program = require('commander')
let Marvel = require('./marvelClass')

program
  .command('top2')
  .action(() => {
      console.log('Avengers are documented below')
        //log characters
      let marvel = new Marvel()
      marvel.getCharacters()
  })


program
  .command('lookupCharacter')
  .arguments('<name>')
  .action((name) => {
    nameValue = name 
    console.log('You want to lookup %s.', nameValue)
    let marvel = new Marvel()
    marvel.lookupCharacter(nameValue)
      
  })

program.parse(process.argv)

if (typeof nameValue === 'undefined') {
   console.error('no command given!')
   process.exit(1)
}
//console.log('command:', nameValue)
if(!program.args.length)  program.help()
