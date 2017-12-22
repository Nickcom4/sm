import Dashboard from './containers/dashboard.js'

export default class App {
  constructor() {
    //document.body.style.background = 'url("/images/background.png") no-repeat center center fixed'
    document.body.style.backgroundColor = '#ffffff'
    document.body.style.backgroundSize = 'cover'
    document.body.style.height = '100%'
    document.body.style.margin = '0'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'

    let content = document.getElementById('content')
    //content.append()

    //instantiate dashboard
    let dashboard = new Dashboard()

    //call getData to execute Promise
    //when Promise is fulfilled, execute .then
    //.then will pass me (bring back) data
    dashboard.getData().then((data) => {
      //pass data to getContent of dashboard
      //append result of getContent to main content
      content.append(dashboard.getContent(data))
      dashboard.animate()
    })
  }

}

let app = new App()
window.app = app
