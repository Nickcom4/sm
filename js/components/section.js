export default class Section{
  constructor(options){
    this.options = options
  }
  getContent(){


    let section = document.createElement('div')

    //section.classList.add('col-6')
    section.style.height = '300px'
    //section.style.margin = '1%'
    
    //create slider
    let sliderContainer = document.createElement('div')
    sliderContainer.classList.add('w3-content', 'w3-display-container')
    let slider = document.createElement('div')
    slider.classList.add('w3-display-container', 'mySlides')    
    let image = document.createElement('img')
    image.src = this.options.image
    image.style.width = '100%'
    slider.append(image)
    let imageCaption = document.createElement('div')
    imageCaption.classList.add('w3-display-bottommiddle', 'w3-large', 'w3-container', 'w3-padding-5', 'w3-black')
    imageCaption.append(this.options.title + ' - ' + this.options.subtitle)
    slider.append(imageCaption)
    sliderContainer.appendChild(slider)
    
    //Create card header
    let cardHeader = document.createElement('div')
    cardHeader.style.height = '15%'

    //-->Create card title
    let headerTitle = document.createElement('div')
    headerTitle.append(this.options.name)
    headerTitle.style.textAlign = 'center'
    headerTitle.style.color = '#dddddd'
    cardHeader.append(headerTitle)
    
    section.append(sliderContainer)
    
    //section.append(cardFooter)
    
  return section
  }
}
