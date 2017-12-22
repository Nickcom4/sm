export default class Slide {
  constructor(options){
    this.options = options
  }
  getContent(){
    //let section = document.createElement('section')

    //section.classList.add('responsive')
    //section.style.height = '300px'
    //section.style.margin = '1%'

    let slide = document.createElement('div')   
    let image = document.createElement('img')
    image.src = this.options.image
    slide.appendChild(image)
    //section.append(container)
    
    //section.append(cardFooter)
    
  return slide
  }
}
