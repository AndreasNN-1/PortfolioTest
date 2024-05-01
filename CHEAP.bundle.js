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
    document.body.style.userSelect = 'none';
    this.main = document.createElement('main');
    bodyElement.appendChild(this.main);
    this.Container = document.createElement('div');
    this.Container.setAttribute('class', 'Container');
    this.Container.style.backgroundImage = 'url("./assets/imgs/container.png")';
    this.main.appendChild(this.Container);
    var Booted = sessionStorage.getItem('Booted');
    if (Booted !== 'yes') {
      var video = document.createElement('video');
      video.setAttribute('src', './assets/PCboot.mp4');
      video.setAttribute('id', 'Bootvid');
      video.setAttribute('autoplay', '');
      this.main.appendChild(video);
      var Bootvid = document.getElementById('Bootvid');
      var removeVideoIfNotPlaying = function removeVideoIfNotPlaying() {
        setTimeout(function () {
          if (Bootvid.paused) {
            Bootvid.remove();
            var itemCons = document.querySelectorAll('.ItemCon');
            itemCons.forEach(function (itemCon) {
              itemCon.style.zIndex = '0';
              sessionStorage.setItem('Booted', 'yes');
            });
          }
        }, 3000);
      };
      Bootvid.addEventListener('playing', function () {
        var itemCons = document.querySelectorAll('.ItemCon');
        itemCons.forEach(function (itemCon) {
          itemCon.style.zIndex = '-2';
        });
        Bootvid.style.zIndex = '-1';
      });
      removeVideoIfNotPlaying();
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
    this.windowsNav = document.createElement('div');
    this.windowsNav.setAttribute('class', 'windowsNav');
    this.main.appendChild(this.windowsNav);
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
            iconImgDiv.remove();
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
          var newCon = document.createElement('div');
          newCon.setAttribute('class', 'newCon');
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
          LockSubmit.addEventListener('click', function () {
            newDiv.remove();
            iconImgDiv.remove();
          });
          var LockExit = document.createElement('button');
          LockExit.setAttribute('class', 'LockExit');
          LockExit.innerText = "Cancel";
          LockBtns.appendChild(LockExit);
          LockExit.addEventListener('click', function () {
            newDiv.remove();
            iconImgDiv.remove();
          });
          var itemImage = itemCon.querySelector('.Item');
          var iconSrc = itemImage.getAttribute('src');
          var iconImgDiv = document.createElement('div');
          iconImgDiv.setAttribute('class', "iconImgDiv");
          iconImgDiv.setAttribute('id', itemCon.innerText);
          _this.windowsNav.appendChild(iconImgDiv);
          var iconImg = document.createElement('img');
          iconImg.setAttribute('src', iconSrc);
          iconImg.setAttribute('src', iconSrc);
          iconImgDiv.appendChild(iconImg);
        });
      }
    });
    var FileContainers = document.querySelectorAll('.ItemCon');
    FileContainers.forEach(function (itemCon) {
      if (itemCon.id.includes('trashBin') || itemCon.id.includes('Folder') && !itemCon.id.includes('locked')) {
        itemCon.addEventListener('click', function () {
          var folderName = itemCon.innerText;
          var Files = document.createElement('div');
          Files.setAttribute('class', 'Files');
          _this.main.appendChild(Files);
          var FilesHeader = document.createElement('div');
          FilesHeader.setAttribute('class', 'FilesHeader');
          Files.appendChild(FilesHeader);
          var FilesName = document.createElement('div');
          FilesName.setAttribute('class', 'FilesName');
          FilesName.innerText = folderName;
          FilesHeader.appendChild(FilesName);
          var newHeaderExit = document.createElement('div');
          newHeaderExit.setAttribute('class', 'FilesHeaderExit');
          newHeaderExit.innerText = '✕';
          FilesHeader.appendChild(newHeaderExit);
          newHeaderExit.addEventListener('click', function () {
            Files.remove();
            iconImgDiv.remove();
          });
          var FilesHeaderFill = document.createElement('div');
          FilesHeaderFill.setAttribute('class', 'FilesHeaderFill');
          FilesHeaderFill.innerText = '□';
          FilesHeader.appendChild(FilesHeaderFill);
          FilesHeaderFill.addEventListener('click', function () {
            if (Files.style.width === 'calc(100% - 4.3vw)' && Files.style.height === 'calc(100% - 5.2vw)') {
              Files.style.width = '30vw';
              Files.style.height = '20vw';
              Files.style.top = '30%';
              Files.style.left = '30%';
            } else {
              Files.style.width = 'calc(100% - 4.3vw)';
              Files.style.height = 'calc(100% - 5.2vw)';
              Files.style.top = '2.6vw';
              Files.style.left = '2.15vw';
            }
            Files.style.width = isExpanded ? '30vw' : 'calc(100% - 4.3vw)';
            Files.style.height = isExpanded ? '20vw' : 'calc(100% - 5.2vw)';
            Files.style.top = isExpanded ? '30%' : '2.6vw';
            Files.style.left = isExpanded ? '30%' : '2.15vw';
          });
          var FilesHeadermini = document.createElement('div');
          FilesHeadermini.setAttribute('class', 'FilesHeadermini');
          FilesHeadermini.innerText = '━';
          FilesHeader.appendChild(FilesHeadermini);
          FilesHeadermini.addEventListener('click', function () {
            Files.style.display = 'none';
          });
          var isDragging = false;
          var initialX, initialY;
          FilesHeader.addEventListener('mousedown', function (e) {
            isDragging = true;
            // Calculate the initial position of the Files element relative to the document
            initialX = e.clientX - Files.offsetLeft;
            initialY = e.clientY - Files.offsetTop;
          });
          document.addEventListener('mousemove', function (e) {
            if (isDragging) {
              if (Files.style.width === 'calc(100% - 4.3vw)' && Files.style.height === 'calc(100% - 5.2vw)') {} else {
                var containerRect = _this.main.getBoundingClientRect(); // Use the container's bounding rect
                var paddingX = containerRect.width * 0.029;
                var paddingY = containerRect.height * 0.054;
                var maxX = containerRect.width - Files.offsetWidth - paddingX;
                var maxY = containerRect.height - Files.offsetHeight - paddingY;
                var currentX = e.clientX - initialX;
                var currentY = e.clientY - initialY;
                currentX = Math.min(Math.max(paddingX, currentX), maxX);
                currentY = Math.min(Math.max(paddingY, currentY), maxY);
                Files.style.left = "".concat(currentX, "px");
                Files.style.top = "".concat(currentY, "px");
              }
            }
          });
          document.addEventListener('mouseup', function () {
            isDragging = false;
          });
          var itemImage = itemCon.querySelector('.Item');
          var iconSrc = itemImage.getAttribute('src');
          var iconImgDiv = document.createElement('div');
          iconImgDiv.setAttribute('class', "iconImgDiv");
          iconImgDiv.setAttribute('id', itemCon.innerText);
          _this.windowsNav.appendChild(iconImgDiv);
          var iconImg = document.createElement('img');
          iconImg.setAttribute('src', iconSrc);
          iconImg.setAttribute('src', iconSrc);
          iconImgDiv.appendChild(iconImg);
          iconImgDiv.addEventListener('click', function () {
            if (Files.style.display === 'none') {
              Files.style.display = 'block';
              Files.parentNode.appendChild(Files);
            } else {
              Files.parentNode.appendChild(Files);
            }
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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"MyFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: normal;\n  font-style: normal;\n}\nhtml {\n  scrollbar-width: thin;\n  scrollbar-color: aqua rgba(1, 1, 43, 0.521);\n  scroll-behavior: smooth;\n  overflow: hidden;\n}\nhtml body {\n  position: relative;\n  margin: 0;\n  background-color: black;\n}\nhtml body .startbtnCon {\n  background-color: #4ef3fa;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background-color: #111111;\n  z-index: 11;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\nhtml body .startbtnCon .startbtn {\n  text-wrap: nowrap;\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 10vw;\n  color: #4ef3fa;\n  padding: 1vw 10vw;\n  width: auto;\n  height: auto;\n  background-color: #111111;\n  text-align: center;\n  border: #4ef3fa 2px solid;\n  border-radius: 10px;\n}\nhtml body .startbtnCon .startbtn:hover {\n  background-color: #4ef3fa;\n  color: #111111;\n}\nhtml body .startbtnCon .AlertAps {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n  font-size: 6vw;\n  color: #4ef3fa;\n  text-align: center;\n}\nhtml body video {\n  z-index: 10;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 1400px) {\n  html body video {\n    width: 100%;\n    height: auto;\n  }\n}\n@media (max-width: 1200px) {\n  html body video {\n    width: auto;\n    height: 100%;\n  }\n}\n@media (max-width: 800px) {\n  html body video {\n    width: 100%;\n    height: auto;\n  }\n}\nhtml body main {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100vh;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, 1vw);\n  width: 75vw;\n  height: 49.5376486129vw;\n}\nhtml body main .Container {\n  background-size: 100%;\n  background-position: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 75vw;\n  height: 49.5376486129vw;\n}\nhtml body main .Container .ItemContainer {\n  width: 94.4%;\n  height: 93.2%;\n  max-height: 89.6%;\n  max-width: 94.4%;\n  z-index: 1;\n  margin: 3.4% 2.9%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: flex-start;\n}\nhtml body main .Container .ItemContainer .ItemCon {\n  cursor: pointer;\n  width: 5.1666666667%;\n  height: 8.1555555556%;\n  margin: 0.75%;\n  padding: 0;\n}\nhtml body main .Container .ItemContainer .ItemCon .Item {\n  margin: 0;\n  padding: 0;\n  height: 75%;\n}\nhtml body main .Container .ItemContainer .ItemCon .Itemtext {\n  margin: 0;\n  padding: 0;\n  font-size: 0.6vw;\n  text-align: center;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  height: 15%;\n}\nhtml body main .Container .LockPass {\n  position: absolute;\n  top: 40%;\n  left: 40%;\n  width: 20vw;\n  height: auto;\n  max-width: 70vw;\n  border: #0095ff 1px solid;\n}\nhtml body main .Container .LockPass .LockPassnewHeader {\n  position: relative;\n  height: auto;\n  background-color: #fff;\n  text-align: start;\n  font-family: Arial, Helvetica, sans-serif;\n  color: rgb(0, 0, 0);\n  padding: 0.4vw 0.8vw;\n  font-size: 0.8vw;\n}\nhtml body main .Container .LockPass .LockPassnewHeader .LockPassnewHeaderExit {\n  cursor: pointer;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 1.4vw;\n  padding: 0 0.5vw;\n  margin-top: -0.18vw;\n}\nhtml body main .Container .LockPass .newCon {\n  height: 4vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  background-color: #eff0f0;\n}\nhtml body main .Container .LockPass .newCon label {\n  margin-top: 0.5vw;\n  font-size: 1vw;\n  font-family: Arial, Helvetica, sans-serif;\n  margin-bottom: 0.1vw;\n}\nhtml body main .Container .LockPass .newCon input {\n  margin-top: 0.5rem;\n  border: #585858 1px solid;\n  width: 10vw;\n  height: 1.2vw;\n  background-color: white;\n}\nhtml body main .Container .LockPass .newCon input:focus {\n  border: #0096fa 1px solid;\n  outline: none;\n}\nhtml body main .Container .LockPass .newCon div {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n  height: 3vw;\n}\nhtml body main .Container .LockPass .newCon div button {\n  margin: 0 2vw;\n  width: 5vw;\n  height: 1.2vw;\n  font-size: 0.7vw;\n  border-radius: 0;\n  background-color: #dcdfdf;\n  border: #b6b6b6 1px solid;\n}\nhtml body main .Container .LockPass .newCon div button:hover {\n  border: #31a8f8 2px solid;\n}\nhtml body main #Bootvid {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: auto;\n  width: auto;\n  height: 45vw;\n}\nhtml body main .BackImg {\n  z-index: -999;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: calc(75vw - 5px);\n  height: calc(49.5376486129vw - 5px);\n}\nhtml body main .Files {\n  background-color: #b6b6b6;\n  width: calc(100% - 4.3vw);\n  height: calc(100% - 5.2vw);\n  position: absolute;\n  top: 2.6vw;\n  left: 2.15vw;\n}\nhtml body main .Files .FilesHeader {\n  height: 2.5vw;\n  width: 100%;\n  background-color: white;\n  position: relative;\n}\nhtml body main .Files .FilesHeader .FilesHeaderExit {\n  cursor: pointer;\n  position: absolute;\n  right: 0.8vw;\n  top: 0.2vw;\n  font-size: 1.25vw;\n}\nhtml body main .Files .FilesHeader .FilesHeaderFill {\n  cursor: pointer;\n  position: absolute;\n  right: 3.5vw;\n  top: 0;\n  font-size: 2vw;\n  margin-top: -0.24vw;\n}\nhtml body main .Files .FilesHeader .FilesHeadermini {\n  cursor: pointer;\n  position: absolute;\n  right: 6.8vw;\n  top: 0.3vw;\n  font-size: 1vw;\n}\nhtml body main .Files .FilesHeader .FilesName {\n  position: absolute;\n  left: 0.5vw;\n  top: 0.6vw;\n  font-size: 1vw;\n}\nhtml body main .windowsNav {\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.7450980392);\n  width: calc(100% - 4.3vw);\n  height: 2.3vw;\n  position: absolute;\n  bottom: 2.6vw;\n  left: 2.18vw;\n  display: flex;\n}\nhtml body main .windowsNav .iconImgDiv {\n  height: 2.3vw;\n  width: 2.2vw;\n  background-color: rgba(153, 153, 153, 0);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nhtml body main .windowsNav .iconImgDiv img {\n  height: 70%;\n  width: auto;\n}\nhtml body main .windowsNav .iconImgDiv:hover {\n  background-color: rgba(153, 153, 153, 0.466);\n}\n@media (max-width: 1000px) {\n  html body h1 {\n    font-size: 12vw;\n    margin-bottom: 4vw;\n  }\n  html body h5 {\n    font-size: 3.5vw;\n    padding: 0 15vw;\n    text-align: center;\n    margin-bottom: 20vw;\n  }\n  html body div {\n    font-size: 4vw;\n    margin-bottom: 20vw;\n  }\n}\n@media (max-width: 700px) {\n  html body h1 {\n    font-size: 15vw;\n    margin-bottom: 5vw;\n  }\n  html body h5 {\n    font-size: 5vw;\n    text-align: center;\n    padding: 0 4vw;\n    margin-bottom: 40vw;\n  }\n  html body div {\n    font-size: 8vw;\n  }\n}", "",{"version":3,"sources":["webpack://./css/style.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: \"MyFont\";\r\n  src: url(\"../assets/fonts/Revamped-X3q1a.ttf\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\nhtml {\r\n  scrollbar-width: thin;\r\n  scrollbar-color: aqua rgba(1, 1, 43, 0.521);\r\n  scroll-behavior: smooth;\r\n  overflow: hidden;\r\n\r\n  body {\r\n    position: relative;\r\n    margin: 0;\r\n    background-color: black;\r\n\r\n    .startbtnCon {\r\n      background-color: #4ef3fa;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n      height: 100%;\r\n      position: fixed;\r\n      background-color: #111111;\r\n      z-index: 11;\r\n      justify-content: center;\r\n      align-items: center;\r\n      text-align: center;\r\n\r\n      .startbtn {\r\n        text-wrap: nowrap;\r\n        cursor: pointer;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        font-size: 10vw;\r\n        color: #4ef3fa;\r\n        padding: 1vw 10vw;\r\n        width: auto;\r\n        height: auto;\r\n        background-color: #111111;\r\n        text-align: center;\r\n        border: #4ef3fa 2px solid;\r\n        border-radius: 10px;\r\n\r\n        &:hover {\r\n          background-color: #4ef3fa;\r\n          color: #111111;\r\n        }\r\n      }\r\n\r\n      .AlertAps {\r\n        position: absolute;\r\n        top: 20%;\r\n        left: 50%;\r\n        width: 100%;\r\n        transform: translate(-50%, -50%);\r\n        font-size: 6vw;\r\n        color: #4ef3fa;\r\n        text-align: center;\r\n      }\r\n    }\r\n\r\n    video {\r\n      z-index: 10;\r\n      position: fixed;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: contain;\r\n\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n\r\n      @media (max-width: 1400px) {\r\n        width: 100%;\r\n        height: auto; // Maintain aspect ratio\r\n      }\r\n\r\n      @media (max-width: 1200px) {\r\n        width: auto; // Allow video to be its natural width\r\n        height: 100%;\r\n      }\r\n\r\n      @media (max-width: 800px) {\r\n        width: 100%;\r\n        height: auto;\r\n      }\r\n    }\r\n\r\n    main {\r\n      position: relative;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      text-align: center;\r\n      height: 100vh;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, 1vw);\r\n      width: 75vw;\r\n      height: calc(75vw / 1.514);\r\n\r\n      .Container {\r\n        background-size: 100%;\r\n        background-position: center;\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        margin: auto;\r\n        width: 75vw;\r\n        height: calc(75vw / 1.514);\r\n\r\n        .ItemContainer {\r\n          width: 94.4%;\r\n          height: 93.2%;\r\n          max-height: 89.6%;\r\n          max-width: 94.4%;\r\n          z-index: 1;\r\n          margin: 3.4% 2.9%;\r\n          display: flex;\r\n          flex-direction: column;\r\n          flex-wrap: wrap;\r\n          align-content: flex-start;\r\n\r\n          .ItemCon {\r\n            cursor: pointer;\r\n            width: calc(100% / 15 - 1.5%);\r\n            height: calc(93.2% / 9 - 2.2%);\r\n            margin: 0.75%;\r\n            padding: 0;\r\n\r\n            .Item {\r\n              margin: 0;\r\n              padding: 0;\r\n              height: 75%;\r\n            }\r\n\r\n            .Itemtext {\r\n              margin: 0;\r\n              padding: 0;\r\n              font-size: 0.6vw;\r\n              text-align: center;\r\n              color: white;\r\n              font-family: Arial, Helvetica, sans-serif;\r\n              height: 15%;\r\n            }\r\n          }\r\n        }\r\n\r\n        .LockPass {\r\n          position: absolute;\r\n          top: 40%;\r\n          left: 40%;\r\n          width: 20vw;\r\n          height: auto;\r\n          max-width: 70vw;\r\n          border: #0095ff 1px solid;\r\n\r\n          .LockPassnewHeader {\r\n            position: relative;\r\n            height: auto;\r\n            background-color: #fff;\r\n            text-align: start;\r\n            font-family: Arial, Helvetica, sans-serif;\r\n            color: rgb(0, 0, 0);\r\n            padding: 0.4vw 0.8vw;\r\n            font-size: 0.8vw;\r\n\r\n            .LockPassnewHeaderExit {\r\n              cursor: pointer;\r\n              height: 100%;\r\n              position: absolute;\r\n              right: 0;\r\n              top: 0;\r\n              font-size: 1.4vw;\r\n              padding: 0 0.5vw;\r\n              margin-top: -0.18vw;\r\n            }\r\n          }\r\n\r\n          .newCon {\r\n            height: 4vw;\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n            height: auto;\r\n            background-color: #eff0f0;\r\n\r\n            label {\r\n              margin-top: 0.5vw;\r\n              font-size: 1vw;\r\n              font-family: Arial, Helvetica, sans-serif;\r\n              margin-bottom: 0.1vw;\r\n            }\r\n\r\n            input {\r\n              margin-top: 0.5rem;\r\n              border: #585858 1px solid;\r\n              width: 10vw;\r\n              height: 1.2vw;\r\n              background-color: white;\r\n\r\n              &:focus {\r\n                border: #0096fa 1px solid; // Change border color on focus\r\n                outline: none; // Remove default focus outline\r\n              }\r\n            }\r\n\r\n            div {\r\n              display: flex;\r\n              justify-content: space-around;\r\n              align-items: center;\r\n              text-align: center;\r\n              height: 3vw;\r\n\r\n              button {\r\n                margin: 0 2vw;\r\n                width: 5vw;\r\n                height: 1.2vw;\r\n                font-size: 0.7vw;\r\n                border-radius: 0;\r\n                background-color: #dcdfdf;\r\n                border: #b6b6b6 1px solid;\r\n\r\n                &:hover {\r\n                  border: #31a8f8 2px solid;\r\n                }\r\n              }\r\n            }\r\n          }\r\n\r\n        }\r\n\r\n\r\n\r\n      }\r\n\r\n\r\n      #Bootvid {\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        margin: auto;\r\n        width: auto;\r\n        height: 45vw;\r\n      }\r\n\r\n      .BackImg {\r\n        z-index: -999;\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        margin: auto;\r\n        width: calc(75vw - 5px);\r\n        height: calc((75vw / 1.514) - 5px);\r\n      }\r\n\r\n      .Files {\r\n        background-color: #b6b6b6;\r\n        width: calc(100% - 4.3vw);\r\n        height: calc(100% - 5.2vw);\r\n        position: absolute;\r\n        top: 2.6vw;\r\n        left: 2.15vw;\r\n\r\n        .FilesHeader {\r\n          height: 2.5vw;\r\n          width: 100%;\r\n          background-color: white;\r\n          position: relative;\r\n\r\n          .FilesHeaderExit {\r\n            cursor: pointer;\r\n            position: absolute;\r\n            right: 0.8vw;\r\n            top: 0.2vw;\r\n            font-size: 1.25vw;\r\n          }\r\n\r\n          .FilesHeaderFill {\r\n            cursor: pointer;\r\n            position: absolute;\r\n            right: 3.5vw;\r\n            top: 0;\r\n            font-size: 2vw;\r\n            margin-top: -0.24vw;\r\n          }\r\n\r\n          .FilesHeadermini {\r\n            cursor: pointer;\r\n            position: absolute;\r\n            right: 6.8vw;\r\n            top: 0.3vw;\r\n            font-size: 1vw;\r\n          }\r\n\r\n          .FilesName {\r\n            position: absolute;\r\n            left: 0.5vw;\r\n            top: 0.6vw;\r\n            font-size: 1vw;\r\n          }\r\n        }\r\n      }\r\n\r\n      .windowsNav {\r\n        z-index: 100;\r\n        background-color: #000000be;\r\n        width: calc(100% - 4.3vw);\r\n        height: calc(7.5vw - 5.2vw);\r\n        position: absolute;\r\n        bottom: 2.6vw;\r\n        left: 2.18vw;\r\n        display: flex;\r\n\r\n        .iconImgDiv {\r\n          height: calc(7.5vw - 5.2vw);\r\n          width: 2.2vw;\r\n          background-color: rgba(153, 153, 153, 0);\r\n          display: flex;\r\n          align-items: center;\r\n          justify-content: center;\r\n\r\n          img {\r\n            height: 70%;\r\n            width: auto;\r\n          }\r\n          &:hover {\r\n            background-color: rgba(153, 153, 153, 0.466);\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n    @media (max-width: 1000px) {\r\n      h1 {\r\n        font-size: 12vw;\r\n        margin-bottom: 4vw;\r\n      }\r\n\r\n      h5 {\r\n        font-size: 3.5vw;\r\n        padding: 0 15vw;\r\n        text-align: center;\r\n        margin-bottom: 20vw;\r\n      }\r\n\r\n      div {\r\n        font-size: 4vw;\r\n        margin-bottom: 20vw;\r\n      }\r\n    }\r\n\r\n    @media (max-width: 700px) {\r\n      h1 {\r\n        font-size: 15vw;\r\n        margin-bottom: 5vw;\r\n      }\r\n\r\n      h5 {\r\n        font-size: 5vw;\r\n        text-align: center;\r\n        padding: 0 4vw;\r\n        margin-bottom: 40vw;\r\n      }\r\n\r\n      div {\r\n        font-size: 8vw;\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssTUFBTSxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssTUFBTSxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFB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O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0M7QUFDWDs7QUFFM0I7O0FBRUEsQ0FBQyxZQUFZO0VBRVgsSUFBSTBHLElBQUksR0FBRyxJQUFJMUgsbURBQVUsQ0FBQyxDQUFDO0FBRTdCLENBQUMsRUFBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL3NyYy9Jbml0aWFsaXplLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vc3JjL1BDLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vY3NzL3N0eWxlLnNjc3M/ZjRmZCIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215X2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQQyBmcm9tIFwiLi9QQ1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0aWFsaXplIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgY29uc3QgYXNwZWN0UmF0aW8gPSAod2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQpLnRvRml4ZWQoMik7XHJcbiAgICBjb25zb2xlLmxvZyhhc3BlY3RSYXRpbyk7XHJcbiAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG4gICAgbGluay5yZWwgPSBcImljb25cIjtcclxuICAgIGxpbmsudHlwZSA9IFwiaW1hZ2UvcG5nXCI7XHJcbiAgICBsaW5rLmhyZWYgPSBcIi4vYXNzZXRzL2ltZ3MvTE9HTy5wbmdcIjtcclxuICAgIGRvY3VtZW50LnRpdGxlID0gXCJBbmRyZWFzTk4xIC0gU1RFQUxUSCBQcm9qZWN0XCI7XHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuXHJcbiAgICBjb25zdCBTdGFydFZpZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ1N0YXJ0VmlkJyk7XHJcbiAgICBpZiAoU3RhcnRWaWQgIT09ICdEb25lJykge1xyXG5cclxuICAgICAgdGhpcy5zdGFydGJ0bkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aGlzLnN0YXJ0YnRuQ29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3RhcnRidG5Db24nKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnN0YXJ0YnRuQ29uKTtcclxuXHJcbiAgICAgIHRoaXMuc3RhcnRidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5zdGFydGJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N0YXJ0YnRuJyk7XHJcbiAgICAgIHRoaXMuc3RhcnRidG4uaW5uZXJUZXh0ID0gXCJFbnRlclwiO1xyXG4gICAgICB0aGlzLnN0YXJ0YnRuQ29uLmFwcGVuZENoaWxkKHRoaXMuc3RhcnRidG4pO1xyXG5cclxuICAgICAgdGhpcy5zdGFydGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvU3JjO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuICAgICAgICBpZiAoYXNwZWN0UmF0aW8gPCAwLjcpIHtcclxuICAgICAgICAgIHZpZGVvU3JjID0gJy4vYXNzZXRzL1RpdGxlX2lwaG9uZS5tcDQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXNwZWN0UmF0aW8gPCAxLjQpIHtcclxuICAgICAgICAgIHZpZGVvU3JjID0gJy4vYXNzZXRzL1RpdGxlX0lwYWQubXA0JztcclxuICAgICAgICB9IGVsc2UgaWYgKGFzcGVjdFJhdGlvIDwgMS45KSB7XHJcbiAgICAgICAgICB2aWRlb1NyYyA9ICcuL2Fzc2V0cy9UaXRsZV9QQy5tcDQnO1xyXG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvIDwgMS43OCkge1xyXG4gICAgICAgICAgICB2aWRlby5zdHlsZS53aWR0aCA9ICdhdXRvJztcclxuICAgICAgICAgICAgdmlkZW8uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmlkZW9TcmMgPSAnLi9hc3NldHMvVGl0bGVfUEMubXA0JztcclxuICAgICAgICAgIGlmIChhc3BlY3RSYXRpbyA8IDEuNzgpIHtcclxuICAgICAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSAnYXV0byc7XHJcbiAgICAgICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgICAgICB2aWRlby5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnc3JjJywgdmlkZW9TcmMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpZGVvU3JjKTtcclxuXHJcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWRlbyk7XHJcbiAgICAgICAgdGhpcy5zdGFydGJ0bkNvbi5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICB2aWRlby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHZpZGVvKTtcclxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ1N0YXJ0VmlkJywgJ0RvbmUnKTtcclxuICAgICAgICAgIG5ldyBQQygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXcgUEMoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICB9IC8vIEVORCBjb25zdHJ1Y3RvclxyXG59IC8vIEVORCBjbGFzc1xyXG4iLCJpbXBvcnQgeyByZW1vdmUgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xpYnMvdHdlZW4ubW9kdWxlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQQyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTnVtYmVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigxMDAwMDAwMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDAwMDAwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVUaXRsZSgpIHtcclxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gcmFuZG9tTnVtYmVyO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVUaXRsZSgpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0KS50b0ZpeGVkKDIpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGFzcGVjdFJhdGlvID4gMS43MyAmJiBhc3BlY3RSYXRpbyA8IDMuMCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgICAgIGJvZHlFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubWFpbik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0NvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiLi9hc3NldHMvaW1ncy9jb250YWluZXIucG5nXCIpJztcclxuICAgICAgICAgICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHRoaXMuQ29udGFpbmVyKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgQm9vdGVkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnQm9vdGVkJyk7XHJcbiAgICAgICAgICAgIGlmIChCb290ZWQgIT09ICd5ZXMnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvUENib290Lm1wNCcpO1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdpZCcsICdCb290dmlkJyk7XHJcbiAgICAgICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHZpZGVvKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBCb290dmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Jvb3R2aWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVWaWRlb0lmTm90UGxheWluZyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEJvb3R2aWQucGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb290dmlkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuSXRlbUNvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNvbnMuZm9yRWFjaChpdGVtQ29uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ29uLnN0eWxlLnpJbmRleCA9ICcwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdCb290ZWQnLCAneWVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBCb290dmlkLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuSXRlbUNvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Db25zLmZvckVhY2goaXRlbUNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Db24uc3R5bGUuekluZGV4ID0gJy0yJztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBCb290dmlkLnN0eWxlLnpJbmRleCA9ICctMSc7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZW1vdmVWaWRlb0lmTm90UGxheWluZygpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgQm9vdHZpZC5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBCb290dmlkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Db25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkl0ZW1Db24nKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ29ucy5mb3JFYWNoKGl0ZW1Db24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ29uLnN0eWxlLnpJbmRleCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdCb290ZWQnLCAneWVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuQmFja0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICB0aGlzLkJhY2tJbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdCYWNrSW1nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuQmFja0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9pbWdzL2JhY2tHLnBuZycpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQodGhpcy5CYWNrSW1nKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMud2luZG93c05hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLndpbmRvd3NOYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd3aW5kb3dzTmF2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZCh0aGlzLndpbmRvd3NOYXYpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuSXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLkl0ZW1Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtQ29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuSXRlbUNvbnRhaW5lcik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2ltZ3MvSWNvbnMtdHJhc2hCaW4tZW1wdHkucG5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW1Db24nKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLnNldEF0dHJpYnV0ZSgnaWQnLCAndHJhc2hCaW4nKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbScpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtdGV4dCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gJ1JlY3ljbGUgYmluJztcclxuICAgICAgICAgICAgdGhpcy5JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaXRlbUNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5hcHBlbmRDaGlsZCh0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvaW1ncy9JY29ucy1mdWxkZXItZW1wdHkucG5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW1Db24nKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnRW1wdHlGb2xkZXInKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbScpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtdGV4dCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gJ0VtcHR5IGZvbGRlcic7XHJcbiAgICAgICAgICAgIHRoaXMuSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLml0ZW1Db24pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2ltZ3MvSWNvbnMtZnVsZGVyLWZ1bGwucG5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW1Db24nKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnRnVsbEZvbGRlcicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW10ZXh0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5pbm5lclRleHQgPSAnRnVsbCBmb2xkZXInO1xyXG4gICAgICAgICAgICB0aGlzLkl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pdGVtQ29uKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMuaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5hcHBlbmRDaGlsZCh0aGlzLnRleHQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9pbWdzL0ljb25zLWZ1bGRlci1Mb2NrZWQucG5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW1Db24nKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9ja2VkRm9sZGVyMScpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW10ZXh0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5pbm5lclRleHQgPSAnTG9ja2VkIGZvbGRlciAxJztcclxuICAgICAgICAgICAgdGhpcy5JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaXRlbUNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5hcHBlbmRDaGlsZCh0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9pbWdzL0ljb25zLWZ1bGRlci1Mb2NrZWQucG5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW1Db24nKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9ja2VkRm9sZGVyMicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW10ZXh0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5pbm5lclRleHQgPSAnTG9ja2VkIGZvbGRlciAyJztcclxuICAgICAgICAgICAgdGhpcy5JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaXRlbUNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5hcHBlbmRDaGlsZCh0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9pbWdzL0ljb25zLWZ1bGRlci1Mb2NrZWQucG5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW1Db24nKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9ja2VkRm9sZGVyMycpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW10ZXh0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5pbm5lclRleHQgPSAnTG9ja2VkIGZvbGRlciAzJztcclxuICAgICAgICAgICAgdGhpcy5JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaXRlbUNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5hcHBlbmRDaGlsZCh0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvaW1ncy9JY29ucy1maWxlLXR4dC5wbmcnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbUNvbicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW10ZXh0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5pbm5lclRleHQgPSAndGV4dCBmaWxlIDEyMyc7XHJcbiAgICAgICAgICAgIHRoaXMuSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLml0ZW1Db24pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuSXRlbUNvbicpO1xyXG5cclxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lcnMuZm9yRWFjaChpdGVtQ29uID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtQ29uLmlkLmluY2x1ZGVzKCdsb2NrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Db24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGlja2VkSXRlbUlkID0gaXRlbUNvbi5pbm5lclRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnTG9ja1Bhc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGl2LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7IC8vIFByZXZlbnQgdGV4dCBzZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGl2KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdMb2NrUGFzc25ld0hlYWRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkZXIuaW5uZXJUZXh0ID0gY2xpY2tlZEl0ZW1JZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld0hlYWRlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdIZWFkZXJFeGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlckV4aXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdMb2NrUGFzc25ld0hlYWRlckV4aXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SGVhZGVyRXhpdC5pbm5lclRleHQgPSAn4pyVJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SGVhZGVyLmFwcGVuZENoaWxkKG5ld0hlYWRlckV4aXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SGVhZGVyRXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWdEaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluaXRpYWxYLCBpbml0aWFsWTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5Db250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsWCA9IGUuY2xpZW50WCAtIG5ld0Rpdi5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFkgPSBlLmNsaWVudFkgLSBuZXdEaXYub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLkNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWRkaW5nWCA9IGNvbnRhaW5lclJlY3Qud2lkdGggKiAwLjAyOTsgLy8gMi40JSBvZiBjb250YWluZXIgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWRkaW5nWSA9IGNvbnRhaW5lclJlY3QuaGVpZ2h0ICogMC4wNTQ7IC8vIDMuNCUgb2YgY29udGFpbmVyIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heFggPSBjb250YWluZXJSZWN0LndpZHRoIC0gbmV3RGl2Lm9mZnNldFdpZHRoIC0gcGFkZGluZ1g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4WSA9IGNvbnRhaW5lclJlY3QuaGVpZ2h0IC0gbmV3RGl2Lm9mZnNldEhlaWdodCAtIHBhZGRpbmdZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50WCA9IGUuY2xpZW50WCAtIGluaXRpYWxYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50WSA9IGUuY2xpZW50WSAtIGluaXRpYWxZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gTWF0aC5taW4oTWF0aC5tYXgocGFkZGluZ1gsIGN1cnJlbnRYKSwgbWF4WCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFkgPSBNYXRoLm1pbihNYXRoLm1heChwYWRkaW5nWSwgY3VycmVudFkpLCBtYXhZKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEaXYuc3R5bGUubGVmdCA9IGAke2N1cnJlbnRYfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEaXYuc3R5bGUudG9wID0gYCR7Y3VycmVudFl9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Nvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld0NvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3Q29uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IExvY2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2tMYWJlbC5pbm5lclRleHQgPSBcInBhc3N3b3JkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Nvbi5hcHBlbmRDaGlsZChMb2NrTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgTG9ja2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9ja2lucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnTG9ja2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2tpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Bhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Nvbi5hcHBlbmRDaGlsZChMb2NraW5wdXQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IExvY2tCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2tCdG5zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnTG9ja2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Nvbi5hcHBlbmRDaGlsZChMb2NrQnRucyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgTG9ja1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NrU3VibWl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnTG9ja2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2tTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NrU3VibWl0LmlubmVyVGV4dCA9IFwiT0tcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9ja0J0bnMuYXBwZW5kQ2hpbGQoTG9ja1N1Ym1pdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgTG9ja0V4aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9ja0V4aXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdMb2NrRXhpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NrRXhpdC5pbm5lclRleHQgPSBcIkNhbmNlbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NrQnRucy5hcHBlbmRDaGlsZChMb2NrRXhpdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2tFeGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZ0Rpdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JbWFnZSA9IGl0ZW1Db24ucXVlcnlTZWxlY3RvcignLkl0ZW0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvblNyYyA9IGl0ZW1JbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbkltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBcImljb25JbWdEaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWdEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGl0ZW1Db24uaW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5kb3dzTmF2LmFwcGVuZENoaWxkKGljb25JbWdEaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvblNyYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpY29uU3JjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZ0Rpdi5hcHBlbmRDaGlsZChpY29uSW1nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IEZpbGVDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkl0ZW1Db24nKTtcclxuXHJcbiAgICAgICAgICAgIEZpbGVDb250YWluZXJzLmZvckVhY2goaXRlbUNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUNvbi5pZC5pbmNsdWRlcygndHJhc2hCaW4nKSB8fCBpdGVtQ29uLmlkLmluY2x1ZGVzKCdGb2xkZXInKSAmJiAhaXRlbUNvbi5pZC5pbmNsdWRlcygnbG9ja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb2xkZXJOYW1lID0gaXRlbUNvbi5pbm5lclRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBGaWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0ZpbGVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZChGaWxlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBGaWxlc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaWxlc0hlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0ZpbGVzSGVhZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLmFwcGVuZENoaWxkKEZpbGVzSGVhZGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IEZpbGVzTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaWxlc05hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdGaWxlc05hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXNOYW1lLmlubmVyVGV4dCA9IGZvbGRlck5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzSGVhZGVyLmFwcGVuZENoaWxkKEZpbGVzTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdIZWFkZXJFeGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlckV4aXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdGaWxlc0hlYWRlckV4aXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SGVhZGVyRXhpdC5pbm5lclRleHQgPSAn4pyVJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXNIZWFkZXIuYXBwZW5kQ2hpbGQobmV3SGVhZGVyRXhpdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkZXJFeGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IEZpbGVzSGVhZGVyRmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaWxlc0hlYWRlckZpbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdGaWxlc0hlYWRlckZpbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXNIZWFkZXJGaWxsLmlubmVyVGV4dCA9ICfilqEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaWxlc0hlYWRlci5hcHBlbmRDaGlsZChGaWxlc0hlYWRlckZpbGwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXNIZWFkZXJGaWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEZpbGVzLnN0eWxlLndpZHRoID09PSAnY2FsYygxMDAlIC0gNC4zdncpJyAmJiBGaWxlcy5zdHlsZS5oZWlnaHQgPT09ICdjYWxjKDEwMCUgLSA1LjJ2dyknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuc3R5bGUud2lkdGggPSAnMzB2dyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuc3R5bGUuaGVpZ2h0ID0gJzIwdncnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLnRvcCA9ICczMCUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLmxlZnQgPSAnMzAlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuc3R5bGUud2lkdGggPSAnY2FsYygxMDAlIC0gNC4zdncpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5zdHlsZS5oZWlnaHQgPSAnY2FsYygxMDAlIC0gNS4ydncpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5zdHlsZS50b3AgPSAnMi42dncnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLmxlZnQgPSAnMi4xNXZ3JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5zdHlsZS53aWR0aCA9IGlzRXhwYW5kZWQgPyAnMzB2dycgOiAnY2FsYygxMDAlIC0gNC4zdncpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLmhlaWdodCA9IGlzRXhwYW5kZWQgPyAnMjB2dycgOiAnY2FsYygxMDAlIC0gNS4ydncpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLnRvcCA9IGlzRXhwYW5kZWQgPyAnMzAlJyA6ICcyLjZ2dyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5zdHlsZS5sZWZ0ID0gaXNFeHBhbmRlZCA/ICczMCUnIDogJzIuMTV2dyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgRmlsZXNIZWFkZXJtaW5pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzSGVhZGVybWluaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0ZpbGVzSGVhZGVybWluaScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaWxlc0hlYWRlcm1pbmkuaW5uZXJUZXh0ID0gJ+KUgSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzSGVhZGVyLmFwcGVuZENoaWxkKEZpbGVzSGVhZGVybWluaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzSGVhZGVybWluaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluaXRpYWxYLCBpbml0aWFsWTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgaW5pdGlhbCBwb3NpdGlvbiBvZiB0aGUgRmlsZXMgZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxYID0gZS5jbGllbnRYIC0gRmlsZXMub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxZID0gZS5jbGllbnRZIC0gRmlsZXMub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChGaWxlcy5zdHlsZS53aWR0aCA9PT0gJ2NhbGMoMTAwJSAtIDQuM3Z3KScgJiYgRmlsZXMuc3R5bGUuaGVpZ2h0ID09PSAnY2FsYygxMDAlIC0gNS4ydncpJykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5tYWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyAvLyBVc2UgdGhlIGNvbnRhaW5lcidzIGJvdW5kaW5nIHJlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFkZGluZ1ggPSBjb250YWluZXJSZWN0LndpZHRoICogMC4wMjk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhZGRpbmdZID0gY29udGFpbmVyUmVjdC5oZWlnaHQgKiAwLjA1NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4WCA9IGNvbnRhaW5lclJlY3Qud2lkdGggLSBGaWxlcy5vZmZzZXRXaWR0aCAtIHBhZGRpbmdYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhZID0gY29udGFpbmVyUmVjdC5oZWlnaHQgLSBGaWxlcy5vZmZzZXRIZWlnaHQgLSBwYWRkaW5nWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRYID0gZS5jbGllbnRYIC0gaW5pdGlhbFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50WSA9IGUuY2xpZW50WSAtIGluaXRpYWxZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IE1hdGgubWluKE1hdGgubWF4KHBhZGRpbmdYLCBjdXJyZW50WCksIG1heFgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WSA9IE1hdGgubWluKE1hdGgubWF4KHBhZGRpbmdZLCBjdXJyZW50WSksIG1heFkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5zdHlsZS5sZWZ0ID0gYCR7Y3VycmVudFh9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5zdHlsZS50b3AgPSBgJHtjdXJyZW50WX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUltYWdlID0gaXRlbUNvbi5xdWVyeVNlbGVjdG9yKCcuSXRlbScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpY29uU3JjID0gaXRlbUltYWdlLmdldEF0dHJpYnV0ZSgnc3JjJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpY29uSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWdEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsIFwiaWNvbkltZ0RpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZ0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaXRlbUNvbi5pbm5lclRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbmRvd3NOYXYuYXBwZW5kQ2hpbGQoaWNvbkltZ0Rpdik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpY29uU3JjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGljb25TcmMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LmFwcGVuZENoaWxkKGljb25JbWcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZ0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChGaWxlcy5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKEZpbGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChGaWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkFsZXJ0QXBzQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuQWxlcnRBcHNDb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdGFydGJ0bkNvbicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuQWxlcnRBcHNDb24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5BbGVydEFwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLkFsZXJ0QXBzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnQWxlcnRBcHMnKTtcclxuICAgICAgICAgICAgdGhpcy5BbGVydEFwcy5pbm5lclRleHQgPSBcIkFzcGVjdCByYXRpbyBpcyBub3Qgd2l0aGluIHRoZSBhY2NlcHRhYmxlIHJhbmdlOiBcIiArIGFzcGVjdFJhdGlvO1xyXG4gICAgICAgICAgICB0aGlzLkFsZXJ0QXBzQ29uLmFwcGVuZENoaWxkKHRoaXMuQWxlcnRBcHMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5CYWNrYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuQmFja2J0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N0YXJ0YnRuJyk7XHJcbiAgICAgICAgICAgIHRoaXMuQmFja2J0bi5pbm5lclRleHQgPSBcIkdvIEJhY2tcIjtcclxuICAgICAgICAgICAgdGhpcy5BbGVydEFwc0Nvbi5hcHBlbmRDaGlsZCh0aGlzLkJhY2tidG4pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5CYWNrYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi4vXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvUmV2YW1wZWQtWDNxMWEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5odG1sIHtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gIHNjcm9sbGJhci1jb2xvcjogYXF1YSByZ2JhKDEsIDEsIDQzLCAwLjUyMSk7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmh0bWwgYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuaHRtbCBib2R5IC5zdGFydGJ0bkNvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGVmM2ZhO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcXG4gIHotaW5kZXg6IDExO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5odG1sIGJvZHkgLnN0YXJ0YnRuQ29uIC5zdGFydGJ0biB7XFxuICB0ZXh0LXdyYXA6IG5vd3JhcDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBmb250LXNpemU6IDEwdnc7XFxuICBjb2xvcjogIzRlZjNmYTtcXG4gIHBhZGRpbmc6IDF2dyAxMHZ3O1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAjNGVmM2ZhIDJweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbmh0bWwgYm9keSAuc3RhcnRidG5Db24gLnN0YXJ0YnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZWYzZmE7XFxuICBjb2xvcjogIzExMTExMTtcXG59XFxuaHRtbCBib2R5IC5zdGFydGJ0bkNvbiAuQWxlcnRBcHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMCU7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZm9udC1zaXplOiA2dnc7XFxuICBjb2xvcjogIzRlZjNmYTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuaHRtbCBib2R5IHZpZGVvIHtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcXG4gIGh0bWwgYm9keSB2aWRlbyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIGh0bWwgYm9keSB2aWRlbyB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgaHRtbCBib2R5IHZpZGVvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG59XFxuaHRtbCBib2R5IG1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDF2dyk7XFxuICB3aWR0aDogNzV2dztcXG4gIGhlaWdodDogNDkuNTM3NjQ4NjEyOXZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA3NXZ3O1xcbiAgaGVpZ2h0OiA0OS41Mzc2NDg2MTI5dnc7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkl0ZW1Db250YWluZXIge1xcbiAgd2lkdGg6IDk0LjQlO1xcbiAgaGVpZ2h0OiA5My4yJTtcXG4gIG1heC1oZWlnaHQ6IDg5LjYlO1xcbiAgbWF4LXdpZHRoOiA5NC40JTtcXG4gIHotaW5kZXg6IDE7XFxuICBtYXJnaW46IDMuNCUgMi45JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuSXRlbUNvbnRhaW5lciAuSXRlbUNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogNS4xNjY2NjY2NjY3JTtcXG4gIGhlaWdodDogOC4xNTU1NTU1NTU2JTtcXG4gIG1hcmdpbjogMC43NSU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5JdGVtQ29udGFpbmVyIC5JdGVtQ29uIC5JdGVtIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDc1JTtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuSXRlbUNvbnRhaW5lciAuSXRlbUNvbiAuSXRlbXRleHQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMC42dnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTUlO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5Mb2NrUGFzcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwJTtcXG4gIGxlZnQ6IDQwJTtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA3MHZ3O1xcbiAgYm9yZGVyOiAjMDA5NWZmIDFweCBzb2xpZDtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuTG9ja1Bhc3MgLkxvY2tQYXNzbmV3SGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIHBhZGRpbmc6IDAuNHZ3IDAuOHZ3O1xcbiAgZm9udC1zaXplOiAwLjh2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuTG9ja1Bhc3MgLkxvY2tQYXNzbmV3SGVhZGVyIC5Mb2NrUGFzc25ld0hlYWRlckV4aXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBmb250LXNpemU6IDEuNHZ3O1xcbiAgcGFkZGluZzogMCAwLjV2dztcXG4gIG1hcmdpbi10b3A6IC0wLjE4dnc7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkxvY2tQYXNzIC5uZXdDb24ge1xcbiAgaGVpZ2h0OiA0dnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYwZjA7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkxvY2tQYXNzIC5uZXdDb24gbGFiZWwge1xcbiAgbWFyZ2luLXRvcDogMC41dnc7XFxuICBmb250LXNpemU6IDF2dztcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xdnc7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkxvY2tQYXNzIC5uZXdDb24gaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgYm9yZGVyOiAjNTg1ODU4IDFweCBzb2xpZDtcXG4gIHdpZHRoOiAxMHZ3O1xcbiAgaGVpZ2h0OiAxLjJ2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5Mb2NrUGFzcyAubmV3Q29uIGlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogIzAwOTZmYSAxcHggc29saWQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5Mb2NrUGFzcyAubmV3Q29uIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAzdnc7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkxvY2tQYXNzIC5uZXdDb24gZGl2IGJ1dHRvbiB7XFxuICBtYXJnaW46IDAgMnZ3O1xcbiAgd2lkdGg6IDV2dztcXG4gIGhlaWdodDogMS4ydnc7XFxuICBmb250LXNpemU6IDAuN3Z3O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2RmZGY7XFxuICBib3JkZXI6ICNiNmI2YjYgMXB4IHNvbGlkO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5Mb2NrUGFzcyAubmV3Q29uIGRpdiBidXR0b246aG92ZXIge1xcbiAgYm9yZGVyOiAjMzFhOGY4IDJweCBzb2xpZDtcXG59XFxuaHRtbCBib2R5IG1haW4gI0Jvb3R2aWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogNDV2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkJhY2tJbWcge1xcbiAgei1pbmRleDogLTk5OTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiBjYWxjKDc1dncgLSA1cHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDQ5LjUzNzY0ODYxMjl2dyAtIDVweCk7XFxufVxcbmh0bWwgYm9keSBtYWluIC5GaWxlcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZiNmI2O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQuM3Z3KTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNS4ydncpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyLjZ2dztcXG4gIGxlZnQ6IDIuMTV2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkZpbGVzIC5GaWxlc0hlYWRlciB7XFxuICBoZWlnaHQ6IDIuNXZ3O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuaHRtbCBib2R5IG1haW4gLkZpbGVzIC5GaWxlc0hlYWRlciAuRmlsZXNIZWFkZXJFeGl0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwLjh2dztcXG4gIHRvcDogMC4ydnc7XFxuICBmb250LXNpemU6IDEuMjV2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkZpbGVzIC5GaWxlc0hlYWRlciAuRmlsZXNIZWFkZXJGaWxsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzLjV2dztcXG4gIHRvcDogMDtcXG4gIGZvbnQtc2l6ZTogMnZ3O1xcbiAgbWFyZ2luLXRvcDogLTAuMjR2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkZpbGVzIC5GaWxlc0hlYWRlciAuRmlsZXNIZWFkZXJtaW5pIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA2Ljh2dztcXG4gIHRvcDogMC4zdnc7XFxuICBmb250LXNpemU6IDF2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkZpbGVzIC5GaWxlc0hlYWRlciAuRmlsZXNOYW1lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDAuNXZ3O1xcbiAgdG9wOiAwLjZ2dztcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAud2luZG93c05hdiB7XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzQ1MDk4MDM5Mik7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNC4zdncpO1xcbiAgaGVpZ2h0OiAyLjN2dztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMi42dnc7XFxuICBsZWZ0OiAyLjE4dnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAud2luZG93c05hdiAuaWNvbkltZ0RpdiB7XFxuICBoZWlnaHQ6IDIuM3Z3O1xcbiAgd2lkdGg6IDIuMnZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmh0bWwgYm9keSBtYWluIC53aW5kb3dzTmF2IC5pY29uSW1nRGl2IGltZyB7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAud2luZG93c05hdiAuaWNvbkltZ0Rpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNDY2KTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgaHRtbCBib2R5IGgxIHtcXG4gICAgZm9udC1zaXplOiAxMnZ3O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0dnc7XFxuICB9XFxuICBodG1sIGJvZHkgaDUge1xcbiAgICBmb250LXNpemU6IDMuNXZ3O1xcbiAgICBwYWRkaW5nOiAwIDE1dnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjB2dztcXG4gIH1cXG4gIGh0bWwgYm9keSBkaXYge1xcbiAgICBmb250LXNpemU6IDR2dztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjB2dztcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBodG1sIGJvZHkgaDEge1xcbiAgICBmb250LXNpemU6IDE1dnc7XFxuICAgIG1hcmdpbi1ib3R0b206IDV2dztcXG4gIH1cXG4gIGh0bWwgYm9keSBoNSB7XFxuICAgIGZvbnQtc2l6ZTogNXZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgNHZ3O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHZ3O1xcbiAgfVxcbiAgaHRtbCBib2R5IGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogOHZ3O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jc3Mvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBQUo7QUFFSTtFQUNFLHlCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7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O0lBQ0UsY0FBQTtJQUNBLG1CQUFBO0VBekNOO0FBQ0Y7QUE0Q0k7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQTFDTjtFQTZDSTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQTNDTjtFQThDSTtJQUNFLGNBQUE7RUE1Q047QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvUmV2YW1wZWQtWDNxMWEudHRmXFxcIik7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXHJcXG4gIHNjcm9sbGJhci1jb2xvcjogYXF1YSByZ2JhKDEsIDEsIDQzLCAwLjUyMSk7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcblxcclxcbiAgICAuc3RhcnRidG5Db24ge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZWYzZmE7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcclxcbiAgICAgIHotaW5kZXg6IDExO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICAgIC5zdGFydGJ0biB7XFxyXFxuICAgICAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEwdnc7XFxyXFxuICAgICAgICBjb2xvcjogIzRlZjNmYTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDF2dyAxMHZ3O1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgYm9yZGVyOiAjNGVmM2ZhIDJweCBzb2xpZDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRlZjNmYTtcXHJcXG4gICAgICAgICAgY29sb3I6ICMxMTExMTE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5BbGVydEFwcyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDIwJTtcXHJcXG4gICAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICAgICBmb250LXNpemU6IDZ2dztcXHJcXG4gICAgICAgIGNvbG9yOiAjNGVmM2ZhO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB2aWRlbyB7XFxyXFxuICAgICAgei1pbmRleDogMTA7XFxyXFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG5cXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87IC8vIE1haW50YWluIGFzcGVjdCByYXRpb1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bzsgLy8gQWxsb3cgdmlkZW8gdG8gYmUgaXRzIG5hdHVyYWwgd2lkdGhcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbWFpbiB7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMXZ3KTtcXHJcXG4gICAgICB3aWR0aDogNzV2dztcXHJcXG4gICAgICBoZWlnaHQ6IGNhbGMoNzV2dyAvIDEuNTE0KTtcXHJcXG5cXHJcXG4gICAgICAuQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgIHdpZHRoOiA3NXZ3O1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDc1dncgLyAxLjUxNCk7XFxyXFxuXFxyXFxuICAgICAgICAuSXRlbUNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgIHdpZHRoOiA5NC40JTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiA5My4yJTtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogODkuNiU7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogOTQuNCU7XFxyXFxuICAgICAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgICAgICAgIG1hcmdpbjogMy40JSAyLjklO1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuICAgICAgICAgIC5JdGVtQ29uIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDE1IC0gMS41JSk7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDkzLjIlIC8gOSAtIDIuMiUpO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMC43NSU7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuSXRlbSB7XFxyXFxuICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3NSU7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5JdGVtdGV4dCB7XFxyXFxuICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjZ2dztcXHJcXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNSU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuTG9ja1Bhc3Mge1xcclxcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgIHRvcDogNDAlO1xcclxcbiAgICAgICAgICBsZWZ0OiA0MCU7XFxyXFxuICAgICAgICAgIHdpZHRoOiAyMHZ3O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogNzB2dztcXHJcXG4gICAgICAgICAgYm9yZGVyOiAjMDA5NWZmIDFweCBzb2xpZDtcXHJcXG5cXHJcXG4gICAgICAgICAgLkxvY2tQYXNzbmV3SGVhZGVyIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjR2dyAwLjh2dztcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHZ3O1xcclxcblxcclxcbiAgICAgICAgICAgIC5Mb2NrUGFzc25ld0hlYWRlckV4aXQge1xcclxcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHZ3O1xcclxcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjV2dztcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0wLjE4dnc7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIC5uZXdDb24ge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNHZ3O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMGYwO1xcclxcblxcclxcbiAgICAgICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXZ3O1xcclxcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XFxyXFxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMXZ3O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgICBib3JkZXI6ICM1ODU4NTggMXB4IHNvbGlkO1xcclxcbiAgICAgICAgICAgICAgd2lkdGg6IDEwdnc7XFxyXFxuICAgICAgICAgICAgICBoZWlnaHQ6IDEuMnZ3O1xcclxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAjMDA5NmZhIDFweCBzb2xpZDsgLy8gQ2hhbmdlIGJvcmRlciBjb2xvciBvbiBmb2N1c1xcclxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lOyAvLyBSZW1vdmUgZGVmYXVsdCBmb2N1cyBvdXRsaW5lXFxyXFxuICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIGRpdiB7XFxyXFxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMnZ3O1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNXZ3O1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuMnZ3O1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3Z3O1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZmRmO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICNiNmI2YjYgMXB4IHNvbGlkO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICMzMWE4ZjggMnB4IHNvbGlkO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICNCb290dmlkIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICBoZWlnaHQ6IDQ1dnc7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5CYWNrSW1nIHtcXHJcXG4gICAgICAgIHotaW5kZXg6IC05OTk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICB3aWR0aDogY2FsYyg3NXZ3IC0gNXB4KTtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygoNzV2dyAvIDEuNTE0KSAtIDVweCk7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5GaWxlcyB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZiNmI2O1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQuM3Z3KTtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNS4ydncpO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAyLjZ2dztcXHJcXG4gICAgICAgIGxlZnQ6IDIuMTV2dztcXHJcXG5cXHJcXG4gICAgICAgIC5GaWxlc0hlYWRlciB7XFxyXFxuICAgICAgICAgIGhlaWdodDogMi41dnc7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAgICAgICAuRmlsZXNIZWFkZXJFeGl0IHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwLjh2dztcXHJcXG4gICAgICAgICAgICB0b3A6IDAuMnZ3O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIC5GaWxlc0hlYWRlckZpbGwge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IDMuNXZ3O1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDJ2dztcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMC4yNHZ3O1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIC5GaWxlc0hlYWRlcm1pbmkge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IDYuOHZ3O1xcclxcbiAgICAgICAgICAgIHRvcDogMC4zdnc7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgLkZpbGVzTmFtZSB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDAuNXZ3O1xcclxcbiAgICAgICAgICAgIHRvcDogMC42dnc7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLndpbmRvd3NOYXYge1xcclxcbiAgICAgICAgei1pbmRleDogMTAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGJlO1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQuM3Z3KTtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYyg3LjV2dyAtIDUuMnZ3KTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogMi42dnc7XFxyXFxuICAgICAgICBsZWZ0OiAyLjE4dnc7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICAgICAgLmljb25JbWdEaXYge1xcclxcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoNy41dncgLSA1LjJ2dyk7XFxyXFxuICAgICAgICAgIHdpZHRoOiAyLjJ2dztcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwKTtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjQ2Nik7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcclxcbiAgICAgIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJ2dztcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDR2dztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaDUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzLjV2dztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMTV2dztcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwdnc7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGRpdiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDR2dztcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwdnc7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcbiAgICAgIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTV2dztcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDV2dztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaDUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDR2dztcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwdnc7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGRpdiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDh2dztcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tIFwiLi9Jbml0aWFsaXplXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9zdHlsZS5zY3NzXCI7XHJcblxyXG4vLyAqKiAgSUlGRTogSW1tZWRpYXRlbHkgSW52b2tlZCBGdW5jdGlvbiBFeHByZXNzaW9uICAqL1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgbGV0IGluaXQgPSBuZXcgSW5pdGlhbGl6ZSgpO1xyXG5cclxufSkoKTtcclxuIl0sIm5hbWVzIjpbIlBDIiwiSW5pdGlhbGl6ZSIsIl9jcmVhdGVDbGFzcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXNwZWN0UmF0aW8iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ0b0ZpeGVkIiwiY29uc29sZSIsImxvZyIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyZWwiLCJ0eXBlIiwiaHJlZiIsInRpdGxlIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiU3RhcnRWaWQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJzdGFydGJ0bkNvbiIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJzdGFydGJ0biIsImlubmVyVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2aWRlb1NyYyIsInZpZGVvIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInNldEl0ZW0iLCJkZWZhdWx0IiwiZ2VuZXJhdGVSYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ1cGRhdGVUaXRsZSIsInNldEludGVydmFsIiwicmFuZG9tTnVtYmVyIiwiYm9keUVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidXNlclNlbGVjdCIsIm1haW4iLCJDb250YWluZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJCb290ZWQiLCJCb290dmlkIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmVWaWRlb0lmTm90UGxheWluZyIsInNldFRpbWVvdXQiLCJwYXVzZWQiLCJpdGVtQ29ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbUNvbiIsInpJbmRleCIsIkJhY2tJbWciLCJ3aW5kb3dzTmF2IiwiSXRlbUNvbnRhaW5lciIsIml0ZW0iLCJ0ZXh0IiwiaXRlbUNvbnRhaW5lcnMiLCJpZCIsImluY2x1ZGVzIiwiY2xpY2tlZEl0ZW1JZCIsIm5ld0RpdiIsIm5ld0hlYWRlciIsIm5ld0hlYWRlckV4aXQiLCJpY29uSW1nRGl2IiwiaXNEcmFnZ2luZyIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJlIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwiY2xpZW50WSIsIm9mZnNldFRvcCIsInBhZGRpbmdYIiwicGFkZGluZ1kiLCJtYXhYIiwib2Zmc2V0V2lkdGgiLCJtYXhZIiwib2Zmc2V0SGVpZ2h0IiwiY3VycmVudFgiLCJjdXJyZW50WSIsIm1pbiIsIm1heCIsImxlZnQiLCJjb25jYXQiLCJ0b3AiLCJuZXdDb24iLCJMb2NrTGFiZWwiLCJMb2NraW5wdXQiLCJMb2NrQnRucyIsIkxvY2tTdWJtaXQiLCJMb2NrRXhpdCIsIml0ZW1JbWFnZSIsImljb25TcmMiLCJnZXRBdHRyaWJ1dGUiLCJpY29uSW1nIiwiRmlsZUNvbnRhaW5lcnMiLCJmb2xkZXJOYW1lIiwiRmlsZXMiLCJGaWxlc0hlYWRlciIsIkZpbGVzTmFtZSIsIkZpbGVzSGVhZGVyRmlsbCIsImlzRXhwYW5kZWQiLCJGaWxlc0hlYWRlcm1pbmkiLCJkaXNwbGF5IiwiQWxlcnRBcHNDb24iLCJBbGVydEFwcyIsIkJhY2tidG4iLCJsb2NhdGlvbiIsImluaXQiXSwic291cmNlUm9vdCI6IiJ9