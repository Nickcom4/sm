/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_dashboard_js__ = __webpack_require__(1);


class App {
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
    let dashboard = new __WEBPACK_IMPORTED_MODULE_0__containers_dashboard_js__["a" /* default */]()

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
/* harmony export (immutable) */ __webpack_exports__["default"] = App;


let app = new App()
window.app = app


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_section__ = __webpack_require__(2);


class Dashboard {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Dashboard;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Slide {
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
/* unused harmony export default */



/***/ })
/******/ ]);