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
/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Error */ "./src/components/Error.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var PC = /*#__PURE__*/_createClass(function PC() {
  var _this = this;
  _classCallCheck(this, PC);
  var bodyElement = document.querySelector('body');
  var aspectRatio = (window.innerWidth / window.innerHeight).toFixed(2);
  if (aspectRatio > 1.73 && aspectRatio < 2.0) {
    var formatTime = function formatTime(hours, minutes) {
      var meridiem = hours >= 12 ? 'PM' : 'AM';
      var formattedHours = hours % 12 || 12;
      var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      return "".concat(formattedHours, ":").concat(formattedMinutes, " ").concat(meridiem);
    };
    var formatDate = function formatDate(date) {
      var day = date.getDate();
      var month = date.getMonth() + 1; // Adding 1 because getMonth() returns 0-based month index
      var year = date.getFullYear();
      return "".concat(month, "/").concat(day, "/").concat(year);
    };
    var updateCount = function updateCount() {
      var elements = document.getElementsByClassName("iconImgDiv");
      megaCount.count = elements.length;
    };
    document.body.style.userSelect = 'none';
    this.main = document.createElement('main');
    bodyElement.appendChild(this.main);
    this.Container = document.createElement('div');
    this.Container.setAttribute('class', 'Container');
    this.Container.style.backgroundImage = 'url("./assets/imgs/container.png")';
    this.main.appendChild(this.Container);
    this.BackImg = document.createElement('img');
    this.BackImg.setAttribute('class', 'BackImg');
    this.BackImg.setAttribute('src', './assets/imgs/backG.png');
    this.main.appendChild(this.BackImg);
    this.windowsNav = document.createElement('div');
    this.windowsNav.setAttribute('class', 'windowsNav');
    this.main.appendChild(this.windowsNav);
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
              _this.windowsNav.style.zIndex = '0';
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
          _this.windowsNav.style.zIndex = '0';
          sessionStorage.setItem('Booted', 'yes');
        });
      });
    } else {
      this.windowsNav.style.zIndex = '0';
    }
    this.WindowsInfo = document.createElement('div');
    this.WindowsInfo.setAttribute('class', 'WindowsInfo');
    this.windowsNav.appendChild(this.WindowsInfo);
    this.windowsInfoTime = document.createElement('div');
    this.windowsInfoTime.setAttribute('class', 'windowsInfoTime');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    this.windowsInfoTime.innerText = formatTime(hours, minutes);
    this.WindowsInfo.appendChild(this.windowsInfoTime);
    this.windowsInfoDate = document.createElement('div');
    this.windowsInfoDate.setAttribute('class', 'windowsInfoDate');
    var currentDate = new Date();
    this.windowsInfoDate.innerText = formatDate(currentDate);
    this.WindowsInfo.appendChild(this.windowsInfoDate);
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
    this.itemCon.setAttribute('id', 'txtFile1');
    this.item.setAttribute('class', 'Item');
    this.text.setAttribute('class', 'Itemtext');
    this.text.innerText = 'text file 123';
    this.ItemContainer.appendChild(this.itemCon);
    this.itemCon.appendChild(this.item);
    this.itemCon.appendChild(this.text);
    var megaCount = {
      count: 0
    };
    var itemContainers = document.querySelectorAll('.ItemCon');
    itemContainers.forEach(function (itemCon) {
      if (itemCon.id.includes('locked')) {
        itemCon.addEventListener('click', function () {
          if (megaCount.count <= 29) {
            var clickedItemId = itemCon.innerText;
            var newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'LockPass');
            newDiv.style.userSelect = 'none';
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
              updateCount('iconImgDiv');
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
              updateCount('iconImgDiv');
            });
            var LockExit = document.createElement('button');
            LockExit.setAttribute('class', 'LockExit');
            LockExit.innerText = "Cancel";
            LockBtns.appendChild(LockExit);
            LockExit.addEventListener('click', function () {
              newDiv.remove();
              iconImgDiv.remove();
              updateCount('iconImgDiv');
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
            newDiv.parentNode.appendChild(newDiv);
            iconImgDiv.addEventListener('click', function () {
              if (newDiv.style.display === 'none') {
                newDiv.style.display = 'block';
                newDiv.parentNode.appendChild(newDiv);
              } else {
                newDiv.parentNode.appendChild(newDiv);
              }
            });
            updateCount('iconImgDiv');
          } else {
            new _components_Error__WEBPACK_IMPORTED_MODULE_0__["default"]();
            var audio = new Audio('./assets/Sounds/error.mp3');
            audio.volume = 0.5;
            audio.play();
          }
        });
      }
    });
    var FileContainers = document.querySelectorAll('.ItemCon');
    FileContainers.forEach(function (itemCon) {
      if (itemCon.id.includes('trashBin') || itemCon.id.includes('Folder') && !itemCon.id.includes('locked')) {
        itemCon.addEventListener('click', function () {
          if (megaCount.count <= 29) {
            var folderName = itemCon.innerText;
            var Files = document.createElement('div');
            Files.setAttribute('class', 'Files');
            _this.Container.appendChild(Files);
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
              updateCount('iconImgDiv');
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
            updateCount('iconImgDiv');
          } else {
            new _components_Error__WEBPACK_IMPORTED_MODULE_0__["default"]();
            var audio = new Audio('./assets/Sounds/error.mp3');
            audio.volume = 0.5;
            audio.play();
          }
        });
      }
    });
    var TxtFile = document.querySelectorAll('.ItemCon');
    TxtFile.forEach(function (itemCon) {
      if (itemCon.id.includes('txt')) {
        itemCon.addEventListener('click', function () {
          if (megaCount.count <= 29) {
            var folderName = itemCon.innerText;
            var TextFile = document.createElement('div');
            TextFile.setAttribute('class', 'TextFile');
            _this.Container.appendChild(TextFile);
            var TextFileHeader = document.createElement('div');
            TextFileHeader.setAttribute('class', 'TextFileHeader');
            TextFile.appendChild(TextFileHeader);
            var TextFilName = document.createElement('div');
            TextFilName.setAttribute('class', 'TextFileName');
            TextFilName.innerText = folderName;
            TextFileHeader.appendChild(TextFilName);
            var newHeaderExit = document.createElement('div');
            newHeaderExit.setAttribute('class', 'TextFileHeaderExit');
            newHeaderExit.innerText = '✕';
            TextFileHeader.appendChild(newHeaderExit);
            var TextFileHeaderFill = document.createElement('div');
            TextFileHeaderFill.setAttribute('class', 'TextFileHeaderFill');
            TextFileHeaderFill.innerText = '□';
            TextFileHeader.appendChild(TextFileHeaderFill);
            var TextFileHeadermini = document.createElement('div');
            TextFileHeadermini.setAttribute('class', 'TextFileHeadermini');
            TextFileHeadermini.innerText = '━';
            TextFileHeader.appendChild(TextFileHeadermini);
            var TextFiletextar = document.createElement('textarea');
            TextFiletextar.setAttribute('class', 'TextFiletextar');
            var savedContent = localStorage.getItem(folderName);
            if (!savedContent) {
              TextFiletextar.value = "Welcome here! You can write all you want.";
            } else {
              TextFiletextar.value = savedContent;
            }
            TextFile.appendChild(TextFiletextar);
            TextFileHeadermini.addEventListener('click', function () {
              TextFile.style.display = 'none';
              var textContent = TextFiletextar.value;
              localStorage.setItem(folderName, textContent);
            });
            newHeaderExit.addEventListener('click', function () {
              var textContent = TextFiletextar.value;
              localStorage.setItem(folderName, textContent);
              TextFile.remove();
              iconImgDiv.remove();
              updateCount('iconImgDiv');
            });
            TextFileHeaderFill.addEventListener('click', function () {
              if (TextFile.style.width === 'calc(100% - 4.3vw)' && TextFile.style.height === 'calc(100% - 5.2vw)') {
                TextFile.style.width = '30vw';
                TextFile.style.height = '20vw';
                TextFile.style.top = '30%';
                TextFile.style.left = '30%';
              } else {
                TextFile.style.width = 'calc(100% - 4.3vw)';
                TextFile.style.height = 'calc(100% - 5.2vw)';
                TextFile.style.top = '2.6vw';
                TextFile.style.left = '2.15vw';
              }
              TextFile.style.width = isExpanded ? '30vw' : 'calc(100% - 4.3vw)';
              TextFile.style.height = isExpanded ? '20vw' : 'calc(100% - 5.2vw)';
              TextFile.style.top = isExpanded ? '30%' : '2.6vw';
              TextFile.style.left = isExpanded ? '30%' : '2.15vw';
            });
            var isDragging = false;
            var initialX, initialY;
            TextFileHeader.addEventListener('mousedown', function (e) {
              isDragging = true;
              initialX = e.clientX - TextFile.offsetLeft;
              initialY = e.clientY - TextFile.offsetTop;
            });
            document.addEventListener('mousemove', function (e) {
              if (isDragging) {
                if (TextFile.style.width === 'calc(100% - 4.3vw)' && TextFile.style.height === 'calc(100% - 5.2vw)') {} else {
                  var containerRect = _this.main.getBoundingClientRect();
                  var paddingX = containerRect.width * 0.029;
                  var paddingY = containerRect.height * 0.054;
                  var maxX = containerRect.width - TextFile.offsetWidth - paddingX;
                  var maxY = containerRect.height - TextFile.offsetHeight - paddingY;
                  var currentX = e.clientX - initialX;
                  var currentY = e.clientY - initialY;
                  currentX = Math.min(Math.max(paddingX, currentX), maxX);
                  currentY = Math.min(Math.max(paddingY, currentY), maxY);
                  TextFile.style.left = "".concat(currentX, "px");
                  TextFile.style.top = "".concat(currentY, "px");
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
              if (TextFile.style.display === 'none') {
                TextFile.style.display = 'block';
                TextFile.parentNode.appendChild(TextFile);
                TextFiletextar.innerText = localStorage.getItem(folderName);
              } else {
                TextFile.parentNode.appendChild(TextFile);
                TextFiletextar.innerText = localStorage.getItem(folderName);
              }
            });
            updateCount('iconImgDiv');
          } else {
            new _components_Error__WEBPACK_IMPORTED_MODULE_0__["default"]();
            var audio = new Audio('./assets/Sounds/error.mp3');
            audio.volume = 0.5;
            audio.play();
          }
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

/***/ "./src/components/Error.js":
/*!*********************************!*\
  !*** ./src/components/Error.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Error = /*#__PURE__*/_createClass(function Error() {
  var _this = this;
  _classCallCheck(this, Error);
  this.main = document.querySelector('main');
  var _Error = document.createElement('div');
  _Error.setAttribute('class', 'error');
  this.main.appendChild(_Error);
  var newHeader = document.createElement('div');
  newHeader.setAttribute('class', 'LockPassnewHeader');
  newHeader.innerText = "Error";
  _Error.appendChild(newHeader);
  var newHeaderExit = document.createElement('div');
  newHeaderExit.setAttribute('class', 'LockPassnewHeaderExit');
  newHeaderExit.innerText = '✕';
  newHeader.appendChild(newHeaderExit);
  newHeaderExit.addEventListener('click', function () {
    _Error.remove();
  });
  var isDragging = false;
  var initialX, initialY;
  newHeader.addEventListener('mousedown', function (e) {
    isDragging = true;
    var containerRect = _this.main.getBoundingClientRect();
    initialX = e.clientX - _Error.offsetLeft;
    initialY = e.clientY - _Error.offsetTop;
  });
  document.addEventListener('mousemove', function (e) {
    if (isDragging) {
      var containerRect = _this.main.getBoundingClientRect();
      var paddingX = containerRect.width * 0.029; // 2.4% of container width
      var paddingY = containerRect.height * 0.054; // 3.4% of container height
      var maxX = containerRect.width - _Error.offsetWidth - paddingX;
      var maxY = containerRect.height - _Error.offsetHeight - paddingY;
      var currentX = e.clientX - initialX;
      var currentY = e.clientY - initialY;
      currentX = Math.min(Math.max(paddingX, currentX), maxX);
      currentY = Math.min(Math.max(paddingY, currentY), maxY);
      _Error.style.left = "".concat(currentX, "px");
      _Error.style.top = "".concat(currentY, "px");
    }
  });
  document.addEventListener('mouseup', function () {
    isDragging = false;
  });
  var errorinfo = document.createElement('div');
  errorinfo.setAttribute('class', 'errorinfo');
  _Error.appendChild(errorinfo);
  var ErrorIcon = document.createElement('img');
  ErrorIcon.setAttribute('class', 'ErrorIcon');
  ErrorIcon.setAttribute('src', './assets/imgs/error.png');
  errorinfo.appendChild(ErrorIcon);
  var Errortext = document.createElement('div');
  Errortext.setAttribute('class', 'Errortext');
  Errortext.innerText = "warning!, computer memory is full, using under 30 items at a time is recommended.";
  errorinfo.appendChild(Errortext);
  var ErrorOk = document.createElement('button');
  ErrorOk.innerText = "okay";
  _Error.appendChild(ErrorOk);
  ErrorOk.addEventListener('click', function () {
    _Error.remove();
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);

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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"MyFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: normal;\n  font-style: normal;\n}\nhtml {\n  scrollbar-width: thin;\n  scrollbar-color: aqua rgba(1, 1, 43, 0.521);\n  scroll-behavior: smooth;\n  overflow: hidden;\n}\nhtml body {\n  position: relative;\n  margin: 0;\n  background-color: black;\n}\nhtml body .startbtnCon {\n  background-color: #4ef3fa;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background-color: #111111;\n  z-index: 11;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\nhtml body .startbtnCon .startbtn {\n  text-wrap: nowrap;\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 10vw;\n  color: #4ef3fa;\n  padding: 1vw 10vw;\n  width: auto;\n  height: auto;\n  background-color: #111111;\n  text-align: center;\n  border: #4ef3fa 2px solid;\n  border-radius: 10px;\n}\nhtml body .startbtnCon .startbtn:hover {\n  background-color: #4ef3fa;\n  color: #111111;\n}\nhtml body .startbtnCon .AlertAps {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n  font-size: 6vw;\n  color: #4ef3fa;\n  text-align: center;\n}\nhtml body video {\n  z-index: 10;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 1400px) {\n  html body video {\n    width: 100%;\n    height: auto;\n  }\n}\n@media (max-width: 1200px) {\n  html body video {\n    width: auto;\n    height: 100%;\n  }\n}\n@media (max-width: 800px) {\n  html body video {\n    width: 100%;\n    height: auto;\n  }\n}\nhtml body main {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100vh;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, 0.5vw);\n  width: 75vw;\n  height: 49.5376486129vw;\n}\nhtml body main .Container {\n  background-size: 100%;\n  background-position: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 75vw;\n  height: 49.5376486129vw;\n}\nhtml body main .Container .ItemContainer {\n  width: 94.4%;\n  height: 93.2%;\n  max-height: 89.6%;\n  max-width: 94.4%;\n  z-index: 1;\n  margin: 3.4% 2.9%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: flex-start;\n}\nhtml body main .Container .ItemContainer .ItemCon {\n  cursor: pointer;\n  width: 5.1666666667%;\n  height: 8.1555555556%;\n  margin: 0.75%;\n  padding: 0;\n}\nhtml body main .Container .ItemContainer .ItemCon .Item {\n  margin: 0;\n  padding: 0;\n  height: 75%;\n}\nhtml body main .Container .ItemContainer .ItemCon .Itemtext {\n  margin: 0;\n  padding: 0;\n  font-size: 0.6vw;\n  text-align: center;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  height: 15%;\n}\nhtml body main .Container .LockPass {\n  position: absolute;\n  top: 40%;\n  left: 40%;\n  width: 20vw;\n  height: auto;\n  max-width: 70vw;\n  border: #0095ff 1px solid;\n}\nhtml body main .Container .LockPass .LockPassnewHeader {\n  position: relative;\n  height: auto;\n  background-color: #fff;\n  text-align: start;\n  font-family: Arial, Helvetica, sans-serif;\n  color: rgb(0, 0, 0);\n  padding: 0.4vw 0.8vw;\n  font-size: 0.8vw;\n}\nhtml body main .Container .LockPass .LockPassnewHeader .LockPassnewHeaderExit {\n  cursor: pointer;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 1.4vw;\n  padding: 0 0.5vw;\n  margin-top: -0.18vw;\n}\nhtml body main .Container .LockPass .newCon {\n  height: 4vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  background-color: #eff0f0;\n}\nhtml body main .Container .LockPass .newCon label {\n  margin-top: 0.5vw;\n  font-size: 1vw;\n  font-family: Arial, Helvetica, sans-serif;\n  margin-bottom: 0.1vw;\n}\nhtml body main .Container .LockPass .newCon input {\n  margin-top: 0.5rem;\n  border: #585858 1px solid;\n  width: 10vw;\n  height: 1.2vw;\n  background-color: white;\n}\nhtml body main .Container .LockPass .newCon input:focus {\n  border: #0096fa 1px solid;\n  outline: none;\n}\nhtml body main .Container .LockPass .newCon div {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n  height: 3vw;\n}\nhtml body main .Container .LockPass .newCon div button {\n  margin: 0 2vw;\n  width: 5vw;\n  height: 1.2vw;\n  font-size: 0.7vw;\n  border-radius: 0;\n  background-color: #dcdfdf;\n  border: #b6b6b6 1px solid;\n}\nhtml body main .Container .LockPass .newCon div button:hover {\n  border: #31a8f8 2px solid;\n}\nhtml body main .Container .Files {\n  background-color: #b6b6b6;\n  width: calc(100% - 4.3vw);\n  height: calc(100% - 5.2vw);\n  position: absolute;\n  top: 2.6vw;\n  left: 2.15vw;\n}\nhtml body main .Container .Files .FilesHeader {\n  height: 2.5vw;\n  width: 100%;\n  background-color: white;\n  position: relative;\n}\nhtml body main .Container .Files .FilesHeader .FilesHeaderExit {\n  cursor: pointer;\n  position: absolute;\n  right: 0.8vw;\n  top: 0.2vw;\n  font-size: 1.25vw;\n}\nhtml body main .Container .Files .FilesHeader .FilesHeaderFill {\n  cursor: pointer;\n  position: absolute;\n  right: 3.5vw;\n  top: 0;\n  font-size: 2vw;\n  margin-top: -0.24vw;\n}\nhtml body main .Container .Files .FilesHeader .FilesHeadermini {\n  cursor: pointer;\n  position: absolute;\n  right: 6.8vw;\n  top: 0.3vw;\n  font-size: 1vw;\n}\nhtml body main .Container .Files .FilesHeader .FilesName {\n  position: absolute;\n  left: 0.5vw;\n  top: 0.6vw;\n  font-size: 1vw;\n}\nhtml body main .Container .TextFile {\n  scrollbar-width: thin;\n  scrollbar-color: rgb(255, 255, 255) rgba(200, 200, 200, 0.6);\n  scroll-behavior: smooth;\n  width: calc(100% - 4.3vw);\n  height: calc(100% - 5.2vw);\n  position: absolute;\n  top: 2.6vw;\n  left: 2.15vw;\n}\nhtml body main .Container .TextFile .TextFileHeader {\n  height: 2.5vw;\n  width: 100%;\n  background-color: white;\n  position: relative;\n}\nhtml body main .Container .TextFile .TextFileHeader .TextFileHeaderExit {\n  cursor: pointer;\n  position: absolute;\n  right: 0.8vw;\n  top: 0.2vw;\n  font-size: 1.25vw;\n}\nhtml body main .Container .TextFile .TextFileHeader .TextFileHeaderFill {\n  cursor: pointer;\n  position: absolute;\n  right: 3.5vw;\n  top: 0;\n  font-size: 2vw;\n  margin-top: -0.24vw;\n}\nhtml body main .Container .TextFile .TextFileHeader .TextFileHeadermini {\n  cursor: pointer;\n  position: absolute;\n  right: 6.8vw;\n  top: 0.3vw;\n  font-size: 1vw;\n}\nhtml body main .Container .TextFile .TextFileHeader .TextFileName {\n  position: absolute;\n  left: 0.5vw;\n  top: 0.6vw;\n  font-size: 1vw;\n}\nhtml body main .Container .TextFile .TextFiletextar {\n  padding: 0.4vw;\n  margin: 0;\n  width: calc(100% - 0.8vw);\n  border: none;\n  outline: none;\n  resize: none;\n  height: calc(100% - 3.4vw);\n  background-color: #ebebeb;\n}\nhtml body main #Bootvid {\n  z-index: 5;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: auto;\n  width: auto;\n  height: 45vw;\n}\nhtml body main .BackImg {\n  z-index: -999;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: calc(75vw - 5px);\n  height: calc(49.5376486129vw - 5px);\n}\nhtml body main .windowsNav {\n  z-index: -2;\n  background-color: rgba(0, 0, 0, 0.7450980392);\n  width: calc(100% - 4.3vw);\n  height: 2.3vw;\n  position: absolute;\n  bottom: 2.6vw;\n  left: 2.18vw;\n  display: flex;\n  align-items: center;\n}\nhtml body main .windowsNav .iconImgDiv {\n  height: 2.3vw;\n  width: 2.18vw;\n  background-color: rgba(153, 153, 153, 0);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nhtml body main .windowsNav .iconImgDiv img {\n  height: 70%;\n  width: auto;\n}\nhtml body main .windowsNav .iconImgDiv:hover {\n  background-color: rgba(153, 153, 153, 0.466);\n}\nhtml body main .windowsNav .WindowsInfo {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n  width: 5vw;\n  height: 2.3vw;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\nhtml body main .windowsNav .WindowsInfo div {\n  font-size: 1vw;\n  font-family: Arial, Helvetica, sans-serif;\n  color: white;\n}\nhtml body main .error {\n  position: absolute;\n  top: 38%;\n  left: 37%;\n  width: 20vw;\n  height: auto;\n  max-width: 70vw;\n  background-color: #eff0f0;\n  border: #0095ff 1px solid;\n}\nhtml body main .error .LockPassnewHeader {\n  position: relative;\n  height: auto;\n  background-color: #fff;\n  text-align: start;\n  font-family: Arial, Helvetica, sans-serif;\n  color: rgb(0, 0, 0);\n  padding: 0.4vw 0.8vw;\n  font-size: 0.8vw;\n}\nhtml body main .error .LockPassnewHeader .LockPassnewHeaderExit {\n  cursor: pointer;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 1.4vw;\n  padding: 0 0.5vw;\n  margin-top: -0.18vw;\n}\nhtml body main .error .errorinfo {\n  height: 4vw;\n  display: flex;\n  justify-content: center;\n  height: auto;\n}\nhtml body main .error .errorinfo .ErrorIcon {\n  margin-top: 0.5vw;\n  width: 2.2vw;\n  height: 2.2vw;\n  padding: 1vw;\n  padding-right: 0.5vw;\n}\nhtml body main .error .errorinfo .Errortext {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n  font-size: 1vw;\n  padding: 1.5vw 0;\n}\nhtml body main .error button {\n  margin: 0 2vw;\n  margin-bottom: 0.8vw;\n  width: 6vw;\n  height: 1.4vw;\n  font-size: 0.7vw;\n  border-radius: 0;\n  background-color: #e8e4e4;\n  border: #b6b6b6 2px solid;\n}\nhtml body main .error button:hover {\n  border: #31a8f8 2px solid;\n}\n@media (max-width: 1000px) {\n  html body h1 {\n    font-size: 12vw;\n    margin-bottom: 4vw;\n  }\n  html body h5 {\n    font-size: 3.5vw;\n    padding: 0 15vw;\n    text-align: center;\n    margin-bottom: 20vw;\n  }\n  html body div {\n    font-size: 4vw;\n    margin-bottom: 20vw;\n  }\n}\n@media (max-width: 700px) {\n  html body h1 {\n    font-size: 15vw;\n    margin-bottom: 5vw;\n  }\n  html body h5 {\n    font-size: 5vw;\n    text-align: center;\n    padding: 0 4vw;\n    margin-bottom: 40vw;\n  }\n  html body div {\n    font-size: 8vw;\n  }\n}", "",{"version":3,"sources":["webpack://./css/style.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: \"MyFont\";\r\n  src: url(\"../assets/fonts/Revamped-X3q1a.ttf\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\nhtml {\r\n  scrollbar-width: thin;\r\n  scrollbar-color: aqua rgba(1, 1, 43, 0.521);\r\n  scroll-behavior: smooth;\r\n  overflow: hidden;\r\n\r\n  body {\r\n    position: relative;\r\n    margin: 0;\r\n    background-color: black;\r\n\r\n    .startbtnCon {\r\n      background-color: #4ef3fa;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n      height: 100%;\r\n      position: fixed;\r\n      background-color: #111111;\r\n      z-index: 11;\r\n      justify-content: center;\r\n      align-items: center;\r\n      text-align: center;\r\n\r\n      .startbtn {\r\n        text-wrap: nowrap;\r\n        cursor: pointer;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        font-size: 10vw;\r\n        color: #4ef3fa;\r\n        padding: 1vw 10vw;\r\n        width: auto;\r\n        height: auto;\r\n        background-color: #111111;\r\n        text-align: center;\r\n        border: #4ef3fa 2px solid;\r\n        border-radius: 10px;\r\n\r\n        &:hover {\r\n          background-color: #4ef3fa;\r\n          color: #111111;\r\n        }\r\n      }\r\n\r\n      .AlertAps {\r\n        position: absolute;\r\n        top: 20%;\r\n        left: 50%;\r\n        width: 100%;\r\n        transform: translate(-50%, -50%);\r\n        font-size: 6vw;\r\n        color: #4ef3fa;\r\n        text-align: center;\r\n      }\r\n    }\r\n\r\n    video {\r\n      z-index: 10;\r\n      position: fixed;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: contain;\r\n\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n\r\n      @media (max-width: 1400px) {\r\n        width: 100%;\r\n        height: auto; // Maintain aspect ratio\r\n      }\r\n\r\n      @media (max-width: 1200px) {\r\n        width: auto; // Allow video to be its natural width\r\n        height: 100%;\r\n      }\r\n\r\n      @media (max-width: 800px) {\r\n        width: 100%;\r\n        height: auto;\r\n      }\r\n    }\r\n\r\n    main {\r\n      position: relative;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      text-align: center;\r\n      height: 100vh;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, 0.5vw);\r\n      width: 75vw;\r\n      height: calc(75vw / 1.514);\r\n\r\n\r\n      .Container {\r\n        background-size: 100%;\r\n        background-position: center;\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        margin: auto;\r\n        width: 75vw;\r\n        height: calc(75vw / 1.514);\r\n\r\n        .ItemContainer {\r\n          width: 94.4%;\r\n          height: 93.2%;\r\n          max-height: 89.6%;\r\n          max-width: 94.4%;\r\n          z-index: 1;\r\n          margin: 3.4% 2.9%;\r\n          display: flex;\r\n          flex-direction: column;\r\n          flex-wrap: wrap;\r\n          align-content: flex-start;\r\n\r\n          .ItemCon {\r\n            cursor: pointer;\r\n            width: calc(100% / 15 - 1.5%);\r\n            height: calc(93.2% / 9 - 2.2%);\r\n            margin: 0.75%;\r\n            padding: 0;\r\n\r\n            .Item {\r\n              margin: 0;\r\n              padding: 0;\r\n              height: 75%;\r\n            }\r\n\r\n            .Itemtext {\r\n              margin: 0;\r\n              padding: 0;\r\n              font-size: 0.6vw;\r\n              text-align: center;\r\n              color: white;\r\n              font-family: Arial, Helvetica, sans-serif;\r\n              height: 15%;\r\n            }\r\n          }\r\n        }\r\n\r\n        .LockPass {\r\n          position: absolute;\r\n          top: 40%;\r\n          left: 40%;\r\n          width: 20vw;\r\n          height: auto;\r\n          max-width: 70vw;\r\n          border: #0095ff 1px solid;\r\n\r\n          .LockPassnewHeader {\r\n            position: relative;\r\n            height: auto;\r\n            background-color: #fff;\r\n            text-align: start;\r\n            font-family: Arial, Helvetica, sans-serif;\r\n            color: rgb(0, 0, 0);\r\n            padding: 0.4vw 0.8vw;\r\n            font-size: 0.8vw;\r\n\r\n            .LockPassnewHeaderExit {\r\n              cursor: pointer;\r\n              height: 100%;\r\n              position: absolute;\r\n              right: 0;\r\n              top: 0;\r\n              font-size: 1.4vw;\r\n              padding: 0 0.5vw;\r\n              margin-top: -0.18vw;\r\n            }\r\n          }\r\n\r\n          .newCon {\r\n            height: 4vw;\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n            height: auto;\r\n            background-color: #eff0f0;\r\n\r\n            label {\r\n              margin-top: 0.5vw;\r\n              font-size: 1vw;\r\n              font-family: Arial, Helvetica, sans-serif;\r\n              margin-bottom: 0.1vw;\r\n            }\r\n\r\n            input {\r\n              margin-top: 0.5rem;\r\n              border: #585858 1px solid;\r\n              width: 10vw;\r\n              height: 1.2vw;\r\n              background-color: white;\r\n\r\n              &:focus {\r\n                border: #0096fa 1px solid; // Change border color on focus\r\n                outline: none; // Remove default focus outline\r\n              }\r\n            }\r\n\r\n            div {\r\n              display: flex;\r\n              justify-content: space-around;\r\n              align-items: center;\r\n              text-align: center;\r\n              height: 3vw;\r\n\r\n              button {\r\n                margin: 0 2vw;\r\n                width: 5vw;\r\n                height: 1.2vw;\r\n                font-size: 0.7vw;\r\n                border-radius: 0;\r\n                background-color: #dcdfdf;\r\n                border: #b6b6b6 1px solid;\r\n\r\n                &:hover {\r\n                  border: #31a8f8 2px solid;\r\n                }\r\n              }\r\n            }\r\n          }\r\n\r\n        }\r\n\r\n        .Files {\r\n          background-color: #b6b6b6;\r\n          width: calc(100% - 4.3vw);\r\n          height: calc(100% - 5.2vw);\r\n          position: absolute;\r\n          top: 2.6vw;\r\n          left: 2.15vw;\r\n\r\n          .FilesHeader {\r\n            height: 2.5vw;\r\n            width: 100%;\r\n            background-color: white;\r\n            position: relative;\r\n\r\n            .FilesHeaderExit {\r\n              cursor: pointer;\r\n              position: absolute;\r\n              right: 0.8vw;\r\n              top: 0.2vw;\r\n              font-size: 1.25vw;\r\n            }\r\n\r\n            .FilesHeaderFill {\r\n              cursor: pointer;\r\n              position: absolute;\r\n              right: 3.5vw;\r\n              top: 0;\r\n              font-size: 2vw;\r\n              margin-top: -0.24vw;\r\n            }\r\n\r\n            .FilesHeadermini {\r\n              cursor: pointer;\r\n              position: absolute;\r\n              right: 6.8vw;\r\n              top: 0.3vw;\r\n              font-size: 1vw;\r\n            }\r\n\r\n            .FilesName {\r\n              position: absolute;\r\n              left: 0.5vw;\r\n              top: 0.6vw;\r\n              font-size: 1vw;\r\n            }\r\n          }\r\n        }\r\n\r\n        .TextFile {\r\n          scrollbar-width: thin;\r\n          scrollbar-color: rgb(255, 255, 255) rgba(200, 200, 200, 0.6);\r\n          scroll-behavior: smooth;\r\n          width: calc(100% - 4.3vw);\r\n          height: calc(100% - 5.2vw);\r\n          position: absolute;\r\n          top: 2.6vw;\r\n          left: 2.15vw;\r\n\r\n          .TextFileHeader {\r\n            height: 2.5vw;\r\n            width: 100%;\r\n            background-color: white;\r\n            position: relative;\r\n\r\n            .TextFileHeaderExit {\r\n              cursor: pointer;\r\n              position: absolute;\r\n              right: 0.8vw;\r\n              top: 0.2vw;\r\n              font-size: 1.25vw;\r\n            }\r\n\r\n            .TextFileHeaderFill {\r\n              cursor: pointer;\r\n              position: absolute;\r\n              right: 3.5vw;\r\n              top: 0;\r\n              font-size: 2vw;\r\n              margin-top: -0.24vw;\r\n            }\r\n\r\n            .TextFileHeadermini {\r\n              cursor: pointer;\r\n              position: absolute;\r\n              right: 6.8vw;\r\n              top: 0.3vw;\r\n              font-size: 1vw;\r\n            }\r\n\r\n            .TextFileName {\r\n              position: absolute;\r\n              left: 0.5vw;\r\n              top: 0.6vw;\r\n              font-size: 1vw;\r\n            }\r\n          }\r\n\r\n          .TextFiletextar {\r\n            padding: 0.4vw;\r\n            margin: 0;\r\n            width: calc(100% - 0.8vw);\r\n            border: none;\r\n            outline: none;\r\n            resize: none;\r\n            height: calc(100% - 3.4vw);\r\n            background-color: #ebebeb;\r\n          }\r\n        }\r\n      }\r\n\r\n      #Bootvid {\r\n        z-index: 5;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        margin: auto;\r\n        width: auto;\r\n        height: 45vw;\r\n      }\r\n\r\n      .BackImg {\r\n        z-index: -999;\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        margin: auto;\r\n        width: calc(75vw - 5px);\r\n        height: calc((75vw / 1.514) - 5px);\r\n      }\r\n\r\n      .windowsNav {\r\n        z-index: -2;\r\n        background-color: #000000be;\r\n        width: calc(100% - 4.3vw);\r\n        height: calc(7.5vw - 5.2vw);\r\n        position: absolute;\r\n        bottom: 2.6vw;\r\n        left: 2.18vw;\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        .iconImgDiv {\r\n          height: calc(7.5vw - 5.2vw);\r\n          width: 2.18vw;\r\n          background-color: rgba(153, 153, 153, 0);\r\n          display: flex;\r\n          align-items: center;\r\n          justify-content: center;\r\n\r\n          img {\r\n            height: 70%;\r\n            width: auto;\r\n          }\r\n\r\n          &:hover {\r\n            background-color: rgba(153, 153, 153, 0.466);\r\n          }\r\n        }\r\n\r\n        .WindowsInfo {\r\n          display: flex;\r\n          flex-direction: column;\r\n          justify-content: space-around;\r\n          align-items: center;\r\n          text-align: center;\r\n          width: 5vw;\r\n          height: calc(7.5vw - 5.2vw);\r\n          position: absolute;\r\n          bottom: 0;\r\n          right: 0;\r\n\r\n          div {\r\n            font-size: 1vw;\r\n            font-family: Arial, Helvetica, sans-serif;\r\n            color: white;\r\n          }\r\n        }\r\n      }\r\n\r\n      .error {\r\n        position: absolute;\r\n        top: 38%;\r\n        left: 37%;\r\n        width: 20vw;\r\n        height: auto;\r\n        max-width: 70vw;\r\n        background-color: #eff0f0;\r\n        border: #0095ff 1px solid;\r\n\r\n        .LockPassnewHeader {\r\n          position: relative;\r\n          height: auto;\r\n          background-color: #fff;\r\n          text-align: start;\r\n          font-family: Arial, Helvetica, sans-serif;\r\n          color: rgb(0, 0, 0);\r\n          padding: 0.4vw 0.8vw;\r\n          font-size: 0.8vw;\r\n\r\n          .LockPassnewHeaderExit {\r\n            cursor: pointer;\r\n            height: 100%;\r\n            position: absolute;\r\n            right: 0;\r\n            top: 0;\r\n            font-size: 1.4vw;\r\n            padding: 0 0.5vw;\r\n            margin-top: -0.18vw;\r\n          }\r\n        }\r\n\r\n        .errorinfo {\r\n          height: 4vw;\r\n          display: flex;\r\n          justify-content: center;\r\n          height: auto;\r\n\r\n          .ErrorIcon {\r\n            margin-top: 0.5vw;\r\n            width: 2.2vw;\r\n            height: 2.2vw;\r\n            padding: 1vw;\r\n            padding-right: 0.5vw;\r\n          }\r\n\r\n          .Errortext {\r\n            display: flex;\r\n            justify-content: space-around;\r\n            align-items: center;\r\n            text-align: center;\r\n            font-size: 1vw;\r\n            padding: 1.5vw 0;\r\n          }\r\n        }\r\n\r\n        button {\r\n          margin: 0 2vw;\r\n          margin-bottom: 0.8vw;\r\n          width: 6vw;\r\n          height: 1.4vw;\r\n          font-size: 0.7vw;\r\n          border-radius: 0;\r\n          background-color: #e8e4e4;\r\n          border: #b6b6b6 2px solid;\r\n\r\n          &:hover {\r\n            border: #31a8f8 2px solid;\r\n          }\r\n        }\r\n\r\n      }\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n    @media (max-width: 1000px) {\r\n      h1 {\r\n        font-size: 12vw;\r\n        margin-bottom: 4vw;\r\n      }\r\n\r\n      h5 {\r\n        font-size: 3.5vw;\r\n        padding: 0 15vw;\r\n        text-align: center;\r\n        margin-bottom: 20vw;\r\n      }\r\n\r\n      div {\r\n        font-size: 4vw;\r\n        margin-bottom: 20vw;\r\n      }\r\n    }\r\n\r\n    @media (max-width: 700px) {\r\n      h1 {\r\n        font-size: 15vw;\r\n        margin-bottom: 5vw;\r\n      }\r\n\r\n      h5 {\r\n        font-size: 5vw;\r\n        text-align: center;\r\n        padding: 0 4vw;\r\n        margin-bottom: 40vw;\r\n      }\r\n\r\n      div {\r\n        font-size: 8vw;\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLE1BQU0sV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLE1BQU0sV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFB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VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FzQztBQUNYOztBQUUzQjs7QUFFQSxDQUFDLFlBQVk7RUFFWCxJQUFJNkgsSUFBSSxHQUFHLElBQUlwSyxtREFBVSxDQUFDLENBQUM7QUFFN0IsQ0FBQyxFQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vc3JjL0luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9zcmMvUEMuanMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9FcnJvci5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL2Nzcy9zdHlsZS5zY3NzP2Y0ZmQiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUEMgZnJvbSBcIi4vUENcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdGlhbGl6ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0KS50b0ZpeGVkKDIpO1xyXG4gICAgY29uc29sZS5sb2coYXNwZWN0UmF0aW8pO1xyXG4gICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuICAgIGxpbmsucmVsID0gXCJpY29uXCI7XHJcbiAgICBsaW5rLnR5cGUgPSBcImltYWdlL3BuZ1wiO1xyXG4gICAgbGluay5ocmVmID0gXCIuL2Fzc2V0cy9pbWdzL0xPR08ucG5nXCI7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IFwiQW5kcmVhc05OMSAtIFNURUFMVEggUHJvamVjdFwiO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcblxyXG4gICAgY29uc3QgU3RhcnRWaWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdTdGFydFZpZCcpO1xyXG4gICAgaWYgKFN0YXJ0VmlkICE9PSAnRG9uZScpIHtcclxuXHJcbiAgICAgIHRoaXMuc3RhcnRidG5Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5zdGFydGJ0bkNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N0YXJ0YnRuQ29uJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zdGFydGJ0bkNvbik7XHJcblxyXG4gICAgICB0aGlzLnN0YXJ0YnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRoaXMuc3RhcnRidG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdGFydGJ0bicpO1xyXG4gICAgICB0aGlzLnN0YXJ0YnRuLmlubmVyVGV4dCA9IFwiRW50ZXJcIjtcclxuICAgICAgdGhpcy5zdGFydGJ0bkNvbi5hcHBlbmRDaGlsZCh0aGlzLnN0YXJ0YnRuKTtcclxuXHJcbiAgICAgIHRoaXMuc3RhcnRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCB2aWRlb1NyYztcclxuICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcbiAgICAgICAgaWYgKGFzcGVjdFJhdGlvIDwgMC43KSB7XHJcbiAgICAgICAgICB2aWRlb1NyYyA9ICcuL2Fzc2V0cy9UaXRsZV9pcGhvbmUubXA0JztcclxuICAgICAgICB9IGVsc2UgaWYgKGFzcGVjdFJhdGlvIDwgMS40KSB7XHJcbiAgICAgICAgICB2aWRlb1NyYyA9ICcuL2Fzc2V0cy9UaXRsZV9JcGFkLm1wNCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhc3BlY3RSYXRpbyA8IDEuOSkge1xyXG4gICAgICAgICAgdmlkZW9TcmMgPSAnLi9hc3NldHMvVGl0bGVfUEMubXA0JztcclxuICAgICAgICAgIGlmIChhc3BlY3RSYXRpbyA8IDEuNzgpIHtcclxuICAgICAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSAnYXV0byc7XHJcbiAgICAgICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgICAgICB2aWRlby5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZpZGVvU3JjID0gJy4vYXNzZXRzL1RpdGxlX1BDLm1wNCc7XHJcbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8gPCAxLjc4KSB7XHJcbiAgICAgICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICB2aWRlby5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2aWRlby5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICAgICAgdmlkZW8uc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3NyYycsIHZpZGVvU3JjKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2aWRlb1NyYyk7XHJcblxyXG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAnJyk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodmlkZW8pO1xyXG4gICAgICAgIHRoaXMuc3RhcnRidG5Db24ucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgdmlkZW8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh2aWRlbyk7XHJcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdTdGFydFZpZCcsICdEb25lJyk7XHJcbiAgICAgICAgICBuZXcgUEMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3IFBDKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgfSAvLyBFTkQgY29uc3RydWN0b3JcclxufSAvLyBFTkQgY2xhc3NcclxuIiwiaW1wb3J0IHsgcmVtb3ZlIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9saWJzL3R3ZWVuLm1vZHVsZS5qc1wiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vY29tcG9uZW50cy9FcnJvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUEMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICBjb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCkudG9GaXhlZCgyKTtcclxuXHJcblxyXG4gICAgICAgIGlmIChhc3BlY3RSYXRpbyA+IDEuNzMgJiYgYXNwZWN0UmF0aW8gPCAyLjApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgICAgICBib2R5RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm1haW4pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdDb250YWluZXInKTtcclxuICAgICAgICAgICAgdGhpcy5Db250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIi4vYXNzZXRzL2ltZ3MvY29udGFpbmVyLnBuZ1wiKSc7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZCh0aGlzLkNvbnRhaW5lcik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5CYWNrSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuQmFja0ltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0JhY2tJbWcnKTtcclxuICAgICAgICAgICAgdGhpcy5CYWNrSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2ltZ3MvYmFja0cucG5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZCh0aGlzLkJhY2tJbWcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy53aW5kb3dzTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMud2luZG93c05hdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dpbmRvd3NOYXYnKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHRoaXMud2luZG93c05hdik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBCb290ZWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdCb290ZWQnKTtcclxuICAgICAgICAgICAgaWYgKEJvb3RlZCAhPT0gJ3llcycpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcbiAgICAgICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9QQ2Jvb3QubXA0Jyk7XHJcbiAgICAgICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0Jvb3R2aWQnKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAnJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQodmlkZW8pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IEJvb3R2aWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQm9vdHZpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZVZpZGVvSWZOb3RQbGF5aW5nID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQm9vdHZpZC5wYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb3R2aWQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtQ29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5JdGVtQ29uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ29ucy5mb3JFYWNoKGl0ZW1Db24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2luZG93c05hdi5zdHlsZS56SW5kZXggPSAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNvbi5zdHlsZS56SW5kZXggPSAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnQm9vdGVkJywgJ3llcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgQm9vdHZpZC5hZGRFdmVudExpc3RlbmVyKCdwbGF5aW5nJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Db25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkl0ZW1Db24nKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ29ucy5mb3JFYWNoKGl0ZW1Db24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ29uLnN0eWxlLnpJbmRleCA9ICctMic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgQm9vdHZpZC5zdHlsZS56SW5kZXggPSAnLTEnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlVmlkZW9JZk5vdFBsYXlpbmcoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIEJvb3R2aWQuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQm9vdHZpZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtQ29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5JdGVtQ29uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUNvbnMuZm9yRWFjaChpdGVtQ29uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNvbi5zdHlsZS56SW5kZXggPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5kb3dzTmF2LnN0eWxlLnpJbmRleCA9ICcwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnQm9vdGVkJywgJ3llcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aW5kb3dzTmF2LnN0eWxlLnpJbmRleCA9ICcwJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5XaW5kb3dzSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLldpbmRvd3NJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnV2luZG93c0luZm8nKTtcclxuICAgICAgICAgICAgdGhpcy53aW5kb3dzTmF2LmFwcGVuZENoaWxkKHRoaXMuV2luZG93c0luZm8pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy53aW5kb3dzSW5mb1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy53aW5kb3dzSW5mb1RpbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd3aW5kb3dzSW5mb1RpbWUnKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZvcm1hdFRpbWUoaG91cnMsIG1pbnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lcmlkaWVtID0gaG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZEhvdXJzID0gaG91cnMgJSAxMiB8fCAxMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZE1pbnV0ZXMgPSBtaW51dGVzIDwgMTAgPyAnMCcgKyBtaW51dGVzIDogbWludXRlcztcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtmb3JtYXR0ZWRIb3Vyc306JHtmb3JtYXR0ZWRNaW51dGVzfSAke21lcmlkaWVtfWA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBjdXJyZW50VGltZS5nZXRIb3VycygpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gY3VycmVudFRpbWUuZ2V0TWludXRlcygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy53aW5kb3dzSW5mb1RpbWUuaW5uZXJUZXh0ID0gZm9ybWF0VGltZShob3VycywgbWludXRlcyk7XHJcbiAgICAgICAgICAgIHRoaXMuV2luZG93c0luZm8uYXBwZW5kQ2hpbGQodGhpcy53aW5kb3dzSW5mb1RpbWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMud2luZG93c0luZm9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMud2luZG93c0luZm9EYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2luZG93c0luZm9EYXRlJyk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxOyAvLyBBZGRpbmcgMSBiZWNhdXNlIGdldE1vbnRoKCkgcmV0dXJucyAwLWJhc2VkIG1vbnRoIGluZGV4XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy53aW5kb3dzSW5mb0RhdGUuaW5uZXJUZXh0ID0gZm9ybWF0RGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuV2luZG93c0luZm8uYXBwZW5kQ2hpbGQodGhpcy53aW5kb3dzSW5mb0RhdGUpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLkl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5JdGVtQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbUNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLkl0ZW1Db250YWluZXIpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9pbWdzL0ljb25zLXRyYXNoQmluLWVtcHR5LnBuZycpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtQ29uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RyYXNoQmluJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW0nKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbXRleHQnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0LmlubmVyVGV4dCA9ICdSZWN5Y2xlIGJpbic7XHJcbiAgICAgICAgICAgIHRoaXMuSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLml0ZW1Db24pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2ltZ3MvSWNvbnMtZnVsZGVyLWVtcHR5LnBuZycpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtQ29uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0VtcHR5Rm9sZGVyJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW0nKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbXRleHQnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0LmlubmVyVGV4dCA9ICdFbXB0eSBmb2xkZXInO1xyXG4gICAgICAgICAgICB0aGlzLkl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pdGVtQ29uKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMuaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5hcHBlbmRDaGlsZCh0aGlzLnRleHQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9pbWdzL0ljb25zLWZ1bGRlci1mdWxsLnBuZycpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtQ29uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0Z1bGxGb2xkZXInKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbScpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtdGV4dCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gJ0Z1bGwgZm9sZGVyJztcclxuICAgICAgICAgICAgdGhpcy5JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaXRlbUNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5hcHBlbmRDaGlsZCh0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvaW1ncy9JY29ucy1mdWxkZXItTG9ja2VkLnBuZycpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtQ29uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2tlZEZvbGRlcjEnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbScpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtdGV4dCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gJ0xvY2tlZCBmb2xkZXIgMSc7XHJcbiAgICAgICAgICAgIHRoaXMuSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLml0ZW1Db24pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvaW1ncy9JY29ucy1mdWxkZXItTG9ja2VkLnBuZycpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtQ29uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2tlZEZvbGRlcjInKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbScpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtdGV4dCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gJ0xvY2tlZCBmb2xkZXIgMic7XHJcbiAgICAgICAgICAgIHRoaXMuSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLml0ZW1Db24pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvaW1ncy9JY29ucy1mdWxkZXItTG9ja2VkLnBuZycpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtQ29uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2tlZEZvbGRlcjMnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbScpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtdGV4dCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gJ0xvY2tlZCBmb2xkZXIgMyc7XHJcbiAgICAgICAgICAgIHRoaXMuSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLml0ZW1Db24pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2ltZ3MvSWNvbnMtZmlsZS10eHQucG5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW1Db24nKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLnNldEF0dHJpYnV0ZSgnaWQnLCAndHh0RmlsZTEnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbScpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtdGV4dCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gJ3RleHQgZmlsZSAxMjMnO1xyXG4gICAgICAgICAgICB0aGlzLkl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pdGVtQ29uKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMuaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5hcHBlbmRDaGlsZCh0aGlzLnRleHQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1lZ2FDb3VudCA9IHtcclxuICAgICAgICAgICAgICAgIGNvdW50OiAwXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVDb3VudCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpY29uSW1nRGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgbWVnYUNvdW50LmNvdW50ID0gZWxlbWVudHMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5JdGVtQ29uJyk7XHJcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXJzLmZvckVhY2goaXRlbUNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUNvbi5pZC5pbmNsdWRlcygnbG9ja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVnYUNvdW50LmNvdW50IDw9IDI5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xpY2tlZEl0ZW1JZCA9IGl0ZW1Db24uaW5uZXJUZXh0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnTG9ja1Bhc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGl2KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0xvY2tQYXNzbmV3SGVhZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkZXIuaW5uZXJUZXh0ID0gY2xpY2tlZEl0ZW1JZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdIZWFkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0hlYWRlckV4aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlckV4aXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdMb2NrUGFzc25ld0hlYWRlckV4aXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlckV4aXQuaW5uZXJUZXh0ID0gJ+KclSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkZXIuYXBwZW5kQ2hpbGQobmV3SGVhZGVyRXhpdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SGVhZGVyRXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZ0Rpdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDb3VudCgnaWNvbkltZ0RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbml0aWFsWCwgaW5pdGlhbFk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxYID0gZS5jbGllbnRYIC0gbmV3RGl2Lm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFkgPSBlLmNsaWVudFkgLSBuZXdEaXYub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5Db250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhZGRpbmdYID0gY29udGFpbmVyUmVjdC53aWR0aCAqIDAuMDI5OyAvLyAyLjQlIG9mIGNvbnRhaW5lciB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWRkaW5nWSA9IGNvbnRhaW5lclJlY3QuaGVpZ2h0ICogMC4wNTQ7IC8vIDMuNCUgb2YgY29udGFpbmVyIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhYID0gY29udGFpbmVyUmVjdC53aWR0aCAtIG5ld0Rpdi5vZmZzZXRXaWR0aCAtIHBhZGRpbmdYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhZID0gY29udGFpbmVyUmVjdC5oZWlnaHQgLSBuZXdEaXYub2Zmc2V0SGVpZ2h0IC0gcGFkZGluZ1k7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50WCA9IGUuY2xpZW50WCAtIGluaXRpYWxYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFkgPSBlLmNsaWVudFkgLSBpbml0aWFsWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFggPSBNYXRoLm1pbihNYXRoLm1heChwYWRkaW5nWCwgY3VycmVudFgpLCBtYXhYKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFkgPSBNYXRoLm1pbihNYXRoLm1heChwYWRkaW5nWSwgY3VycmVudFkpLCBtYXhZKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmxlZnQgPSBgJHtjdXJyZW50WH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS50b3AgPSBgJHtjdXJyZW50WX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Nvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld0NvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld0Nvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgTG9ja0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvY2tMYWJlbC5pbm5lclRleHQgPSBcInBhc3N3b3JkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDb24uYXBwZW5kQ2hpbGQoTG9ja0xhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBMb2NraW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9ja2lucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnTG9ja2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NraW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQYXNzd29yZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29uLmFwcGVuZENoaWxkKExvY2tpbnB1dCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IExvY2tCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NrQnRucy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0xvY2tpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29uLmFwcGVuZENoaWxkKExvY2tCdG5zKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgTG9ja1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9ja1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0xvY2tpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9ja1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NrU3VibWl0LmlubmVyVGV4dCA9IFwiT0tcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvY2tCdG5zLmFwcGVuZENoaWxkKExvY2tTdWJtaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9ja1N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZ0Rpdi5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ291bnQoJ2ljb25JbWdEaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgTG9ja0V4aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvY2tFeGl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnTG9ja0V4aXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvY2tFeGl0LmlubmVyVGV4dCA9IFwiQ2FuY2VsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NrQnRucy5hcHBlbmRDaGlsZChMb2NrRXhpdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NrRXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZ0Rpdi5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ291bnQoJ2ljb25JbWdEaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUltYWdlID0gaXRlbUNvbi5xdWVyeVNlbGVjdG9yKCcuSXRlbScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvblNyYyA9IGl0ZW1JbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb25JbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWdEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsIFwiaWNvbkltZ0RpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWdEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGl0ZW1Db24uaW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2luZG93c05hdi5hcHBlbmRDaGlsZChpY29uSW1nRGl2KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvblNyYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvblNyYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LmFwcGVuZENoaWxkKGljb25JbWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGl2LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3RGl2KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdEaXYuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGl2LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3RGl2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEaXYucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdEaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ291bnQoJ2ljb25JbWdEaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdWRpbyA9IG5ldyBBdWRpbygnLi9hc3NldHMvU291bmRzL2Vycm9yLm1wMycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW8udm9sdW1lID0gMC41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgRmlsZUNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuSXRlbUNvbicpO1xyXG4gICAgICAgICAgICBGaWxlQ29udGFpbmVycy5mb3JFYWNoKGl0ZW1Db24gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1Db24uaWQuaW5jbHVkZXMoJ3RyYXNoQmluJykgfHwgaXRlbUNvbi5pZC5pbmNsdWRlcygnRm9sZGVyJykgJiYgIWl0ZW1Db24uaWQuaW5jbHVkZXMoJ2xvY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lZ2FDb3VudC5jb3VudCA8PSAyOSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvbGRlck5hbWUgPSBpdGVtQ29uLmlubmVyVGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBGaWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdGaWxlcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db250YWluZXIuYXBwZW5kQ2hpbGQoRmlsZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IEZpbGVzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlc0hlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0ZpbGVzSGVhZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5hcHBlbmRDaGlsZChGaWxlc0hlYWRlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgRmlsZXNOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlc05hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdGaWxlc05hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzTmFtZS5pbm5lclRleHQgPSBmb2xkZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXNIZWFkZXIuYXBwZW5kQ2hpbGQoRmlsZXNOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdIZWFkZXJFeGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkZXJFeGl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnRmlsZXNIZWFkZXJFeGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkZXJFeGl0LmlubmVyVGV4dCA9ICfinJUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXNIZWFkZXIuYXBwZW5kQ2hpbGQobmV3SGVhZGVyRXhpdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SGVhZGVyRXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNvdW50KCdpY29uSW1nRGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBGaWxlc0hlYWRlckZpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzSGVhZGVyRmlsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0ZpbGVzSGVhZGVyRmlsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXNIZWFkZXJGaWxsLmlubmVyVGV4dCA9ICfilqEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXNIZWFkZXIuYXBwZW5kQ2hpbGQoRmlsZXNIZWFkZXJGaWxsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlc0hlYWRlckZpbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEZpbGVzLnN0eWxlLndpZHRoID09PSAnY2FsYygxMDAlIC0gNC4zdncpJyAmJiBGaWxlcy5zdHlsZS5oZWlnaHQgPT09ICdjYWxjKDEwMCUgLSA1LjJ2dyknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLndpZHRoID0gJzMwdncnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5zdHlsZS5oZWlnaHQgPSAnMjB2dyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLnRvcCA9ICczMCUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5zdHlsZS5sZWZ0ID0gJzMwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuc3R5bGUud2lkdGggPSAnY2FsYygxMDAlIC0gNC4zdncpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuc3R5bGUuaGVpZ2h0ID0gJ2NhbGMoMTAwJSAtIDUuMnZ3KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLnRvcCA9ICcyLjZ2dyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLmxlZnQgPSAnMi4xNXZ3JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLndpZHRoID0gaXNFeHBhbmRlZCA/ICczMHZ3JyA6ICdjYWxjKDEwMCUgLSA0LjN2dyknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLmhlaWdodCA9IGlzRXhwYW5kZWQgPyAnMjB2dycgOiAnY2FsYygxMDAlIC0gNS4ydncpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5zdHlsZS50b3AgPSBpc0V4cGFuZGVkID8gJzMwJScgOiAnMi42dncnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLmxlZnQgPSBpc0V4cGFuZGVkID8gJzMwJScgOiAnMi4xNXZ3JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IEZpbGVzSGVhZGVybWluaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXNIZWFkZXJtaW5pLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnRmlsZXNIZWFkZXJtaW5pJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlc0hlYWRlcm1pbmkuaW5uZXJUZXh0ID0gJ+KUgSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlc0hlYWRlci5hcHBlbmRDaGlsZChGaWxlc0hlYWRlcm1pbmkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXNIZWFkZXJtaW5pLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluaXRpYWxYLCBpbml0aWFsWTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlc0hlYWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgaW5pdGlhbCBwb3NpdGlvbiBvZiB0aGUgRmlsZXMgZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsWCA9IGUuY2xpZW50WCAtIEZpbGVzLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFkgPSBlLmNsaWVudFkgLSBGaWxlcy5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChGaWxlcy5zdHlsZS53aWR0aCA9PT0gJ2NhbGMoMTAwJSAtIDQuM3Z3KScgJiYgRmlsZXMuc3R5bGUuaGVpZ2h0ID09PSAnY2FsYygxMDAlIC0gNS4ydncpJykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLm1haW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IC8vIFVzZSB0aGUgY29udGFpbmVyJ3MgYm91bmRpbmcgcmVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFkZGluZ1ggPSBjb250YWluZXJSZWN0LndpZHRoICogMC4wMjk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWRkaW5nWSA9IGNvbnRhaW5lclJlY3QuaGVpZ2h0ICogMC4wNTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhYID0gY29udGFpbmVyUmVjdC53aWR0aCAtIEZpbGVzLm9mZnNldFdpZHRoIC0gcGFkZGluZ1g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhZID0gY29udGFpbmVyUmVjdC5oZWlnaHQgLSBGaWxlcy5vZmZzZXRIZWlnaHQgLSBwYWRkaW5nWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50WCA9IGUuY2xpZW50WCAtIGluaXRpYWxYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRZID0gZS5jbGllbnRZIC0gaW5pdGlhbFk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IE1hdGgubWluKE1hdGgubWF4KHBhZGRpbmdYLCBjdXJyZW50WCksIG1heFgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFkgPSBNYXRoLm1pbihNYXRoLm1heChwYWRkaW5nWSwgY3VycmVudFkpLCBtYXhZKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLmxlZnQgPSBgJHtjdXJyZW50WH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5zdHlsZS50b3AgPSBgJHtjdXJyZW50WX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JbWFnZSA9IGl0ZW1Db24ucXVlcnlTZWxlY3RvcignLkl0ZW0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb25TcmMgPSBpdGVtSW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpY29uSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBcImljb25JbWdEaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBpdGVtQ29uLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbmRvd3NOYXYuYXBwZW5kQ2hpbGQoaWNvbkltZ0Rpdik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGljb25TcmMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGljb25TcmMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZ0Rpdi5hcHBlbmRDaGlsZChpY29uSW1nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChGaWxlcy5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoRmlsZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoRmlsZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ291bnQoJ2ljb25JbWdEaXYnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXVkaW8gPSBuZXcgQXVkaW8oJy4vYXNzZXRzL1NvdW5kcy9lcnJvci5tcDMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvLnZvbHVtZSA9IDAuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCBUeHRGaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkl0ZW1Db24nKTtcclxuICAgICAgICAgICAgVHh0RmlsZS5mb3JFYWNoKGl0ZW1Db24gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1Db24uaWQuaW5jbHVkZXMoJ3R4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZWdhQ291bnQuY291bnQgPD0gMjkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb2xkZXJOYW1lID0gaXRlbUNvbi5pbm5lclRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgVGV4dEZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnVGV4dEZpbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ29udGFpbmVyLmFwcGVuZENoaWxkKFRleHRGaWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBUZXh0RmlsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGVIZWFkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdUZXh0RmlsZUhlYWRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUuYXBwZW5kQ2hpbGQoVGV4dEZpbGVIZWFkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFRleHRGaWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ1RleHRGaWxlTmFtZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbE5hbWUuaW5uZXJUZXh0ID0gZm9sZGVyTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlSGVhZGVyLmFwcGVuZENoaWxkKFRleHRGaWxOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdIZWFkZXJFeGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkZXJFeGl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnVGV4dEZpbGVIZWFkZXJFeGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkZXJFeGl0LmlubmVyVGV4dCA9ICfinJUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGVIZWFkZXIuYXBwZW5kQ2hpbGQobmV3SGVhZGVyRXhpdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgVGV4dEZpbGVIZWFkZXJGaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZUhlYWRlckZpbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdUZXh0RmlsZUhlYWRlckZpbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlSGVhZGVyRmlsbC5pbm5lclRleHQgPSAn4pahJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlSGVhZGVyLmFwcGVuZENoaWxkKFRleHRGaWxlSGVhZGVyRmlsbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgVGV4dEZpbGVIZWFkZXJtaW5pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZUhlYWRlcm1pbmkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdUZXh0RmlsZUhlYWRlcm1pbmknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlSGVhZGVybWluaS5pbm5lclRleHQgPSAn4pSBJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlSGVhZGVyLmFwcGVuZENoaWxkKFRleHRGaWxlSGVhZGVybWluaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgVGV4dEZpbGV0ZXh0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGV0ZXh0YXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdUZXh0RmlsZXRleHRhcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2F2ZWRDb250ZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZm9sZGVyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNhdmVkQ29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxldGV4dGFyLnZhbHVlID0gXCJXZWxjb21lIGhlcmUhIFlvdSBjYW4gd3JpdGUgYWxsIHlvdSB3YW50LlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZXRleHRhci52YWx1ZSA9IHNhdmVkQ29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLmFwcGVuZENoaWxkKFRleHRGaWxldGV4dGFyKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGVIZWFkZXJtaW5pLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBUZXh0RmlsZXRleHRhci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShmb2xkZXJOYW1lLCB0ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkZXJFeGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gVGV4dEZpbGV0ZXh0YXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZm9sZGVyTmFtZSwgdGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWdEaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ291bnQoJ2ljb25JbWdEaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZUhlYWRlckZpbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRleHRGaWxlLnN0eWxlLndpZHRoID09PSAnY2FsYygxMDAlIC0gNC4zdncpJyAmJiBUZXh0RmlsZS5zdHlsZS5oZWlnaHQgPT09ICdjYWxjKDEwMCUgLSA1LjJ2dyknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnN0eWxlLndpZHRoID0gJzMwdncnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZS5zdHlsZS5oZWlnaHQgPSAnMjB2dyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnN0eWxlLnRvcCA9ICczMCUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZS5zdHlsZS5sZWZ0ID0gJzMwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUuc3R5bGUud2lkdGggPSAnY2FsYygxMDAlIC0gNC4zdncpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUuc3R5bGUuaGVpZ2h0ID0gJ2NhbGMoMTAwJSAtIDUuMnZ3KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnN0eWxlLnRvcCA9ICcyLjZ2dyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnN0eWxlLmxlZnQgPSAnMi4xNXZ3JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnN0eWxlLndpZHRoID0gaXNFeHBhbmRlZCA/ICczMHZ3JyA6ICdjYWxjKDEwMCUgLSA0LjN2dyknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnN0eWxlLmhlaWdodCA9IGlzRXhwYW5kZWQgPyAnMjB2dycgOiAnY2FsYygxMDAlIC0gNS4ydncpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZS5zdHlsZS50b3AgPSBpc0V4cGFuZGVkID8gJzMwJScgOiAnMi42dncnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnN0eWxlLmxlZnQgPSBpc0V4cGFuZGVkID8gJzMwJScgOiAnMi4xNXZ3JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5pdGlhbFgsIGluaXRpYWxZO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFggPSBlLmNsaWVudFggLSBUZXh0RmlsZS5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxZID0gZS5jbGllbnRZIC0gVGV4dEZpbGUub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoVGV4dEZpbGUuc3R5bGUud2lkdGggPT09ICdjYWxjKDEwMCUgLSA0LjN2dyknICYmIFRleHRGaWxlLnN0eWxlLmhlaWdodCA9PT0gJ2NhbGMoMTAwJSAtIDUuMnZ3KScpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5tYWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFkZGluZ1ggPSBjb250YWluZXJSZWN0LndpZHRoICogMC4wMjk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWRkaW5nWSA9IGNvbnRhaW5lclJlY3QuaGVpZ2h0ICogMC4wNTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhYID0gY29udGFpbmVyUmVjdC53aWR0aCAtIFRleHRGaWxlLm9mZnNldFdpZHRoIC0gcGFkZGluZ1g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhZID0gY29udGFpbmVyUmVjdC5oZWlnaHQgLSBUZXh0RmlsZS5vZmZzZXRIZWlnaHQgLSBwYWRkaW5nWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50WCA9IGUuY2xpZW50WCAtIGluaXRpYWxYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRZID0gZS5jbGllbnRZIC0gaW5pdGlhbFk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IE1hdGgubWluKE1hdGgubWF4KHBhZGRpbmdYLCBjdXJyZW50WCksIG1heFgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFkgPSBNYXRoLm1pbihNYXRoLm1heChwYWRkaW5nWSwgY3VycmVudFkpLCBtYXhZKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnN0eWxlLmxlZnQgPSBgJHtjdXJyZW50WH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZS5zdHlsZS50b3AgPSBgJHtjdXJyZW50WX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JbWFnZSA9IGl0ZW1Db24ucXVlcnlTZWxlY3RvcignLkl0ZW0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb25TcmMgPSBpdGVtSW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpY29uSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBcImljb25JbWdEaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBpdGVtQ29uLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbmRvd3NOYXYuYXBwZW5kQ2hpbGQoaWNvbkltZ0Rpdik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGljb25TcmMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGljb25TcmMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZ0Rpdi5hcHBlbmRDaGlsZChpY29uSW1nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUZXh0RmlsZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoVGV4dEZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZXRleHRhci5pbm5lclRleHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShmb2xkZXJOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKFRleHRGaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGV0ZXh0YXIuaW5uZXJUZXh0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZm9sZGVyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDb3VudCgnaWNvbkltZ0RpdicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdWRpbyA9IG5ldyBBdWRpbygnLi9hc3NldHMvU291bmRzL2Vycm9yLm1wMycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW8udm9sdW1lID0gMC41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkFsZXJ0QXBzQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuQWxlcnRBcHNDb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdGFydGJ0bkNvbicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuQWxlcnRBcHNDb24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5BbGVydEFwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLkFsZXJ0QXBzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnQWxlcnRBcHMnKTtcclxuICAgICAgICAgICAgdGhpcy5BbGVydEFwcy5pbm5lclRleHQgPSBcIkFzcGVjdCByYXRpbyBpcyBub3Qgd2l0aGluIHRoZSBhY2NlcHRhYmxlIHJhbmdlOiBcIiArIGFzcGVjdFJhdGlvO1xyXG4gICAgICAgICAgICB0aGlzLkFsZXJ0QXBzQ29uLmFwcGVuZENoaWxkKHRoaXMuQWxlcnRBcHMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5CYWNrYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuQmFja2J0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N0YXJ0YnRuJyk7XHJcbiAgICAgICAgICAgIHRoaXMuQmFja2J0bi5pbm5lclRleHQgPSBcIkdvIEJhY2tcIjtcclxuICAgICAgICAgICAgdGhpcy5BbGVydEFwc0Nvbi5hcHBlbmRDaGlsZCh0aGlzLkJhY2tidG4pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5CYWNrYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi4vXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImNsYXNzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuXHJcbiAgICAgICAgY29uc3QgRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBFcnJvci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Vycm9yJyk7XHJcbiAgICAgICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKEVycm9yKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbmV3SGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnTG9ja1Bhc3NuZXdIZWFkZXInKTtcclxuICAgICAgICBuZXdIZWFkZXIuaW5uZXJUZXh0ID0gXCJFcnJvclwiO1xyXG4gICAgICAgIEVycm9yLmFwcGVuZENoaWxkKG5ld0hlYWRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0hlYWRlckV4aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuZXdIZWFkZXJFeGl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnTG9ja1Bhc3NuZXdIZWFkZXJFeGl0Jyk7XHJcbiAgICAgICAgbmV3SGVhZGVyRXhpdC5pbm5lclRleHQgPSAn4pyVJztcclxuICAgICAgICBuZXdIZWFkZXIuYXBwZW5kQ2hpbGQobmV3SGVhZGVyRXhpdCk7XHJcblxyXG4gICAgICAgIG5ld0hlYWRlckV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEVycm9yLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpbml0aWFsWCwgaW5pdGlhbFk7XHJcblxyXG4gICAgICAgIG5ld0hlYWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMubWFpbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgaW5pdGlhbFggPSBlLmNsaWVudFggLSBFcnJvci5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICBpbml0aWFsWSA9IGUuY2xpZW50WSAtIEVycm9yLm9mZnNldFRvcDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLm1haW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYWRkaW5nWCA9IGNvbnRhaW5lclJlY3Qud2lkdGggKiAwLjAyOTsgLy8gMi40JSBvZiBjb250YWluZXIgd2lkdGhcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZGRpbmdZID0gY29udGFpbmVyUmVjdC5oZWlnaHQgKiAwLjA1NDsgLy8gMy40JSBvZiBjb250YWluZXIgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhYID0gY29udGFpbmVyUmVjdC53aWR0aCAtIEVycm9yLm9mZnNldFdpZHRoIC0gcGFkZGluZ1g7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhZID0gY29udGFpbmVyUmVjdC5oZWlnaHQgLSBFcnJvci5vZmZzZXRIZWlnaHQgLSBwYWRkaW5nWTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50WCA9IGUuY2xpZW50WCAtIGluaXRpYWxYO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRZID0gZS5jbGllbnRZIC0gaW5pdGlhbFk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50WCA9IE1hdGgubWluKE1hdGgubWF4KHBhZGRpbmdYLCBjdXJyZW50WCksIG1heFgpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFkgPSBNYXRoLm1pbihNYXRoLm1heChwYWRkaW5nWSwgY3VycmVudFkpLCBtYXhZKTtcclxuICAgICAgICAgICAgICAgIEVycm9yLnN0eWxlLmxlZnQgPSBgJHtjdXJyZW50WH1weGA7XHJcbiAgICAgICAgICAgICAgICBFcnJvci5zdHlsZS50b3AgPSBgJHtjdXJyZW50WX1weGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcclxuICAgICAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBlcnJvcmluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlcnJvcmluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdlcnJvcmluZm8nKTtcclxuICAgICAgICBFcnJvci5hcHBlbmRDaGlsZChlcnJvcmluZm8pO1xyXG5cclxuICAgICAgICBjb25zdCBFcnJvckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBFcnJvckljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdFcnJvckljb24nKTtcclxuICAgICAgICBFcnJvckljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvaW1ncy9lcnJvci5wbmcnKTtcclxuICAgICAgICBlcnJvcmluZm8uYXBwZW5kQ2hpbGQoRXJyb3JJY29uKTtcclxuXHJcbiAgICAgICAgY29uc3QgRXJyb3J0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgRXJyb3J0ZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnRXJyb3J0ZXh0Jyk7XHJcbiAgICAgICAgRXJyb3J0ZXh0LmlubmVyVGV4dCA9IFwid2FybmluZyEsIGNvbXB1dGVyIG1lbW9yeSBpcyBmdWxsLCB1c2luZyB1bmRlciAzMCBpdGVtcyBhdCBhIHRpbWUgaXMgcmVjb21tZW5kZWQuXCI7XHJcbiAgICAgICAgZXJyb3JpbmZvLmFwcGVuZENoaWxkKEVycm9ydGV4dCk7XHJcblxyXG4gICAgICAgIGNvbnN0IEVycm9yT2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBFcnJvck9rLmlubmVyVGV4dCA9IFwib2theVwiO1xyXG4gICAgICAgIEVycm9yLmFwcGVuZENoaWxkKEVycm9yT2spO1xyXG4gICAgICAgIEVycm9yT2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEVycm9yLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3I7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9SZXZhbXBlZC1YM3ExYS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbmh0bWwge1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiBhcXVhIHJnYmEoMSwgMSwgNDMsIDAuNTIxKTtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuaHRtbCBib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5odG1sIGJvZHkgLnN0YXJ0YnRuQ29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZWYzZmE7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcbiAgei1pbmRleDogMTE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmh0bWwgYm9keSAuc3RhcnRidG5Db24gLnN0YXJ0YnRuIHtcXG4gIHRleHQtd3JhcDogbm93cmFwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMTB2dztcXG4gIGNvbG9yOiAjNGVmM2ZhO1xcbiAgcGFkZGluZzogMXZ3IDEwdnc7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6ICM0ZWYzZmEgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuaHRtbCBib2R5IC5zdGFydGJ0bkNvbiAuc3RhcnRidG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlZjNmYTtcXG4gIGNvbG9yOiAjMTExMTExO1xcbn1cXG5odG1sIGJvZHkgLnN0YXJ0YnRuQ29uIC5BbGVydEFwcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBmb250LXNpemU6IDZ2dztcXG4gIGNvbG9yOiAjNGVmM2ZhO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5odG1sIGJvZHkgdmlkZW8ge1xcbiAgei1pbmRleDogMTA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xcbiAgaHRtbCBib2R5IHZpZGVvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgaHRtbCBib2R5IHZpZGVvIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICBodG1sIGJvZHkgdmlkZW8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG5odG1sIGJvZHkgbWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMC41dncpO1xcbiAgd2lkdGg6IDc1dnc7XFxuICBoZWlnaHQ6IDQ5LjUzNzY0ODYxMjl2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogNzV2dztcXG4gIGhlaWdodDogNDkuNTM3NjQ4NjEyOXZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5JdGVtQ29udGFpbmVyIHtcXG4gIHdpZHRoOiA5NC40JTtcXG4gIGhlaWdodDogOTMuMiU7XFxuICBtYXgtaGVpZ2h0OiA4OS42JTtcXG4gIG1heC13aWR0aDogOTQuNCU7XFxuICB6LWluZGV4OiAxO1xcbiAgbWFyZ2luOiAzLjQlIDIuOSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkl0ZW1Db250YWluZXIgLkl0ZW1Db24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDUuMTY2NjY2NjY2NyU7XFxuICBoZWlnaHQ6IDguMTU1NTU1NTU1NiU7XFxuICBtYXJnaW46IDAuNzUlO1xcbiAgcGFkZGluZzogMDtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuSXRlbUNvbnRhaW5lciAuSXRlbUNvbiAuSXRlbSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiA3NSU7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkl0ZW1Db250YWluZXIgLkl0ZW1Db24gLkl0ZW10ZXh0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDAuNnZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDE1JTtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuTG9ja1Bhc3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MCU7XFxuICBsZWZ0OiA0MCU7XFxuICB3aWR0aDogMjB2dztcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogNzB2dztcXG4gIGJvcmRlcjogIzAwOTVmZiAxcHggc29saWQ7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkxvY2tQYXNzIC5Mb2NrUGFzc25ld0hlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBwYWRkaW5nOiAwLjR2dyAwLjh2dztcXG4gIGZvbnQtc2l6ZTogMC44dnc7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkxvY2tQYXNzIC5Mb2NrUGFzc25ld0hlYWRlciAuTG9ja1Bhc3NuZXdIZWFkZXJFeGl0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgZm9udC1zaXplOiAxLjR2dztcXG4gIHBhZGRpbmc6IDAgMC41dnc7XFxuICBtYXJnaW4tdG9wOiAtMC4xOHZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5Mb2NrUGFzcyAubmV3Q29uIHtcXG4gIGhlaWdodDogNHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMGYwO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5Mb2NrUGFzcyAubmV3Q29uIGxhYmVsIHtcXG4gIG1hcmdpbi10b3A6IDAuNXZ3O1xcbiAgZm9udC1zaXplOiAxdnc7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1ib3R0b206IDAuMXZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5Mb2NrUGFzcyAubmV3Q29uIGlucHV0IHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGJvcmRlcjogIzU4NTg1OCAxcHggc29saWQ7XFxuICB3aWR0aDogMTB2dztcXG4gIGhlaWdodDogMS4ydnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuTG9ja1Bhc3MgLm5ld0NvbiBpbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6ICMwMDk2ZmEgMXB4IHNvbGlkO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuTG9ja1Bhc3MgLm5ld0NvbiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogM3Z3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5Mb2NrUGFzcyAubmV3Q29uIGRpdiBidXR0b24ge1xcbiAgbWFyZ2luOiAwIDJ2dztcXG4gIHdpZHRoOiA1dnc7XFxuICBoZWlnaHQ6IDEuMnZ3O1xcbiAgZm9udC1zaXplOiAwLjd2dztcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZmRmO1xcbiAgYm9yZGVyOiAjYjZiNmI2IDFweCBzb2xpZDtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuTG9ja1Bhc3MgLm5ld0NvbiBkaXYgYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlcjogIzMxYThmOCAycHggc29saWQ7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkZpbGVzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNmI2YjY7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNC4zdncpO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1LjJ2dyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIuNnZ3O1xcbiAgbGVmdDogMi4xNXZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5GaWxlcyAuRmlsZXNIZWFkZXIge1xcbiAgaGVpZ2h0OiAyLjV2dztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkZpbGVzIC5GaWxlc0hlYWRlciAuRmlsZXNIZWFkZXJFeGl0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwLjh2dztcXG4gIHRvcDogMC4ydnc7XFxuICBmb250LXNpemU6IDEuMjV2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuRmlsZXMgLkZpbGVzSGVhZGVyIC5GaWxlc0hlYWRlckZpbGwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDMuNXZ3O1xcbiAgdG9wOiAwO1xcbiAgZm9udC1zaXplOiAydnc7XFxuICBtYXJnaW4tdG9wOiAtMC4yNHZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5GaWxlcyAuRmlsZXNIZWFkZXIgLkZpbGVzSGVhZGVybWluaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNi44dnc7XFxuICB0b3A6IDAuM3Z3O1xcbiAgZm9udC1zaXplOiAxdnc7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkZpbGVzIC5GaWxlc0hlYWRlciAuRmlsZXNOYW1lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDAuNXZ3O1xcbiAgdG9wOiAwLjZ2dztcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5UZXh0RmlsZSB7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxuICBzY3JvbGxiYXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNik7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0LjN2dyk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUuMnZ3KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMi42dnc7XFxuICBsZWZ0OiAyLjE1dnc7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLlRleHRGaWxlIC5UZXh0RmlsZUhlYWRlciB7XFxuICBoZWlnaHQ6IDIuNXZ3O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuVGV4dEZpbGUgLlRleHRGaWxlSGVhZGVyIC5UZXh0RmlsZUhlYWRlckV4aXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDAuOHZ3O1xcbiAgdG9wOiAwLjJ2dztcXG4gIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5UZXh0RmlsZSAuVGV4dEZpbGVIZWFkZXIgLlRleHRGaWxlSGVhZGVyRmlsbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMy41dnc7XFxuICB0b3A6IDA7XFxuICBmb250LXNpemU6IDJ2dztcXG4gIG1hcmdpbi10b3A6IC0wLjI0dnc7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLlRleHRGaWxlIC5UZXh0RmlsZUhlYWRlciAuVGV4dEZpbGVIZWFkZXJtaW5pIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA2Ljh2dztcXG4gIHRvcDogMC4zdnc7XFxuICBmb250LXNpemU6IDF2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuVGV4dEZpbGUgLlRleHRGaWxlSGVhZGVyIC5UZXh0RmlsZU5hbWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMC41dnc7XFxuICB0b3A6IDAuNnZ3O1xcbiAgZm9udC1zaXplOiAxdnc7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLlRleHRGaWxlIC5UZXh0RmlsZXRleHRhciB7XFxuICBwYWRkaW5nOiAwLjR2dztcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAwLjh2dyk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjR2dyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAjQm9vdHZpZCB7XFxuICB6LWluZGV4OiA1O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogNDV2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkJhY2tJbWcge1xcbiAgei1pbmRleDogLTk5OTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiBjYWxjKDc1dncgLSA1cHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDQ5LjUzNzY0ODYxMjl2dyAtIDVweCk7XFxufVxcbmh0bWwgYm9keSBtYWluIC53aW5kb3dzTmF2IHtcXG4gIHotaW5kZXg6IC0yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc0NTA5ODAzOTIpO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQuM3Z3KTtcXG4gIGhlaWdodDogMi4zdnc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDIuNnZ3O1xcbiAgbGVmdDogMi4xOHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmh0bWwgYm9keSBtYWluIC53aW5kb3dzTmF2IC5pY29uSW1nRGl2IHtcXG4gIGhlaWdodDogMi4zdnc7XFxuICB3aWR0aDogMi4xOHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmh0bWwgYm9keSBtYWluIC53aW5kb3dzTmF2IC5pY29uSW1nRGl2IGltZyB7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAud2luZG93c05hdiAuaWNvbkltZ0Rpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNDY2KTtcXG59XFxuaHRtbCBib2R5IG1haW4gLndpbmRvd3NOYXYgLldpbmRvd3NJbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDV2dztcXG4gIGhlaWdodDogMi4zdnc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG59XFxuaHRtbCBib2R5IG1haW4gLndpbmRvd3NOYXYgLldpbmRvd3NJbmZvIGRpdiB7XFxuICBmb250LXNpemU6IDF2dztcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuZXJyb3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzOCU7XFxuICBsZWZ0OiAzNyU7XFxuICB3aWR0aDogMjB2dztcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogNzB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYwZjA7XFxuICBib3JkZXI6ICMwMDk1ZmYgMXB4IHNvbGlkO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuZXJyb3IgLkxvY2tQYXNzbmV3SGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIHBhZGRpbmc6IDAuNHZ3IDAuOHZ3O1xcbiAgZm9udC1zaXplOiAwLjh2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLmVycm9yIC5Mb2NrUGFzc25ld0hlYWRlciAuTG9ja1Bhc3NuZXdIZWFkZXJFeGl0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgZm9udC1zaXplOiAxLjR2dztcXG4gIHBhZGRpbmc6IDAgMC41dnc7XFxuICBtYXJnaW4tdG9wOiAtMC4xOHZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuZXJyb3IgLmVycm9yaW5mbyB7XFxuICBoZWlnaHQ6IDR2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuaHRtbCBib2R5IG1haW4gLmVycm9yIC5lcnJvcmluZm8gLkVycm9ySWNvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjV2dztcXG4gIHdpZHRoOiAyLjJ2dztcXG4gIGhlaWdodDogMi4ydnc7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjV2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLmVycm9yIC5lcnJvcmluZm8gLkVycm9ydGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxdnc7XFxuICBwYWRkaW5nOiAxLjV2dyAwO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuZXJyb3IgYnV0dG9uIHtcXG4gIG1hcmdpbjogMCAydnc7XFxuICBtYXJnaW4tYm90dG9tOiAwLjh2dztcXG4gIHdpZHRoOiA2dnc7XFxuICBoZWlnaHQ6IDEuNHZ3O1xcbiAgZm9udC1zaXplOiAwLjd2dztcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlNGU0O1xcbiAgYm9yZGVyOiAjYjZiNmI2IDJweCBzb2xpZDtcXG59XFxuaHRtbCBib2R5IG1haW4gLmVycm9yIGJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXI6ICMzMWE4ZjggMnB4IHNvbGlkO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICBodG1sIGJvZHkgaDEge1xcbiAgICBmb250LXNpemU6IDEydnc7XFxuICAgIG1hcmdpbi1ib3R0b206IDR2dztcXG4gIH1cXG4gIGh0bWwgYm9keSBoNSB7XFxuICAgIGZvbnQtc2l6ZTogMy41dnc7XFxuICAgIHBhZGRpbmc6IDAgMTV2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHZ3O1xcbiAgfVxcbiAgaHRtbCBib2R5IGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHZ3O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIGh0bWwgYm9keSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMTV2dztcXG4gICAgbWFyZ2luLWJvdHRvbTogNXZ3O1xcbiAgfVxcbiAgaHRtbCBib2R5IGg1IHtcXG4gICAgZm9udC1zaXplOiA1dnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCA0dnc7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwdnc7XFxuICB9XFxuICBodG1sIGJvZHkgZGl2IHtcXG4gICAgZm9udC1zaXplOiA4dnc7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Nzcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0UscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFBSjtBQUVJO0VBQ0UseUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFOO0FBRU07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFD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Q0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBNUNaO0FBZ0RRO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQTlDVjtBQWdEVTtFQUNFLHlCQUFBO0FBOUNaO0FBeURJO0VBQ0U7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUF2RE47RUEwREk7SUFDRSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBeEROO0VBMkRJO0lBQ0UsY0FBQTtJQUNBLG1CQUFBO0VBekROO0FBQ0Y7QUE0REk7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQTFETjtFQTZESTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQTNETjtFQThESTtJQUNFLGNBQUE7RUE1RE47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvUmV2YW1wZWQtWDNxMWEudHRmXFxcIik7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXHJcXG4gIHNjcm9sbGJhci1jb2xvcjogYXF1YSByZ2JhKDEsIDEsIDQzLCAwLjUyMSk7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcblxcclxcbiAgICAuc3RhcnRidG5Db24ge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZWYzZmE7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcclxcbiAgICAgIHotaW5kZXg6IDExO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICAgIC5zdGFydGJ0biB7XFxyXFxuICAgICAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEwdnc7XFxyXFxuICAgICAgICBjb2xvcjogIzRlZjNmYTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDF2dyAxMHZ3O1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgYm9yZGVyOiAjNGVmM2ZhIDJweCBzb2xpZDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRlZjNmYTtcXHJcXG4gICAgICAgICAgY29sb3I6ICMxMTExMTE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5BbGVydEFwcyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDIwJTtcXHJcXG4gICAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICAgICBmb250LXNpemU6IDZ2dztcXHJcXG4gICAgICAgIGNvbG9yOiAjNGVmM2ZhO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB2aWRlbyB7XFxyXFxuICAgICAgei1pbmRleDogMTA7XFxyXFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG5cXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87IC8vIE1haW50YWluIGFzcGVjdCByYXRpb1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bzsgLy8gQWxsb3cgdmlkZW8gdG8gYmUgaXRzIG5hdHVyYWwgd2lkdGhcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbWFpbiB7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMC41dncpO1xcclxcbiAgICAgIHdpZHRoOiA3NXZ3O1xcclxcbiAgICAgIGhlaWdodDogY2FsYyg3NXZ3IC8gMS41MTQpO1xcclxcblxcclxcblxcclxcbiAgICAgIC5Db250YWluZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgd2lkdGg6IDc1dnc7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoNzV2dyAvIDEuNTE0KTtcXHJcXG5cXHJcXG4gICAgICAgIC5JdGVtQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDk0LjQlO1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDkzLjIlO1xcclxcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA4OS42JTtcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA5NC40JTtcXHJcXG4gICAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgICAgICAgbWFyZ2luOiAzLjQlIDIuOSU7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gICAgICAgICAgLkl0ZW1Db24ge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMTUgLSAxLjUlKTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoOTMuMiUgLyA5IC0gMi4yJSk7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwLjc1JTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcblxcclxcbiAgICAgICAgICAgIC5JdGVtIHtcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgICBoZWlnaHQ6IDc1JTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLkl0ZW10ZXh0IHtcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNnZ3O1xcclxcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICBoZWlnaHQ6IDE1JTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5Mb2NrUGFzcyB7XFxyXFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgdG9wOiA0MCU7XFxyXFxuICAgICAgICAgIGxlZnQ6IDQwJTtcXHJcXG4gICAgICAgICAgd2lkdGg6IDIwdnc7XFxyXFxuICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgICAgbWF4LXdpZHRoOiA3MHZ3O1xcclxcbiAgICAgICAgICBib3JkZXI6ICMwMDk1ZmYgMXB4IHNvbGlkO1xcclxcblxcclxcbiAgICAgICAgICAuTG9ja1Bhc3NuZXdIZWFkZXIge1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNHZ3IDAuOHZ3O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44dnc7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLkxvY2tQYXNzbmV3SGVhZGVyRXhpdCB7XFxyXFxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40dnc7XFxyXFxuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXZ3O1xcclxcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTAuMTh2dztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgLm5ld0NvbiB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA0dnc7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYwZjA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgbGFiZWwge1xcclxcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41dnc7XFxyXFxuICAgICAgICAgICAgICBmb250LXNpemU6IDF2dztcXHJcXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4xdnc7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgIGJvcmRlcjogIzU4NTg1OCAxcHggc29saWQ7XFxyXFxuICAgICAgICAgICAgICB3aWR0aDogMTB2dztcXHJcXG4gICAgICAgICAgICAgIGhlaWdodDogMS4ydnc7XFxyXFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICMwMDk2ZmEgMXB4IHNvbGlkOyAvLyBDaGFuZ2UgYm9yZGVyIGNvbG9yIG9uIGZvY3VzXFxyXFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7IC8vIFJlbW92ZSBkZWZhdWx0IGZvY3VzIG91dGxpbmVcXHJcXG4gICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgZGl2IHtcXHJcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICBoZWlnaHQ6IDN2dztcXHJcXG5cXHJcXG4gICAgICAgICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAydnc7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA1dnc7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMS4ydnc7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43dnc7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RmZGY7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogI2I2YjZiNiAxcHggc29saWQ7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogIzMxYThmOCAycHggc29saWQ7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5GaWxlcyB7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmI2YjY7XFxyXFxuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0LjN2dyk7XFxyXFxuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNS4ydncpO1xcclxcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgIHRvcDogMi42dnc7XFxyXFxuICAgICAgICAgIGxlZnQ6IDIuMTV2dztcXHJcXG5cXHJcXG4gICAgICAgICAgLkZpbGVzSGVhZGVyIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDIuNXZ3O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuRmlsZXNIZWFkZXJFeGl0IHtcXHJcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgIHJpZ2h0OiAwLjh2dztcXHJcXG4gICAgICAgICAgICAgIHRvcDogMC4ydnc7XFxyXFxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjV2dztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLkZpbGVzSGVhZGVyRmlsbCB7XFxyXFxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICByaWdodDogMy41dnc7XFxyXFxuICAgICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgICBmb250LXNpemU6IDJ2dztcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0wLjI0dnc7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5GaWxlc0hlYWRlcm1pbmkge1xcclxcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgcmlnaHQ6IDYuOHZ3O1xcclxcbiAgICAgICAgICAgICAgdG9wOiAwLjN2dztcXHJcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXZ3O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuRmlsZXNOYW1lIHtcXHJcXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgIGxlZnQ6IDAuNXZ3O1xcclxcbiAgICAgICAgICAgICAgdG9wOiAwLjZ2dztcXHJcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXZ3O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLlRleHRGaWxlIHtcXHJcXG4gICAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcclxcbiAgICAgICAgICBzY3JvbGxiYXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNik7XFxyXFxuICAgICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNC4zdncpO1xcclxcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUuMnZ3KTtcXHJcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICB0b3A6IDIuNnZ3O1xcclxcbiAgICAgICAgICBsZWZ0OiAyLjE1dnc7XFxyXFxuXFxyXFxuICAgICAgICAgIC5UZXh0RmlsZUhlYWRlciB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyLjV2dztcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLlRleHRGaWxlSGVhZGVyRXhpdCB7XFxyXFxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICByaWdodDogMC44dnc7XFxyXFxuICAgICAgICAgICAgICB0b3A6IDAuMnZ3O1xcclxcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1dnc7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5UZXh0RmlsZUhlYWRlckZpbGwge1xcclxcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgcmlnaHQ6IDMuNXZ3O1xcclxcbiAgICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XFxyXFxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMC4yNHZ3O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuVGV4dEZpbGVIZWFkZXJtaW5pIHtcXHJcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgIHJpZ2h0OiA2Ljh2dztcXHJcXG4gICAgICAgICAgICAgIHRvcDogMC4zdnc7XFxyXFxuICAgICAgICAgICAgICBmb250LXNpemU6IDF2dztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLlRleHRGaWxlTmFtZSB7XFxyXFxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICBsZWZ0OiAwLjV2dztcXHJcXG4gICAgICAgICAgICAgIHRvcDogMC42dnc7XFxyXFxuICAgICAgICAgICAgICBmb250LXNpemU6IDF2dztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgLlRleHRGaWxldGV4dGFyIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjR2dztcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDAuOHZ3KTtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjR2dyk7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAjQm9vdHZpZCB7XFxyXFxuICAgICAgICB6LWluZGV4OiA1O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIGhlaWdodDogNDV2dztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLkJhY2tJbWcge1xcclxcbiAgICAgICAgei1pbmRleDogLTk5OTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKDc1dncgLSA1cHgpO1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKCg3NXZ3IC8gMS41MTQpIC0gNXB4KTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLndpbmRvd3NOYXYge1xcclxcbiAgICAgICAgei1pbmRleDogLTI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYmU7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNC4zdncpO1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDcuNXZ3IC0gNS4ydncpO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgYm90dG9tOiAyLjZ2dztcXHJcXG4gICAgICAgIGxlZnQ6IDIuMTh2dztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgLmljb25JbWdEaXYge1xcclxcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoNy41dncgLSA1LjJ2dyk7XFxyXFxuICAgICAgICAgIHdpZHRoOiAyLjE4dnc7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMCk7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNzAlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC40NjYpO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuV2luZG93c0luZm8ge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICB3aWR0aDogNXZ3O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoNy41dncgLSA1LjJ2dyk7XFxyXFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgICByaWdodDogMDtcXHJcXG5cXHJcXG4gICAgICAgICAgZGl2IHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDF2dztcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmVycm9yIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMzglO1xcclxcbiAgICAgICAgbGVmdDogMzclO1xcclxcbiAgICAgICAgd2lkdGg6IDIwdnc7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDcwdnc7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMGYwO1xcclxcbiAgICAgICAgYm9yZGVyOiAjMDA5NWZmIDFweCBzb2xpZDtcXHJcXG5cXHJcXG4gICAgICAgIC5Mb2NrUGFzc25ld0hlYWRlciB7XFxyXFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDAuNHZ3IDAuOHZ3O1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDAuOHZ3O1xcclxcblxcclxcbiAgICAgICAgICAuTG9ja1Bhc3NuZXdIZWFkZXJFeGl0IHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjR2dztcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXZ3O1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0wLjE4dnc7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5lcnJvcmluZm8ge1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDR2dztcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG5cXHJcXG4gICAgICAgICAgLkVycm9ySWNvbiB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41dnc7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDIuMnZ3O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMi4ydnc7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMXZ3O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXZ3O1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIC5FcnJvcnRleHQge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMS41dncgMDtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgbWFyZ2luOiAwIDJ2dztcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC44dnc7XFxyXFxuICAgICAgICAgIHdpZHRoOiA2dnc7XFxyXFxuICAgICAgICAgIGhlaWdodDogMS40dnc7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43dnc7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU0ZTQ7XFxyXFxuICAgICAgICAgIGJvcmRlcjogI2I2YjZiNiAycHggc29saWQ7XFxyXFxuXFxyXFxuICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogIzMxYThmOCAycHggc29saWQ7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcclxcbiAgICAgIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJ2dztcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDR2dztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaDUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzLjV2dztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMTV2dztcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwdnc7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGRpdiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDR2dztcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwdnc7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcbiAgICAgIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTV2dztcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDV2dztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaDUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDR2dztcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwdnc7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGRpdiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDh2dztcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tIFwiLi9Jbml0aWFsaXplXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9zdHlsZS5zY3NzXCI7XHJcblxyXG4vLyAqKiAgSUlGRTogSW1tZWRpYXRlbHkgSW52b2tlZCBGdW5jdGlvbiBFeHByZXNzaW9uICAqL1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgbGV0IGluaXQgPSBuZXcgSW5pdGlhbGl6ZSgpO1xyXG5cclxufSkoKTtcclxuIl0sIm5hbWVzIjpbIlBDIiwiSW5pdGlhbGl6ZSIsIl9jcmVhdGVDbGFzcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXNwZWN0UmF0aW8iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ0b0ZpeGVkIiwiY29uc29sZSIsImxvZyIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyZWwiLCJ0eXBlIiwiaHJlZiIsInRpdGxlIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiU3RhcnRWaWQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJzdGFydGJ0bkNvbiIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJzdGFydGJ0biIsImlubmVyVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2aWRlb1NyYyIsInZpZGVvIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInNldEl0ZW0iLCJkZWZhdWx0IiwiRXJyb3IiLCJib2R5RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtYXRUaW1lIiwiaG91cnMiLCJtaW51dGVzIiwibWVyaWRpZW0iLCJmb3JtYXR0ZWRIb3VycyIsImZvcm1hdHRlZE1pbnV0ZXMiLCJjb25jYXQiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwidXBkYXRlQ291bnQiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJtZWdhQ291bnQiLCJjb3VudCIsImxlbmd0aCIsInVzZXJTZWxlY3QiLCJtYWluIiwiQ29udGFpbmVyIiwiYmFja2dyb3VuZEltYWdlIiwiQmFja0ltZyIsIndpbmRvd3NOYXYiLCJCb290ZWQiLCJCb290dmlkIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmVWaWRlb0lmTm90UGxheWluZyIsInNldFRpbWVvdXQiLCJwYXVzZWQiLCJpdGVtQ29ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbUNvbiIsInpJbmRleCIsIldpbmRvd3NJbmZvIiwid2luZG93c0luZm9UaW1lIiwiY3VycmVudFRpbWUiLCJEYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwid2luZG93c0luZm9EYXRlIiwiY3VycmVudERhdGUiLCJJdGVtQ29udGFpbmVyIiwiaXRlbSIsInRleHQiLCJpdGVtQ29udGFpbmVycyIsImlkIiwiaW5jbHVkZXMiLCJjbGlja2VkSXRlbUlkIiwibmV3RGl2IiwibmV3SGVhZGVyIiwibmV3SGVhZGVyRXhpdCIsImljb25JbWdEaXYiLCJpc0RyYWdnaW5nIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsImUiLCJjb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJjbGllbnRZIiwib2Zmc2V0VG9wIiwicGFkZGluZ1giLCJwYWRkaW5nWSIsIm1heFgiLCJvZmZzZXRXaWR0aCIsIm1heFkiLCJvZmZzZXRIZWlnaHQiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwiTWF0aCIsIm1pbiIsIm1heCIsImxlZnQiLCJ0b3AiLCJuZXdDb24iLCJMb2NrTGFiZWwiLCJMb2NraW5wdXQiLCJMb2NrQnRucyIsIkxvY2tTdWJtaXQiLCJMb2NrRXhpdCIsIml0ZW1JbWFnZSIsImljb25TcmMiLCJnZXRBdHRyaWJ1dGUiLCJpY29uSW1nIiwiZGlzcGxheSIsImF1ZGlvIiwiQXVkaW8iLCJ2b2x1bWUiLCJwbGF5IiwiRmlsZUNvbnRhaW5lcnMiLCJmb2xkZXJOYW1lIiwiRmlsZXMiLCJGaWxlc0hlYWRlciIsIkZpbGVzTmFtZSIsIkZpbGVzSGVhZGVyRmlsbCIsImlzRXhwYW5kZWQiLCJGaWxlc0hlYWRlcm1pbmkiLCJUeHRGaWxlIiwiVGV4dEZpbGUiLCJUZXh0RmlsZUhlYWRlciIsIlRleHRGaWxOYW1lIiwiVGV4dEZpbGVIZWFkZXJGaWxsIiwiVGV4dEZpbGVIZWFkZXJtaW5pIiwiVGV4dEZpbGV0ZXh0YXIiLCJzYXZlZENvbnRlbnQiLCJsb2NhbFN0b3JhZ2UiLCJ2YWx1ZSIsInRleHRDb250ZW50IiwiQWxlcnRBcHNDb24iLCJBbGVydEFwcyIsIkJhY2tidG4iLCJsb2NhdGlvbiIsImVycm9yaW5mbyIsIkVycm9ySWNvbiIsIkVycm9ydGV4dCIsIkVycm9yT2siLCJpbml0Il0sInNvdXJjZVJvb3QiOiIifQ==