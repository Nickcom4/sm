import Section from '../components/section'

export default class Dashboard {
  constructor(){
  }

  getData(){
    //temporary storage of local object
    let promise = new Promise((resolve, reject) => {
      let data = [
      {
        title: 'Nautic Star',
        subtitle: '2200 Sport',
        image:'images/2200sport.jpg'
      },
      {
        title: 'Nautic Star',
        subtitle: '2140 Sport',
        image:'images/2140sport.jpg'
      },
      {
        title: 'Nautic Star',
        subtitle: '2400 Sport',
        image:'images/2400sport.jpg'
      }
      ]
      resolve(data) 
    })
    return(promise)
  }

  getContent(data){
    let container = document.createElement('div')
    container.id = 'container'
    
    let title = document.createElement('h1')
    title.style.color = '#dddddd'
    title.style.textAlign = 'left'
    title.style.margin = '2%'
    title.style.textDecoration = 'underline'
    
    let logo = document.createElement('img')
    logo.src = '/images/logo.png'
    logo.style.width = '150px'
    title.append(logo)
    //title.append('Sunrise Marine')
    //content.append(title)
    container.appendChild(title)

    let section = document.createElement('section') 
    section.classList.add('responsive')
    //Open each object in data
    data.forEach((item) => {
      //create new slide for each object
      console.log(item)
      //execute getContent in section class to pull data onto section
      let slide = new Slide(item)
      //add new section to container of dashboard
      container.append(slide.getContent())

    })
    container.append(section)

    return container

    }

  animate(){

  }
}
