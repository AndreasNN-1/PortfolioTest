/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Initialize.js":
/*!***************************!*\
  !*** ./src/Initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
/* harmony import */ var _PC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PC */ "./src/PC.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Initialize = /*#__PURE__*/_createClass(function Initialize() {
  var _this = this;
  _classCallCheck(this, Initialize);
  var aspectRatio = (window.innerWidth / window.innerHeight).toFixed(2);
  console.log(aspectRatio);
  var link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = "./assets/imgs/LOGO.png";
  document.title = "AndreasNN1 - STEALTH Project";
  document.head.appendChild(link);
  var StartVid = sessionStorage.getItem('StartVid');
  if (StartVid !== 'Done') {
    this.startbtnCon = document.createElement('div');
    this.startbtnCon.setAttribute('class', 'startbtnCon');
    document.body.appendChild(this.startbtnCon);
    this.startbtn = document.createElement('div');
    this.startbtn.setAttribute('class', 'startbtn');
    this.startbtn.innerText = "Enter";
    this.startbtnCon.appendChild(this.startbtn);
    this.startbtn.addEventListener('click', function () {
      var videoSrc;
      var video = document.createElement('video');
      if (aspectRatio < 0.7) {
        videoSrc = './assets/Title_iphone.mp4';
      } else if (aspectRatio < 1.4) {
        videoSrc = './assets/Title_Ipad.mp4';
      } else if (aspectRatio < 1.9) {
        videoSrc = './assets/Title_PC.mp4';
        if (aspectRatio < 1.78) {
          video.style.width = 'auto';
          video.style.height = '100%';
        } else {
          video.style.width = '100%';
          video.style.height = 'auto';
        }
      } else {
        videoSrc = './assets/Title_PC.mp4';
        if (aspectRatio < 1.78) {
          video.style.width = 'auto';
          video.style.height = '100%';
        } else {
          video.style.width = '100%';
          video.style.height = 'auto';
        }
      }
      video.setAttribute('src', videoSrc);
      console.log(videoSrc);
      video.setAttribute('autoplay', '');
      document.body.appendChild(video);
      _this.startbtnCon.remove();
      video.addEventListener('ended', function () {
        video.parentNode.removeChild(video);
        sessionStorage.setItem('StartVid', 'Done');
        new _PC__WEBPACK_IMPORTED_MODULE_0__["default"]();
      });
    });
  } else {
    new _PC__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
} // END constructor
); // END class


/***/ }),

/***/ "./src/PC.js":
/*!*******************!*\
  !*** ./src/PC.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PC)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var PC = /*#__PURE__*/_createClass(function PC() {
  var _this = this;
  _classCallCheck(this, PC);
  function generateRandomNumber() {
    return Math.floor(1000000000 + Math.random() * 9000000000);
  }
  function updateTitle() {
    setInterval(function () {
      var randomNumber = generateRandomNumber();
      document.title = randomNumber;
    }, 500);
  }
  updateTitle();
  var bodyElement = document.querySelector('body');
  var aspectRatio = (window.innerWidth / window.innerHeight).toFixed(2);
  if (aspectRatio > 1.73 && aspectRatio < 3.0) {
    this.main = document.createElement('main');
    bodyElement.appendChild(this.main);
    this.Container = document.createElement('div');
    this.Container.setAttribute('class', 'Container');
    this.main.appendChild(this.Container);
    var Booted = sessionStorage.getItem('Booted');
    if (Booted !== 'yes') {
      var video = document.createElement('video');
      video.setAttribute('src', './assets/PCboot.mp4');
      video.setAttribute('id', 'Bootvid');
      video.setAttribute('autoplay', '');
      this.main.appendChild(video);
      var Bootvid = document.getElementById('Bootvid');
      Bootvid.addEventListener('playing', function () {
        var itemCons = document.querySelectorAll('.ItemCon');
        itemCons.forEach(function (itemCon) {
          itemCon.style.zIndex = '-2';
        });
        Bootvid.style.zIndex = '-1';
      });
      Bootvid.addEventListener('ended', function () {
        Bootvid.remove();
        var itemCons = document.querySelectorAll('.ItemCon');
        itemCons.forEach(function (itemCon) {
          itemCon.style.zIndex = '';
          sessionStorage.setItem('Booted', 'yes');
        });
      });
    }
    this.BackImg = document.createElement('img');
    this.BackImg.setAttribute('class', 'BackImg');
    this.BackImg.setAttribute('src', './assets/imgs/backG.png');
    this.main.appendChild(this.BackImg);
    this.ItemContainer = document.createElement('div');
    this.ItemContainer.setAttribute('class', 'ItemContainer');
    this.Container.appendChild(this.ItemContainer);
    this.itemCon = document.createElement('div');
    this.item = document.createElement('img');
    this.text = document.createElement('div');
    this.item.setAttribute('src', './assets/imgs/Icons-trashBin-empty.png');
    this.itemCon.setAttribute('class', 'ItemCon');
    this.itemCon.setAttribute('id', 'trashBin');
    this.item.setAttribute('class', 'Item');
    this.text.setAttribute('class', 'Itemtext');
    this.text.innerText = 'Recycle bin';
    this.ItemContainer.appendChild(this.itemCon);
    this.itemCon.appendChild(this.item);
    this.itemCon.appendChild(this.text);
    this.itemCon = document.createElement('div');
    this.item = document.createElement('img');
    this.text = document.createElement('div');
    this.item.setAttribute('src', './assets/imgs/Icons-fulder-empty.png');
    this.itemCon.setAttribute('class', 'ItemCon');
    this.itemCon.setAttribute('id', 'EmptyFolder');
    this.item.setAttribute('class', 'Item');
    this.text.setAttribute('class', 'Itemtext');
    this.text.innerText = 'Empty folder';
    this.ItemContainer.appendChild(this.itemCon);
    this.itemCon.appendChild(this.item);
    this.itemCon.appendChild(this.text);
    this.itemCon = document.createElement('div');
    this.item = document.createElement('img');
    this.text = document.createElement('div');
    this.item.setAttribute('src', './assets/imgs/Icons-fulder-full.png');
    this.itemCon.setAttribute('class', 'ItemCon');
    this.itemCon.setAttribute('id', 'FullFolder');
    this.item.setAttribute('class', 'Item');
    this.text.setAttribute('class', 'Itemtext');
    this.text.innerText = 'Full folder';
    this.ItemContainer.appendChild(this.itemCon);
    this.itemCon.appendChild(this.item);
    this.itemCon.appendChild(this.text);
    this.itemCon = document.createElement('div');
    this.item = document.createElement('img');
    this.text = document.createElement('div');
    this.item.setAttribute('src', './assets/imgs/Icons-fulder-Locked.png');
    this.itemCon.setAttribute('class', 'ItemCon');
    this.itemCon.setAttribute('id', 'lockedFolder1');
    this.item.setAttribute('class', 'Item');
    this.text.setAttribute('class', 'Itemtext');
    this.text.innerText = 'Locked folder 1';
    this.ItemContainer.appendChild(this.itemCon);
    this.itemCon.appendChild(this.item);
    this.itemCon.appendChild(this.text);
    this.itemCon = document.createElement('div');
    this.item = document.createElement('img');
    this.text = document.createElement('div');
    this.item.setAttribute('src', './assets/imgs/Icons-fulder-Locked.png');
    this.itemCon.setAttribute('class', 'ItemCon');
    this.itemCon.setAttribute('id', 'lockedFolder2');
    this.item.setAttribute('class', 'Item');
    this.text.setAttribute('class', 'Itemtext');
    this.text.innerText = 'Locked folder 2';
    this.ItemContainer.appendChild(this.itemCon);
    this.itemCon.appendChild(this.item);
    this.itemCon.appendChild(this.text);
    this.itemCon = document.createElement('div');
    this.item = document.createElement('img');
    this.text = document.createElement('div');
    this.item.setAttribute('src', './assets/imgs/Icons-fulder-Locked.png');
    this.itemCon.setAttribute('class', 'ItemCon');
    this.itemCon.setAttribute('id', 'lockedFolder3');
    this.item.setAttribute('class', 'Item');
    this.text.setAttribute('class', 'Itemtext');
    this.text.innerText = 'Locked folder 3';
    this.ItemContainer.appendChild(this.itemCon);
    this.itemCon.appendChild(this.item);
    this.itemCon.appendChild(this.text);
    this.itemCon = document.createElement('div');
    this.item = document.createElement('img');
    this.text = document.createElement('div');
    this.item.setAttribute('src', './assets/imgs/Icons-file-txt.png');
    this.itemCon.setAttribute('class', 'ItemCon');
    this.item.setAttribute('class', 'Item');
    this.text.setAttribute('class', 'Itemtext');
    this.text.innerText = 'text file 123';
    this.ItemContainer.appendChild(this.itemCon);
    this.itemCon.appendChild(this.item);
    this.itemCon.appendChild(this.text);
    var itemContainers = document.querySelectorAll('.ItemCon');
    itemContainers.forEach(function (itemCon) {
      if (itemCon.id.includes('locked')) {
        itemCon.addEventListener('click', function () {
          var clickedItemId = itemCon.innerText;
          var newDiv = document.createElement('div');
          newDiv.setAttribute('class', 'LockPass');
          newDiv.style.userSelect = 'none'; // Prevent text selection
          _this.Container.appendChild(newDiv);
          var newHeader = document.createElement('div');
          newHeader.setAttribute('class', 'LockPassnewHeader');
          newHeader.innerText = clickedItemId;
          newDiv.appendChild(newHeader);
          var newHeaderExit = document.createElement('div');
          newHeaderExit.setAttribute('class', 'LockPassnewHeaderExit');
          newHeaderExit.innerText = '✕';
          newHeader.appendChild(newHeaderExit);
          newHeaderExit.addEventListener('click', function () {
            newDiv.remove();
          });
          var isDragging = false;
          var initialX, initialY;
          newHeader.addEventListener('mousedown', function (e) {
            isDragging = true;
            var containerRect = _this.Container.getBoundingClientRect();
            initialX = e.clientX - newDiv.offsetLeft;
            initialY = e.clientY - newDiv.offsetTop;
          });
          document.addEventListener('mousemove', function (e) {
            if (isDragging) {
              var containerRect = _this.Container.getBoundingClientRect();
              var paddingX = containerRect.width * 0.029; // 2.4% of container width
              var paddingY = containerRect.height * 0.054; // 3.4% of container height
              var maxX = containerRect.width - newDiv.offsetWidth - paddingX;
              var maxY = containerRect.height - newDiv.offsetHeight - paddingY;
              var currentX = e.clientX - initialX;
              var currentY = e.clientY - initialY;
              currentX = Math.min(Math.max(paddingX, currentX), maxX);
              currentY = Math.min(Math.max(paddingY, currentY), maxY);
              newDiv.style.left = "".concat(currentX, "px");
              newDiv.style.top = "".concat(currentY, "px");
            }
          });
          document.addEventListener('mouseup', function () {
            isDragging = false;
          });
          var newCon = document.createElement('form');
          newCon.setAttribute('class', 'LockPassCon');
          newCon.setAttribute('action', '');
          newDiv.appendChild(newCon);
          var LockLabel = document.createElement('label');
          LockLabel.innerText = "password";
          newCon.appendChild(LockLabel);
          var Lockinput = document.createElement('input');
          Lockinput.setAttribute('class', 'Lockinput');
          Lockinput.setAttribute('placeholder', 'Password');
          newCon.appendChild(Lockinput);
          var LockBtns = document.createElement('div');
          LockBtns.setAttribute('class', 'Lockinput');
          newCon.appendChild(LockBtns);
          var LockSubmit = document.createElement('button');
          LockSubmit.setAttribute('class', 'Lockinput');
          LockSubmit.setAttribute('type', 'submit');
          LockSubmit.innerText = "OK";
          LockBtns.appendChild(LockSubmit);
          var LockExit = document.createElement('button');
          LockExit.setAttribute('class', 'LockExit');
          LockExit.innerText = "Cancel";
          LockBtns.appendChild(LockExit);
          LockExit.addEventListener('click', function () {
            newDiv.remove();
          });
        });
      }
    });
  } else {
    this.AlertApsCon = document.createElement('div');
    this.AlertApsCon.setAttribute('class', 'startbtnCon');
    document.body.appendChild(this.AlertApsCon);
    this.AlertAps = document.createElement('div');
    this.AlertAps.setAttribute('class', 'AlertAps');
    this.AlertAps.innerText = "Aspect ratio is not within the acceptable range: " + aspectRatio;
    this.AlertApsCon.appendChild(this.AlertAps);
    this.Backbtn = document.createElement('div');
    this.Backbtn.setAttribute('class', 'startbtn');
    this.Backbtn.innerText = "Go Back";
    this.AlertApsCon.appendChild(this.Backbtn);
    this.Backbtn.addEventListener('click', function () {
      window.location.href = "./";
    });
  }
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Revamped-X3q1a.ttf */ "./assets/fonts/Revamped-X3q1a.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/imgs/container.png */ "./assets/imgs/container.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"MyFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: normal;\n  font-style: normal;\n}\nhtml {\n  scrollbar-width: thin;\n  scrollbar-color: aqua rgba(1, 1, 43, 0.521);\n  scroll-behavior: smooth;\n  overflow: hidden;\n}\nhtml body {\n  position: relative;\n  margin: 0;\n  background-color: black;\n}\nhtml body .startbtnCon {\n  background-color: #4ef3fa;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background-color: #111111;\n  z-index: 11;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\nhtml body .startbtnCon .startbtn {\n  text-wrap: nowrap;\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 10vw;\n  color: #4ef3fa;\n  padding: 1vw 10vw;\n  width: auto;\n  height: auto;\n  background-color: #111111;\n  text-align: center;\n  border: #4ef3fa 2px solid;\n  border-radius: 10px;\n}\nhtml body .startbtnCon .startbtn:hover {\n  background-color: #4ef3fa;\n  color: #111111;\n}\nhtml body .startbtnCon .AlertAps {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n  font-size: 6vw;\n  color: #4ef3fa;\n  text-align: center;\n}\nhtml body video {\n  z-index: 10;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 1400px) {\n  html body video {\n    width: 100%;\n    height: auto;\n  }\n}\n@media (max-width: 1200px) {\n  html body video {\n    width: auto;\n    height: 100%;\n  }\n}\n@media (max-width: 800px) {\n  html body video {\n    width: 100%;\n    height: auto;\n  }\n}\nhtml body main {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100vh;\n}\nhtml body main .Container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 100%;\n  background-position: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 75vw;\n  height: 49.5376486129vw;\n}\nhtml body main .Container .ItemContainer {\n  width: 94.4%;\n  height: 93.2%;\n  max-height: 89.6%;\n  max-width: 94.4%;\n  z-index: 1;\n  margin: 3.4% 2.9%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: flex-start;\n}\nhtml body main .Container .ItemContainer .ItemCon {\n  cursor: pointer;\n  width: 5.1666666667%;\n  height: 8.6555555556%;\n  margin: 0.75%;\n  padding: 0;\n}\nhtml body main .Container .ItemContainer .ItemCon .Item {\n  margin: 0;\n  padding: 0;\n  height: 75%;\n}\nhtml body main .Container .ItemContainer .ItemCon .Itemtext {\n  margin: 0;\n  padding: 0;\n  font-size: 0.6vw;\n  text-align: center;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  height: 15%;\n}\nhtml body main .Container .LockPass {\n  position: absolute;\n  top: 40%;\n  left: 40%;\n  width: 20vw;\n  height: auto;\n  max-width: 70vw;\n  border: #0095ff 1px solid;\n}\nhtml body main .Container .LockPass .LockPassnewHeader {\n  position: relative;\n  height: auto;\n  background-color: #fff;\n  text-align: start;\n  font-family: Arial, Helvetica, sans-serif;\n  color: rgb(0, 0, 0);\n  padding: 0.4vw 0.8vw;\n  font-size: 0.8vw;\n}\nhtml body main .Container .LockPass .LockPassnewHeader .LockPassnewHeaderExit {\n  cursor: pointer;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 1.4vw;\n  padding: 0 0.5vw;\n  margin-top: -0.18vw;\n}\nhtml body main .Container .LockPass form {\n  height: 4vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  background-color: #eff0f0;\n}\nhtml body main .Container .LockPass form label {\n  margin-top: 0.5vw;\n  font-size: 1vw;\n  font-family: Arial, Helvetica, sans-serif;\n  margin-bottom: 0.1vw;\n}\nhtml body main .Container .LockPass form input {\n  margin-top: 0.5rem;\n  border: #585858 1px solid;\n  width: 10vw;\n  height: 1.2vw;\n  background-color: white;\n}\nhtml body main .Container .LockPass form input:focus {\n  border: #0096fa 1px solid;\n  outline: none;\n}\nhtml body main .Container .LockPass form div {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n  height: 3vw;\n}\nhtml body main .Container .LockPass form div button {\n  margin: 0 2vw;\n  width: 5vw;\n  height: 1.2vw;\n  font-size: 0.7vw;\n  border-radius: 0;\n  background-color: #dcdfdf;\n  border: #b6b6b6 1px solid;\n}\nhtml body main .Container .LockPass form div button:hover {\n  border: #31a8f8 2px solid;\n}\nhtml body main #Bootvid {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: auto;\n  width: auto;\n  height: 45vw;\n}\nhtml body main .BackImg {\n  z-index: -999;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: calc(75vw - 5px);\n  height: calc(49.5376486129vw - 5px);\n}\n@media (max-width: 1000px) {\n  html body h1 {\n    font-size: 12vw;\n    margin-bottom: 4vw;\n  }\n  html body h5 {\n    font-size: 3.5vw;\n    padding: 0 15vw;\n    text-align: center;\n    margin-bottom: 20vw;\n  }\n  html body div {\n    font-size: 4vw;\n    margin-bottom: 20vw;\n  }\n}\n@media (max-width: 700px) {\n  html body h1 {\n    font-size: 15vw;\n    margin-bottom: 5vw;\n  }\n  html body h5 {\n    font-size: 5vw;\n    text-align: center;\n    padding: 0 4vw;\n    margin-bottom: 40vw;\n  }\n  html body div {\n    font-size: 8vw;\n  }\n}", "",{"version":3,"sources":["webpack://./css/style.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: \"MyFont\";\r\n  src: url(\"../assets/fonts/Revamped-X3q1a.ttf\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\nhtml {\r\n  scrollbar-width: thin;\r\n  scrollbar-color: aqua rgba(1, 1, 43, 0.521);\r\n  scroll-behavior: smooth;\r\n  overflow: hidden;\r\n\r\n  body {\r\n    position: relative;\r\n    margin: 0;\r\n    background-color: black;\r\n\r\n    .startbtnCon {\r\n      background-color: #4ef3fa;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n      height: 100%;\r\n      position: fixed;\r\n      background-color: #111111;\r\n      z-index: 11;\r\n      justify-content: center;\r\n      align-items: center;\r\n      text-align: center;\r\n\r\n      .startbtn {\r\n        text-wrap: nowrap;\r\n        cursor: pointer;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        font-size: 10vw;\r\n        color: #4ef3fa;\r\n        padding: 1vw 10vw;\r\n        width: auto;\r\n        height: auto;\r\n        background-color: #111111;\r\n        text-align: center;\r\n        border: #4ef3fa 2px solid;\r\n        border-radius: 10px;\r\n\r\n        &:hover {\r\n          background-color: #4ef3fa;\r\n          color: #111111;\r\n        }\r\n      }\r\n\r\n      .AlertAps {\r\n        position: absolute;\r\n        top: 20%;\r\n        left: 50%;\r\n        width: 100%;\r\n        transform: translate(-50%, -50%);\r\n        font-size: 6vw;\r\n        color: #4ef3fa;\r\n        text-align: center;\r\n      }\r\n    }\r\n\r\n    video {\r\n      z-index: 10;\r\n      position: fixed;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: contain;\r\n\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n\r\n      @media (max-width: 1400px) {\r\n        width: 100%;\r\n        height: auto; // Maintain aspect ratio\r\n      }\r\n\r\n      @media (max-width: 1200px) {\r\n        width: auto; // Allow video to be its natural width\r\n        height: 100%;\r\n      }\r\n\r\n      @media (max-width: 800px) {\r\n        width: 100%;\r\n        height: auto;\r\n      }\r\n    }\r\n\r\n    main {\r\n      position: relative;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      text-align: center;\r\n      height: 100vh;\r\n\r\n      .Container {\r\n        background-image: url('../assets/imgs/container.png');\r\n        background-size: 100%;\r\n        background-position: center;\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        margin: auto;\r\n        width: 75vw;\r\n        height: calc(75vw / 1.514);\r\n\r\n        .ItemContainer {\r\n          width: 94.4%;\r\n          height: 93.2%;\r\n          max-height: 89.6%;\r\n          max-width: 94.4%;\r\n          z-index: 1;\r\n          margin: 3.4% 2.9%;\r\n          display: flex;\r\n          flex-direction: column;\r\n          flex-wrap: wrap;\r\n          align-content: flex-start;\r\n\r\n          .ItemCon {\r\n            cursor: pointer;\r\n            width: calc(100% / 15 - 1.5%);\r\n            height: calc(93.2% / 9 - 1.7%);\r\n            margin: 0.75%;\r\n            padding: 0;\r\n\r\n            .Item {\r\n              margin: 0;\r\n              padding: 0;\r\n              height: 75%;\r\n            }\r\n\r\n            .Itemtext {\r\n              margin: 0;\r\n              padding: 0;\r\n              font-size: 0.6vw;\r\n              text-align: center;\r\n              color: white;\r\n              font-family: Arial, Helvetica, sans-serif;\r\n              height: 15%;\r\n            }\r\n          }\r\n        }\r\n\r\n        .LockPass {\r\n          position: absolute;\r\n          top: 40%;\r\n          left: 40%;\r\n          width: 20vw;\r\n          height: auto;\r\n          max-width: 70vw;\r\n          border: #0095ff 1px solid;\r\n\r\n          .LockPassnewHeader {\r\n            position: relative;\r\n            height: auto;\r\n            background-color: #fff;\r\n            text-align: start;\r\n            font-family: Arial, Helvetica, sans-serif;\r\n            color: rgb(0, 0, 0);\r\n            padding: 0.4vw 0.8vw;\r\n            font-size: 0.8vw;\r\n\r\n            .LockPassnewHeaderExit {\r\n              cursor: pointer;\r\n              height: 100%;\r\n              position: absolute;\r\n              right: 0;\r\n              top: 0;\r\n              font-size: 1.4vw;\r\n              padding: 0 0.5vw;\r\n              margin-top: -0.18vw;\r\n            }\r\n          }\r\n\r\n          form {\r\n            height: 4vw;\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n            height: auto;\r\n            background-color: #eff0f0;\r\n\r\n            label {\r\n              margin-top: 0.5vw;\r\n              font-size: 1vw;\r\n              font-family: Arial, Helvetica, sans-serif;\r\n              margin-bottom: 0.1vw;\r\n            }\r\n\r\n            input {\r\n              margin-top: 0.5rem;\r\n              border: #585858 1px solid;\r\n              width: 10vw;\r\n              height: 1.2vw;\r\n              background-color: white;\r\n\r\n              &:focus {\r\n                border: #0096fa 1px solid; // Change border color on focus\r\n                outline: none; // Remove default focus outline\r\n              }\r\n            }\r\n\r\n            div {\r\n              display: flex;\r\n              justify-content: space-around;\r\n              align-items: center;\r\n              text-align: center;\r\n              height: 3vw;\r\n\r\n              button {\r\n                margin: 0 2vw;\r\n                width: 5vw;\r\n                height: 1.2vw;\r\n                font-size: 0.7vw;\r\n                border-radius: 0;\r\n                background-color: #dcdfdf;\r\n                border: #b6b6b6 1px solid;\r\n\r\n                &:hover {\r\n                  border: #31a8f8 2px solid;\r\n                }\r\n              }\r\n            }\r\n          }\r\n\r\n        }\r\n\r\n\r\n\r\n      }\r\n\r\n\r\n      #Bootvid {\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        margin: auto;\r\n        width: auto;\r\n        height: 45vw;\r\n      }\r\n\r\n      .BackImg {\r\n        z-index: -999;\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        margin: auto;\r\n        width: calc(75vw - 5px);\r\n        height: calc((75vw / 1.514) - 5px);\r\n      }\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n    @media (max-width: 1000px) {\r\n      h1 {\r\n        font-size: 12vw;\r\n        margin-bottom: 4vw;\r\n      }\r\n\r\n      h5 {\r\n        font-size: 3.5vw;\r\n        padding: 0 15vw;\r\n        text-align: center;\r\n        margin-bottom: 20vw;\r\n      }\r\n\r\n      div {\r\n        font-size: 4vw;\r\n        margin-bottom: 20vw;\r\n      }\r\n    }\r\n\r\n    @media (max-width: 700px) {\r\n      h1 {\r\n        font-size: 15vw;\r\n        margin-bottom: 5vw;\r\n      }\r\n\r\n      h5 {\r\n        font-size: 5vw;\r\n        text-align: center;\r\n        padding: 0 4vw;\r\n        margin-bottom: 40vw;\r\n      }\r\n\r\n      div {\r\n        font-size: 8vw;\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/fonts/Revamped-X3q1a.ttf":
/*!*****************************************!*\
  !*** ./assets/fonts/Revamped-X3q1a.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc341b3b7578ed3b3731.ttf";

/***/ }),

/***/ "./assets/imgs/container.png":
/*!***********************************!*\
  !*** ./assets/imgs/container.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d421b39178c56648a23a.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initialize */ "./src/Initialize.js");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.scss */ "./css/style.scss");



// **  IIFE: Immediately Invoked Function Expression  */

(function () {
  var init = new _Initialize__WEBPACK_IMPORTED_MODULE_0__["default"]();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxxQ0FBcUMsOEJBQThC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O1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0M7QUFDWDs7QUFFM0I7O0FBRUEsQ0FBQyxZQUFZO0VBRVgsSUFBSXVGLElBQUksR0FBRyxJQUFJdkcsbURBQVUsQ0FBQyxDQUFDO0FBRTdCLENBQUMsRUFBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL3NyYy9Jbml0aWFsaXplLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vc3JjL1BDLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vY3NzL3N0eWxlLnNjc3M/ZjRmZCIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215X2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQQyBmcm9tIFwiLi9QQ1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0aWFsaXplIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgY29uc3QgYXNwZWN0UmF0aW8gPSAod2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQpLnRvRml4ZWQoMik7XHJcbiAgICBjb25zb2xlLmxvZyhhc3BlY3RSYXRpbyk7XHJcbiAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG4gICAgbGluay5yZWwgPSBcImljb25cIjtcclxuICAgIGxpbmsudHlwZSA9IFwiaW1hZ2UvcG5nXCI7XHJcbiAgICBsaW5rLmhyZWYgPSBcIi4vYXNzZXRzL2ltZ3MvTE9HTy5wbmdcIjtcclxuICAgIGRvY3VtZW50LnRpdGxlID0gXCJBbmRyZWFzTk4xIC0gU1RFQUxUSCBQcm9qZWN0XCI7XHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuXHJcbiAgICBjb25zdCBTdGFydFZpZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ1N0YXJ0VmlkJyk7XHJcbiAgICBpZiAoU3RhcnRWaWQgIT09ICdEb25lJykge1xyXG5cclxuICAgICAgdGhpcy5zdGFydGJ0bkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aGlzLnN0YXJ0YnRuQ29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3RhcnRidG5Db24nKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnN0YXJ0YnRuQ29uKTtcclxuXHJcbiAgICAgIHRoaXMuc3RhcnRidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5zdGFydGJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N0YXJ0YnRuJyk7XHJcbiAgICAgIHRoaXMuc3RhcnRidG4uaW5uZXJUZXh0ID0gXCJFbnRlclwiO1xyXG4gICAgICB0aGlzLnN0YXJ0YnRuQ29uLmFwcGVuZENoaWxkKHRoaXMuc3RhcnRidG4pO1xyXG5cclxuICAgICAgdGhpcy5zdGFydGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvU3JjO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuICAgICAgICBpZiAoYXNwZWN0UmF0aW8gPCAwLjcpIHtcclxuICAgICAgICAgIHZpZGVvU3JjID0gJy4vYXNzZXRzL1RpdGxlX2lwaG9uZS5tcDQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXNwZWN0UmF0aW8gPCAxLjQpIHtcclxuICAgICAgICAgIHZpZGVvU3JjID0gJy4vYXNzZXRzL1RpdGxlX0lwYWQubXA0JztcclxuICAgICAgICB9IGVsc2UgaWYgKGFzcGVjdFJhdGlvIDwgMS45KSB7XHJcbiAgICAgICAgICB2aWRlb1NyYyA9ICcuL2Fzc2V0cy9UaXRsZV9QQy5tcDQnO1xyXG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvIDwgMS43OCkge1xyXG4gICAgICAgICAgICB2aWRlby5zdHlsZS53aWR0aCA9ICdhdXRvJztcclxuICAgICAgICAgICAgdmlkZW8uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmlkZW9TcmMgPSAnLi9hc3NldHMvVGl0bGVfUEMubXA0JztcclxuICAgICAgICAgIGlmIChhc3BlY3RSYXRpbyA8IDEuNzgpIHtcclxuICAgICAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSAnYXV0byc7XHJcbiAgICAgICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgICAgICB2aWRlby5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnc3JjJywgdmlkZW9TcmMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpZGVvU3JjKTtcclxuXHJcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWRlbyk7XHJcbiAgICAgICAgdGhpcy5zdGFydGJ0bkNvbi5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICB2aWRlby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHZpZGVvKTtcclxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ1N0YXJ0VmlkJywgJ0RvbmUnKTtcclxuICAgICAgICAgIG5ldyBQQygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXcgUEMoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICB9IC8vIEVORCBjb25zdHJ1Y3RvclxyXG59IC8vIEVORCBjbGFzc1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQQyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTnVtYmVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigxMDAwMDAwMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDAwMDAwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVUaXRsZSgpIHtcclxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gcmFuZG9tTnVtYmVyO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVUaXRsZSgpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0KS50b0ZpeGVkKDIpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGFzcGVjdFJhdGlvID4gMS43MyAmJiBhc3BlY3RSYXRpbyA8IDMuMCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgICAgICBib2R5RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm1haW4pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdDb250YWluZXInKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHRoaXMuQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IEJvb3RlZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0Jvb3RlZCcpO1xyXG4gICAgICAgICAgICBpZiAoQm9vdGVkICE9PSAneWVzJykge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL1BDYm9vdC5tcDQnKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnaWQnLCAnQm9vdHZpZCcpO1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZCh2aWRlbyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgQm9vdHZpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdCb290dmlkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgQm9vdHZpZC5hZGRFdmVudExpc3RlbmVyKCdwbGF5aW5nJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Db25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkl0ZW1Db24nKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ29ucy5mb3JFYWNoKGl0ZW1Db24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ29uLnN0eWxlLnpJbmRleCA9ICctMic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgQm9vdHZpZC5zdHlsZS56SW5kZXggPSAnLTEnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgQm9vdHZpZC5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBCb290dmlkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Db25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkl0ZW1Db24nKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ29ucy5mb3JFYWNoKGl0ZW1Db24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ29uLnN0eWxlLnpJbmRleCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdCb290ZWQnLCAneWVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuQmFja0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICB0aGlzLkJhY2tJbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdCYWNrSW1nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuQmFja0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9pbWdzL2JhY2tHLnBuZycpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQodGhpcy5CYWNrSW1nKTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLkl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5JdGVtQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbUNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLkl0ZW1Db250YWluZXIpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9pbWdzL0ljb25zLXRyYXNoQmluLWVtcHR5LnBuZycpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtQ29uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RyYXNoQmluJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW0nKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbXRleHQnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0LmlubmVyVGV4dCA9ICdSZWN5Y2xlIGJpbic7XHJcbiAgICAgICAgICAgIHRoaXMuSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLml0ZW1Db24pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2ltZ3MvSWNvbnMtZnVsZGVyLWVtcHR5LnBuZycpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtQ29uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0VtcHR5Rm9sZGVyJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW0nKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbXRleHQnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0LmlubmVyVGV4dCA9ICdFbXB0eSBmb2xkZXInO1xyXG4gICAgICAgICAgICB0aGlzLkl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pdGVtQ29uKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMuaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5hcHBlbmRDaGlsZCh0aGlzLnRleHQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9pbWdzL0ljb25zLWZ1bGRlci1mdWxsLnBuZycpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtQ29uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0Z1bGxGb2xkZXInKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbScpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtdGV4dCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gJ0Z1bGwgZm9sZGVyJztcclxuICAgICAgICAgICAgdGhpcy5JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaXRlbUNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5hcHBlbmRDaGlsZCh0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvaW1ncy9JY29ucy1mdWxkZXItTG9ja2VkLnBuZycpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtQ29uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2tlZEZvbGRlcjEnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbScpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtdGV4dCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gJ0xvY2tlZCBmb2xkZXIgMSc7XHJcbiAgICAgICAgICAgIHRoaXMuSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLml0ZW1Db24pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvaW1ncy9JY29ucy1mdWxkZXItTG9ja2VkLnBuZycpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtQ29uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2tlZEZvbGRlcjInKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbScpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtdGV4dCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gJ0xvY2tlZCBmb2xkZXIgMic7XHJcbiAgICAgICAgICAgIHRoaXMuSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLml0ZW1Db24pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvaW1ncy9JY29ucy1mdWxkZXItTG9ja2VkLnBuZycpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtQ29uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2tlZEZvbGRlcjMnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbScpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtdGV4dCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gJ0xvY2tlZCBmb2xkZXIgMyc7XHJcbiAgICAgICAgICAgIHRoaXMuSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLml0ZW1Db24pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2ltZ3MvSWNvbnMtZmlsZS10eHQucG5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW1Db24nKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbScpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtdGV4dCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gJ3RleHQgZmlsZSAxMjMnO1xyXG4gICAgICAgICAgICB0aGlzLkl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pdGVtQ29uKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMuaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5hcHBlbmRDaGlsZCh0aGlzLnRleHQpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkl0ZW1Db24nKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXJzLmZvckVhY2goaXRlbUNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUNvbi5pZC5pbmNsdWRlcygnbG9ja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xpY2tlZEl0ZW1JZCA9IGl0ZW1Db24uaW5uZXJUZXh0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0xvY2tQYXNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnOyAvLyBQcmV2ZW50IHRleHQgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0Rpdik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnTG9ja1Bhc3NuZXdIZWFkZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SGVhZGVyLmlubmVyVGV4dCA9IGNsaWNrZWRJdGVtSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdIZWFkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3SGVhZGVyRXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkZXJFeGl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnTG9ja1Bhc3NuZXdIZWFkZXJFeGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlckV4aXQuaW5uZXJUZXh0ID0gJ+KclSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlci5hcHBlbmRDaGlsZChuZXdIZWFkZXJFeGl0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlckV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluaXRpYWxYLCBpbml0aWFsWTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5Db250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsWCA9IGUuY2xpZW50WCAtIG5ld0Rpdi5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFkgPSBlLmNsaWVudFkgLSBuZXdEaXYub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLkNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWRkaW5nWCA9IGNvbnRhaW5lclJlY3Qud2lkdGggKiAwLjAyOTsgLy8gMi40JSBvZiBjb250YWluZXIgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWRkaW5nWSA9IGNvbnRhaW5lclJlY3QuaGVpZ2h0ICogMC4wNTQ7IC8vIDMuNCUgb2YgY29udGFpbmVyIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heFggPSBjb250YWluZXJSZWN0LndpZHRoIC0gbmV3RGl2Lm9mZnNldFdpZHRoIC0gcGFkZGluZ1g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4WSA9IGNvbnRhaW5lclJlY3QuaGVpZ2h0IC0gbmV3RGl2Lm9mZnNldEhlaWdodCAtIHBhZGRpbmdZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50WCA9IGUuY2xpZW50WCAtIGluaXRpYWxYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50WSA9IGUuY2xpZW50WSAtIGluaXRpYWxZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gTWF0aC5taW4oTWF0aC5tYXgocGFkZGluZ1gsIGN1cnJlbnRYKSwgbWF4WCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFkgPSBNYXRoLm1pbihNYXRoLm1heChwYWRkaW5nWSwgY3VycmVudFkpLCBtYXhZKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEaXYuc3R5bGUubGVmdCA9IGAke2N1cnJlbnRYfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEaXYuc3R5bGUudG9wID0gYCR7Y3VycmVudFl9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdMb2NrUGFzc0NvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDb24uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdDb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgTG9ja0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9ja0xhYmVsLmlubmVyVGV4dCA9IFwicGFzc3dvcmRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29uLmFwcGVuZENoaWxkKExvY2tMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBMb2NraW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NraW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdMb2NraW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9ja2lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUGFzc3dvcmQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29uLmFwcGVuZENoaWxkKExvY2tpbnB1dCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgTG9ja0J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9ja0J0bnMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdMb2NraW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29uLmFwcGVuZENoaWxkKExvY2tCdG5zKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBMb2NrU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2tTdWJtaXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdMb2NraW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9ja1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2tTdWJtaXQuaW5uZXJUZXh0ID0gXCJPS1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NrQnRucy5hcHBlbmRDaGlsZChMb2NrU3VibWl0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IExvY2tFeGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2tFeGl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnTG9ja0V4aXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9ja0V4aXQuaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9ja0J0bnMuYXBwZW5kQ2hpbGQoTG9ja0V4aXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NrRXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkFsZXJ0QXBzQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuQWxlcnRBcHNDb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdGFydGJ0bkNvbicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuQWxlcnRBcHNDb24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5BbGVydEFwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLkFsZXJ0QXBzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnQWxlcnRBcHMnKTtcclxuICAgICAgICAgICAgdGhpcy5BbGVydEFwcy5pbm5lclRleHQgPSBcIkFzcGVjdCByYXRpbyBpcyBub3Qgd2l0aGluIHRoZSBhY2NlcHRhYmxlIHJhbmdlOiBcIiArIGFzcGVjdFJhdGlvO1xyXG4gICAgICAgICAgICB0aGlzLkFsZXJ0QXBzQ29uLmFwcGVuZENoaWxkKHRoaXMuQWxlcnRBcHMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5CYWNrYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuQmFja2J0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N0YXJ0YnRuJyk7XHJcbiAgICAgICAgICAgIHRoaXMuQmFja2J0bi5pbm5lclRleHQgPSBcIkdvIEJhY2tcIjtcclxuICAgICAgICAgICAgdGhpcy5BbGVydEFwc0Nvbi5hcHBlbmRDaGlsZCh0aGlzLkJhY2tidG4pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5CYWNrYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi4vXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvUmV2YW1wZWQtWDNxMWEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltZ3MvY29udGFpbmVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbmh0bWwge1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiBhcXVhIHJnYmEoMSwgMSwgNDMsIDAuNTIxKTtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuaHRtbCBib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5odG1sIGJvZHkgLnN0YXJ0YnRuQ29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZWYzZmE7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcbiAgei1pbmRleDogMTE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmh0bWwgYm9keSAuc3RhcnRidG5Db24gLnN0YXJ0YnRuIHtcXG4gIHRleHQtd3JhcDogbm93cmFwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMTB2dztcXG4gIGNvbG9yOiAjNGVmM2ZhO1xcbiAgcGFkZGluZzogMXZ3IDEwdnc7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6ICM0ZWYzZmEgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuaHRtbCBib2R5IC5zdGFydGJ0bkNvbiAuc3RhcnRidG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlZjNmYTtcXG4gIGNvbG9yOiAjMTExMTExO1xcbn1cXG5odG1sIGJvZHkgLnN0YXJ0YnRuQ29uIC5BbGVydEFwcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBmb250LXNpemU6IDZ2dztcXG4gIGNvbG9yOiAjNGVmM2ZhO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5odG1sIGJvZHkgdmlkZW8ge1xcbiAgei1pbmRleDogMTA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xcbiAgaHRtbCBib2R5IHZpZGVvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgaHRtbCBib2R5IHZpZGVvIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICBodG1sIGJvZHkgdmlkZW8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG5odG1sIGJvZHkgbWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDc1dnc7XFxuICBoZWlnaHQ6IDQ5LjUzNzY0ODYxMjl2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuSXRlbUNvbnRhaW5lciB7XFxuICB3aWR0aDogOTQuNCU7XFxuICBoZWlnaHQ6IDkzLjIlO1xcbiAgbWF4LWhlaWdodDogODkuNiU7XFxuICBtYXgtd2lkdGg6IDk0LjQlO1xcbiAgei1pbmRleDogMTtcXG4gIG1hcmdpbjogMy40JSAyLjklO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5JdGVtQ29udGFpbmVyIC5JdGVtQ29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA1LjE2NjY2NjY2NjclO1xcbiAgaGVpZ2h0OiA4LjY1NTU1NTU1NTYlO1xcbiAgbWFyZ2luOiAwLjc1JTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkl0ZW1Db250YWluZXIgLkl0ZW1Db24gLkl0ZW0ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogNzUlO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5JdGVtQ29udGFpbmVyIC5JdGVtQ29uIC5JdGVtdGV4dCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAwLjZ2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxNSU7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkxvY2tQYXNzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDAlO1xcbiAgbGVmdDogNDAlO1xcbiAgd2lkdGg6IDIwdnc7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDcwdnc7XFxuICBib3JkZXI6ICMwMDk1ZmYgMXB4IHNvbGlkO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5Mb2NrUGFzcyAuTG9ja1Bhc3NuZXdIZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgcGFkZGluZzogMC40dncgMC44dnc7XFxuICBmb250LXNpemU6IDAuOHZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5Mb2NrUGFzcyAuTG9ja1Bhc3NuZXdIZWFkZXIgLkxvY2tQYXNzbmV3SGVhZGVyRXhpdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGZvbnQtc2l6ZTogMS40dnc7XFxuICBwYWRkaW5nOiAwIDAuNXZ3O1xcbiAgbWFyZ2luLXRvcDogLTAuMTh2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuTG9ja1Bhc3MgZm9ybSB7XFxuICBoZWlnaHQ6IDR2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjBmMDtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuTG9ja1Bhc3MgZm9ybSBsYWJlbCB7XFxuICBtYXJnaW4tdG9wOiAwLjV2dztcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tYm90dG9tOiAwLjF2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuTG9ja1Bhc3MgZm9ybSBpbnB1dCB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBib3JkZXI6ICM1ODU4NTggMXB4IHNvbGlkO1xcbiAgd2lkdGg6IDEwdnc7XFxuICBoZWlnaHQ6IDEuMnZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkxvY2tQYXNzIGZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiAjMDA5NmZhIDFweCBzb2xpZDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkxvY2tQYXNzIGZvcm0gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDN2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuTG9ja1Bhc3MgZm9ybSBkaXYgYnV0dG9uIHtcXG4gIG1hcmdpbjogMCAydnc7XFxuICB3aWR0aDogNXZ3O1xcbiAgaGVpZ2h0OiAxLjJ2dztcXG4gIGZvbnQtc2l6ZTogMC43dnc7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGZkZjtcXG4gIGJvcmRlcjogI2I2YjZiNiAxcHggc29saWQ7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkxvY2tQYXNzIGZvcm0gZGl2IGJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXI6ICMzMWE4ZjggMnB4IHNvbGlkO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAjQm9vdHZpZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA0NXZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQmFja0ltZyB7XFxuICB6LWluZGV4OiAtOTk5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IGNhbGMoNzV2dyAtIDVweCk7XFxuICBoZWlnaHQ6IGNhbGMoNDkuNTM3NjQ4NjEyOXZ3IC0gNXB4KTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgaHRtbCBib2R5IGgxIHtcXG4gICAgZm9udC1zaXplOiAxMnZ3O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0dnc7XFxuICB9XFxuICBodG1sIGJvZHkgaDUge1xcbiAgICBmb250LXNpemU6IDMuNXZ3O1xcbiAgICBwYWRkaW5nOiAwIDE1dnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjB2dztcXG4gIH1cXG4gIGh0bWwgYm9keSBkaXYge1xcbiAgICBmb250LXNpemU6IDR2dztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjB2dztcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBodG1sIGJvZHkgaDEge1xcbiAgICBmb250LXNpemU6IDE1dnc7XFxuICAgIG1hcmdpbi1ib3R0b206IDV2dztcXG4gIH1cXG4gIGh0bWwgYm9keSBoNSB7XFxuICAgIGZvbnQtc2l6ZTogNXZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgNHZ3O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHZ3O1xcbiAgfVxcbiAgaHRtbCBib2R5IGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogOHZ3O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jc3Mvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBw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O0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FBVmhCO0FBY1k7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVpkO0FBY2M7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQVpoQjtBQWNnQjtFQUNFLHlCQUFBO0FBWmxCO0FBeUJNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXZCUjtBQTBCTTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtBQXhCUjtBQWdDSTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBOUJOO0VBaUNJO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQS9CTjtFQWtDSTtJQUNFLGNBQUE7SUFDQSxtQkFBQTtFQWhDTjtBQUNGO0FBbUNJO0VBQ0U7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFqQ047RUFvQ0k7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUFsQ047RUFxQ0k7SUFDRSxjQUFBO0VBbkNOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL1JldmFtcGVkLVgzcTFhLnR0ZlxcXCIpO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxyXFxuICBzY3JvbGxiYXItY29sb3I6IGFxdWEgcmdiYSgxLCAxLCA0MywgMC41MjEpO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgYm9keSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG5cXHJcXG4gICAgLnN0YXJ0YnRuQ29uIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGVmM2ZhO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcXHJcXG4gICAgICB6LWluZGV4OiAxMTtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAuc3RhcnRidG4ge1xcclxcbiAgICAgICAgdGV4dC13cmFwOiBub3dyYXA7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMHZ3O1xcclxcbiAgICAgICAgY29sb3I6ICM0ZWYzZmE7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxdncgMTB2dztcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGJvcmRlcjogIzRlZjNmYSAycHggc29saWQ7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZWYzZmE7XFxyXFxuICAgICAgICAgIGNvbG9yOiAjMTExMTExO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuQWxlcnRBcHMge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAyMCU7XFxyXFxuICAgICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAgICAgZm9udC1zaXplOiA2dnc7XFxyXFxuICAgICAgICBjb2xvcjogIzRlZjNmYTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdmlkZW8ge1xcclxcbiAgICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuXFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvOyAvLyBNYWludGFpbiBhc3BlY3QgcmF0aW9cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87IC8vIEFsbG93IHZpZGVvIHRvIGJlIGl0cyBuYXR1cmFsIHdpZHRoXFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIG1haW4ge1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuXFxyXFxuICAgICAgLkNvbnRhaW5lciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWdzL2NvbnRhaW5lci5wbmcnKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgIHdpZHRoOiA3NXZ3O1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDc1dncgLyAxLjUxNCk7XFxyXFxuXFxyXFxuICAgICAgICAuSXRlbUNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgIHdpZHRoOiA5NC40JTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiA5My4yJTtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogODkuNiU7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogOTQuNCU7XFxyXFxuICAgICAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgICAgICAgIG1hcmdpbjogMy40JSAyLjklO1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuICAgICAgICAgIC5JdGVtQ29uIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDE1IC0gMS41JSk7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDkzLjIlIC8gOSAtIDEuNyUpO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMC43NSU7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuSXRlbSB7XFxyXFxuICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3NSU7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5JdGVtdGV4dCB7XFxyXFxuICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjZ2dztcXHJcXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNSU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuTG9ja1Bhc3Mge1xcclxcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgIHRvcDogNDAlO1xcclxcbiAgICAgICAgICBsZWZ0OiA0MCU7XFxyXFxuICAgICAgICAgIHdpZHRoOiAyMHZ3O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogNzB2dztcXHJcXG4gICAgICAgICAgYm9yZGVyOiAjMDA5NWZmIDFweCBzb2xpZDtcXHJcXG5cXHJcXG4gICAgICAgICAgLkxvY2tQYXNzbmV3SGVhZGVyIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjR2dyAwLjh2dztcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHZ3O1xcclxcblxcclxcbiAgICAgICAgICAgIC5Mb2NrUGFzc25ld0hlYWRlckV4aXQge1xcclxcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHZ3O1xcclxcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjV2dztcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0wLjE4dnc7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIGZvcm0ge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNHZ3O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMGYwO1xcclxcblxcclxcbiAgICAgICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXZ3O1xcclxcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XFxyXFxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMXZ3O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgICBib3JkZXI6ICM1ODU4NTggMXB4IHNvbGlkO1xcclxcbiAgICAgICAgICAgICAgd2lkdGg6IDEwdnc7XFxyXFxuICAgICAgICAgICAgICBoZWlnaHQ6IDEuMnZ3O1xcclxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAjMDA5NmZhIDFweCBzb2xpZDsgLy8gQ2hhbmdlIGJvcmRlciBjb2xvciBvbiBmb2N1c1xcclxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lOyAvLyBSZW1vdmUgZGVmYXVsdCBmb2N1cyBvdXRsaW5lXFxyXFxuICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIGRpdiB7XFxyXFxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMnZ3O1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNXZ3O1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuMnZ3O1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3Z3O1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZmRmO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICNiNmI2YjYgMXB4IHNvbGlkO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICMzMWE4ZjggMnB4IHNvbGlkO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICNCb290dmlkIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICBoZWlnaHQ6IDQ1dnc7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5CYWNrSW1nIHtcXHJcXG4gICAgICAgIHotaW5kZXg6IC05OTk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICB3aWR0aDogY2FsYyg3NXZ3IC0gNXB4KTtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygoNzV2dyAvIDEuNTE0KSAtIDVweCk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXHJcXG4gICAgICBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEydnc7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0dnc7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGg1IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMy41dnc7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDE1dnc7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHZ3O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBkaXYge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHZ3O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gICAgICBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE1dnc7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1dnc7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGg1IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogMCA0dnc7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHZ3O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBkaXYge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA4dnc7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSBcIi4vSW5pdGlhbGl6ZVwiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGUuc2Nzc1wiO1xyXG5cclxuLy8gKiogIElJRkU6IEltbWVkaWF0ZWx5IEludm9rZWQgRnVuY3Rpb24gRXhwcmVzc2lvbiAgKi9cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGxldCBpbml0ID0gbmV3IEluaXRpYWxpemUoKTtcclxuXHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6WyJQQyIsIkluaXRpYWxpemUiLCJfY3JlYXRlQ2xhc3MiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImFzcGVjdFJhdGlvIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidG9GaXhlZCIsImNvbnNvbGUiLCJsb2ciLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicmVsIiwidHlwZSIsImhyZWYiLCJ0aXRsZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIlN0YXJ0VmlkIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic3RhcnRidG5Db24iLCJzZXRBdHRyaWJ1dGUiLCJib2R5Iiwic3RhcnRidG4iLCJpbm5lclRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwidmlkZW9TcmMiLCJ2aWRlbyIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJzZXRJdGVtIiwiZGVmYXVsdCIsImdlbmVyYXRlUmFuZG9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidXBkYXRlVGl0bGUiLCJzZXRJbnRlcnZhbCIsInJhbmRvbU51bWJlciIsImJvZHlFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIm1haW4iLCJDb250YWluZXIiLCJCb290ZWQiLCJCb290dmlkIiwiZ2V0RWxlbWVudEJ5SWQiLCJpdGVtQ29ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbUNvbiIsInpJbmRleCIsIkJhY2tJbWciLCJJdGVtQ29udGFpbmVyIiwiaXRlbSIsInRleHQiLCJpdGVtQ29udGFpbmVycyIsImlkIiwiaW5jbHVkZXMiLCJjbGlja2VkSXRlbUlkIiwibmV3RGl2IiwidXNlclNlbGVjdCIsIm5ld0hlYWRlciIsIm5ld0hlYWRlckV4aXQiLCJpc0RyYWdnaW5nIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsImUiLCJjb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJjbGllbnRZIiwib2Zmc2V0VG9wIiwicGFkZGluZ1giLCJwYWRkaW5nWSIsIm1heFgiLCJvZmZzZXRXaWR0aCIsIm1heFkiLCJvZmZzZXRIZWlnaHQiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwibWluIiwibWF4IiwibGVmdCIsImNvbmNhdCIsInRvcCIsIm5ld0NvbiIsIkxvY2tMYWJlbCIsIkxvY2tpbnB1dCIsIkxvY2tCdG5zIiwiTG9ja1N1Ym1pdCIsIkxvY2tFeGl0IiwiQWxlcnRBcHNDb24iLCJBbGVydEFwcyIsIkJhY2tidG4iLCJsb2NhdGlvbiIsImluaXQiXSwic291cmNlUm9vdCI6IiJ9