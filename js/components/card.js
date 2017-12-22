export default class Card{
  constructor(options){
    this.options = options
  }
  getContent(){
    let card = document.createElement('div')

    card.classList.add('col-6')
    card.style.height = '300px'
    card.style.margin = '1%'
    //card.style.cursor = 'pointer'
    card.style.boxShadow = '0px 0px 3px #888888'
    card.style.borderWidth = '2px'
    card.style.borderStyle = 'none'
    card.style.borderColor = 'gold'
    card.style.background  = 'rgba(0, 0, 0, 0.4)'
    card.style.borderRadius = '25px'

    //Create card header
    let cardHeader = document.createElement('div')
    cardHeader.style.height = '15%'

    //-->Create card title
    let headerTitle = document.createElement('div')
    headerTitle.append(this.options.name)
    headerTitle.style.textAlign = 'center'
    headerTitle.style.color = '#dddddd'
    cardHeader.append(headerTitle)
    
    card.append(cardHeader)
    
    //Create card body
    let cardBody = document.createElement('div')
    cardBody.style.height = '75%'
    cardBody.style.display = 'flex'
    cardBody.style.margin = 'auto'
    
    //Create image holder inside body
    let imageContainer = document.createElement('div')
    imageContainer.style.flex = '.5'
    
    //create image inside image holder - use 'img' tag
    let cardImage = document.createElement('img')
    cardImage.src = this.options.thumbnail
    cardImage.style.width = '150px' 
    imageContainer.append(cardImage)
    cardBody.append(imageContainer)
        
    //Create description field inside body
    let cardDescription = document.createElement('div')
    cardDescription.style.flex = '1'
    cardDescription.style.color = '#ffffff'
    cardDescription.append(this.options.description)
    
    
    cardBody.append(cardDescription)
    card.append(cardBody)
    
    //create footer inside card
    let cardFooter = document.createElement('div')
    cardFooter.style.height = '10%'
    cardFooter.style.textAlign = 'right'
//    cardFooter.style.display = 'flex'
//    cardFooter.style.margin = 'auto'

    //create hyperlink inside footer - use 'a' tag
    let cardLink = document.createElement('a')
    cardLink.href = this.options.link
    //cardLink.append(this.options.linkText)
    cardLink.append('Click for more info')
    cardLink.style.color = '#bbbbbb'

    cardFooter.append(cardLink)
    card.append(cardFooter)
    
  return card
  }
}
