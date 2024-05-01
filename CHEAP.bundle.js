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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"MyFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: normal;\n  font-style: normal;\n}\nhtml {\n  scrollbar-width: thin;\n  scrollbar-color: aqua rgba(1, 1, 43, 0.521);\n  scroll-behavior: smooth;\n  overflow: hidden;\n}\nhtml body {\n  position: relative;\n  margin: 0;\n  background-color: black;\n}\nhtml body .startbtnCon {\n  background-color: #4ef3fa;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background-color: #111111;\n  z-index: 11;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\nhtml body .startbtnCon .startbtn {\n  text-wrap: nowrap;\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 10vw;\n  color: #4ef3fa;\n  padding: 1vw 10vw;\n  width: auto;\n  height: auto;\n  background-color: #111111;\n  text-align: center;\n  border: #4ef3fa 2px solid;\n  border-radius: 10px;\n}\nhtml body .startbtnCon .startbtn:hover {\n  background-color: #4ef3fa;\n  color: #111111;\n}\nhtml body .startbtnCon .AlertAps {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n  font-size: 6vw;\n  color: #4ef3fa;\n  text-align: center;\n}\nhtml body video {\n  z-index: 10;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 1400px) {\n  html body video {\n    width: 100%;\n    height: auto;\n  }\n}\n@media (max-width: 1200px) {\n  html body video {\n    width: auto;\n    height: 100%;\n  }\n}\n@media (max-width: 800px) {\n  html body video {\n    width: 100%;\n    height: auto;\n  }\n}\nhtml body main {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100vh;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, 1vw);\n  width: 75vw;\n  height: 49.5376486129vw;\n}\nhtml body main .Container {\n  background-size: 100%;\n  background-position: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 75vw;\n  height: 49.5376486129vw;\n}\nhtml body main .Container .ItemContainer {\n  width: 94.4%;\n  height: 93.2%;\n  max-height: 89.6%;\n  max-width: 94.4%;\n  z-index: 1;\n  margin: 3.4% 2.9%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: flex-start;\n}\nhtml body main .Container .ItemContainer .ItemCon {\n  cursor: pointer;\n  width: 5.1666666667%;\n  height: 8.1555555556%;\n  margin: 0.75%;\n  padding: 0;\n}\nhtml body main .Container .ItemContainer .ItemCon .Item {\n  margin: 0;\n  padding: 0;\n  height: 75%;\n}\nhtml body main .Container .ItemContainer .ItemCon .Itemtext {\n  margin: 0;\n  padding: 0;\n  font-size: 0.6vw;\n  text-align: center;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  height: 15%;\n}\nhtml body main .Container .LockPass {\n  position: absolute;\n  top: 40%;\n  left: 40%;\n  width: 20vw;\n  height: auto;\n  max-width: 70vw;\n  border: #0095ff 1px solid;\n}\nhtml body main .Container .LockPass .LockPassnewHeader {\n  position: relative;\n  height: auto;\n  background-color: #fff;\n  text-align: start;\n  font-family: Arial, Helvetica, sans-serif;\n  color: rgb(0, 0, 0);\n  padding: 0.4vw 0.8vw;\n  font-size: 0.8vw;\n}\nhtml body main .Container .LockPass .LockPassnewHeader .LockPassnewHeaderExit {\n  cursor: pointer;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 1.4vw;\n  padding: 0 0.5vw;\n  margin-top: -0.18vw;\n}\nhtml body main .Container .LockPass .newCon {\n  height: 4vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  background-color: #eff0f0;\n}\nhtml body main .Container .LockPass .newCon label {\n  margin-top: 0.5vw;\n  font-size: 1vw;\n  font-family: Arial, Helvetica, sans-serif;\n  margin-bottom: 0.1vw;\n}\nhtml body main .Container .LockPass .newCon input {\n  margin-top: 0.5rem;\n  border: #585858 1px solid;\n  width: 10vw;\n  height: 1.2vw;\n  background-color: white;\n}\nhtml body main .Container .LockPass .newCon input:focus {\n  border: #0096fa 1px solid;\n  outline: none;\n}\nhtml body main .Container .LockPass .newCon div {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n  height: 3vw;\n}\nhtml body main .Container .LockPass .newCon div button {\n  margin: 0 2vw;\n  width: 5vw;\n  height: 1.2vw;\n  font-size: 0.7vw;\n  border-radius: 0;\n  background-color: #dcdfdf;\n  border: #b6b6b6 1px solid;\n}\nhtml body main .Container .LockPass .newCon div button:hover {\n  border: #31a8f8 2px solid;\n}\nhtml body main .Container .Files {\n  background-color: #b6b6b6;\n  width: calc(100% - 4.3vw);\n  height: calc(100% - 5.2vw);\n  position: absolute;\n  top: 2.6vw;\n  left: 2.15vw;\n}\nhtml body main .Container .Files .FilesHeader {\n  height: 2.5vw;\n  width: 100%;\n  background-color: white;\n  position: relative;\n}\nhtml body main .Container .Files .FilesHeader .FilesHeaderExit {\n  cursor: pointer;\n  position: absolute;\n  right: 0.8vw;\n  top: 0.2vw;\n  font-size: 1.25vw;\n}\nhtml body main .Container .Files .FilesHeader .FilesHeaderFill {\n  cursor: pointer;\n  position: absolute;\n  right: 3.5vw;\n  top: 0;\n  font-size: 2vw;\n  margin-top: -0.24vw;\n}\nhtml body main .Container .Files .FilesHeader .FilesHeadermini {\n  cursor: pointer;\n  position: absolute;\n  right: 6.8vw;\n  top: 0.3vw;\n  font-size: 1vw;\n}\nhtml body main .Container .Files .FilesHeader .FilesName {\n  position: absolute;\n  left: 0.5vw;\n  top: 0.6vw;\n  font-size: 1vw;\n}\nhtml body main .Container .TextFile {\n  scrollbar-width: thin;\n  scrollbar-color: rgb(255, 255, 255) rgba(200, 200, 200, 0.6);\n  scroll-behavior: smooth;\n  width: calc(100% - 4.3vw);\n  height: calc(100% - 5.2vw);\n  position: absolute;\n  top: 2.6vw;\n  left: 2.15vw;\n}\nhtml body main .Container .TextFile .TextFileHeader {\n  height: 2.5vw;\n  width: 100%;\n  background-color: white;\n  position: relative;\n}\nhtml body main .Container .TextFile .TextFileHeader .TextFileHeaderExit {\n  cursor: pointer;\n  position: absolute;\n  right: 0.8vw;\n  top: 0.2vw;\n  font-size: 1.25vw;\n}\nhtml body main .Container .TextFile .TextFileHeader .TextFileHeaderFill {\n  cursor: pointer;\n  position: absolute;\n  right: 3.5vw;\n  top: 0;\n  font-size: 2vw;\n  margin-top: -0.24vw;\n}\nhtml body main .Container .TextFile .TextFileHeader .TextFileHeadermini {\n  cursor: pointer;\n  position: absolute;\n  right: 6.8vw;\n  top: 0.3vw;\n  font-size: 1vw;\n}\nhtml body main .Container .TextFile .TextFileHeader .TextFileName {\n  position: absolute;\n  left: 0.5vw;\n  top: 0.6vw;\n  font-size: 1vw;\n}\nhtml body main .Container .TextFile .TextFiletextar {\n  padding: 0.4vw;\n  margin: 0;\n  width: calc(100% - 0.8vw);\n  border: none;\n  outline: none;\n  resize: none;\n  height: calc(100% - 3.4vw);\n  background-color: #ebebeb;\n}\nhtml body main #Bootvid {\n  z-index: 5;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: auto;\n  width: auto;\n  height: 45vw;\n}\nhtml body main .BackImg {\n  z-index: -999;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: calc(75vw - 5px);\n  height: calc(49.5376486129vw - 5px);\n}\nhtml body main .windowsNav {\n  z-index: -2;\n  background-color: rgba(0, 0, 0, 0.7450980392);\n  width: calc(100% - 4.3vw);\n  height: 2.3vw;\n  position: absolute;\n  bottom: 2.6vw;\n  left: 2.18vw;\n  display: flex;\n  align-items: center;\n}\nhtml body main .windowsNav .iconImgDiv {\n  height: 2.3vw;\n  width: 2.18vw;\n  background-color: rgba(153, 153, 153, 0);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nhtml body main .windowsNav .iconImgDiv img {\n  height: 70%;\n  width: auto;\n}\nhtml body main .windowsNav .iconImgDiv:hover {\n  background-color: rgba(153, 153, 153, 0.466);\n}\nhtml body main .windowsNav .WindowsInfo {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n  width: 5vw;\n  height: 2.3vw;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\nhtml body main .windowsNav .WindowsInfo div {\n  font-size: 1vw;\n  font-family: Arial, Helvetica, sans-serif;\n  color: white;\n}\nhtml body main .error {\n  position: absolute;\n  top: 38%;\n  left: 37%;\n  width: 20vw;\n  height: auto;\n  max-width: 70vw;\n  background-color: #eff0f0;\n  border: #0095ff 1px solid;\n}\nhtml body main .error .LockPassnewHeader {\n  position: relative;\n  height: auto;\n  background-color: #fff;\n  text-align: start;\n  font-family: Arial, Helvetica, sans-serif;\n  color: rgb(0, 0, 0);\n  padding: 0.4vw 0.8vw;\n  font-size: 0.8vw;\n}\nhtml body main .error .LockPassnewHeader .LockPassnewHeaderExit {\n  cursor: pointer;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 1.4vw;\n  padding: 0 0.5vw;\n  margin-top: -0.18vw;\n}\nhtml body main .error .errorinfo {\n  height: 4vw;\n  display: flex;\n  justify-content: center;\n  height: auto;\n}\nhtml body main .error .errorinfo .ErrorIcon {\n  margin-top: 0.5vw;\n  width: 2.2vw;\n  height: 2.2vw;\n  padding: 1vw;\n  padding-right: 0.5vw;\n}\nhtml body main .error .errorinfo .Errortext {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n  font-size: 1vw;\n  padding: 1.5vw 0;\n}\nhtml body main .error button {\n  margin: 0 2vw;\n  margin-bottom: 0.8vw;\n  width: 6vw;\n  height: 1.4vw;\n  font-size: 0.7vw;\n  border-radius: 0;\n  background-color: #e8e4e4;\n  border: #b6b6b6 2px solid;\n}\nhtml body main .error button:hover {\n  border: #31a8f8 2px solid;\n}\n@media (max-width: 1000px) {\n  html body h1 {\n    font-size: 12vw;\n    margin-bottom: 4vw;\n  }\n  html body h5 {\n    font-size: 3.5vw;\n    padding: 0 15vw;\n    text-align: center;\n    margin-bottom: 20vw;\n  }\n  html body div {\n    font-size: 4vw;\n    margin-bottom: 20vw;\n  }\n}\n@media (max-width: 700px) {\n  html body h1 {\n    font-size: 15vw;\n    margin-bottom: 5vw;\n  }\n  html body h5 {\n    font-size: 5vw;\n    text-align: center;\n    padding: 0 4vw;\n    margin-bottom: 40vw;\n  }\n  html body div {\n    font-size: 8vw;\n  }\n}", "",{"version":3,"sources":["webpack://./css/style.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: \"MyFont\";\r\n  src: url(\"../assets/fonts/Revamped-X3q1a.ttf\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\nhtml {\r\n  scrollbar-width: thin;\r\n  scrollbar-color: aqua rgba(1, 1, 43, 0.521);\r\n  scroll-behavior: smooth;\r\n  overflow: hidden;\r\n\r\n  body {\r\n    position: relative;\r\n    margin: 0;\r\n    background-color: black;\r\n\r\n    .startbtnCon {\r\n      background-color: #4ef3fa;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n      height: 100%;\r\n      position: fixed;\r\n      background-color: #111111;\r\n      z-index: 11;\r\n      justify-content: center;\r\n      align-items: center;\r\n      text-align: center;\r\n\r\n      .startbtn {\r\n        text-wrap: nowrap;\r\n        cursor: pointer;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        font-size: 10vw;\r\n        color: #4ef3fa;\r\n        padding: 1vw 10vw;\r\n        width: auto;\r\n        height: auto;\r\n        background-color: #111111;\r\n        text-align: center;\r\n        border: #4ef3fa 2px solid;\r\n        border-radius: 10px;\r\n\r\n        &:hover {\r\n          background-color: #4ef3fa;\r\n          color: #111111;\r\n        }\r\n      }\r\n\r\n      .AlertAps {\r\n        position: absolute;\r\n        top: 20%;\r\n        left: 50%;\r\n        width: 100%;\r\n        transform: translate(-50%, -50%);\r\n        font-size: 6vw;\r\n        color: #4ef3fa;\r\n        text-align: center;\r\n      }\r\n    }\r\n\r\n    video {\r\n      z-index: 10;\r\n      position: fixed;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: contain;\r\n\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n\r\n      @media (max-width: 1400px) {\r\n        width: 100%;\r\n        height: auto; // Maintain aspect ratio\r\n      }\r\n\r\n      @media (max-width: 1200px) {\r\n        width: auto; // Allow video to be its natural width\r\n        height: 100%;\r\n      }\r\n\r\n      @media (max-width: 800px) {\r\n        width: 100%;\r\n        height: auto;\r\n      }\r\n    }\r\n\r\n    main {\r\n      position: relative;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      text-align: center;\r\n      height: 100vh;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, 1vw);\r\n      width: 75vw;\r\n      height: calc(75vw / 1.514);\r\n\r\n      .Container {\r\n        background-size: 100%;\r\n        background-position: center;\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        margin: auto;\r\n        width: 75vw;\r\n        height: calc(75vw / 1.514);\r\n\r\n        .ItemContainer {\r\n          width: 94.4%;\r\n          height: 93.2%;\r\n          max-height: 89.6%;\r\n          max-width: 94.4%;\r\n          z-index: 1;\r\n          margin: 3.4% 2.9%;\r\n          display: flex;\r\n          flex-direction: column;\r\n          flex-wrap: wrap;\r\n          align-content: flex-start;\r\n\r\n          .ItemCon {\r\n            cursor: pointer;\r\n            width: calc(100% / 15 - 1.5%);\r\n            height: calc(93.2% / 9 - 2.2%);\r\n            margin: 0.75%;\r\n            padding: 0;\r\n\r\n            .Item {\r\n              margin: 0;\r\n              padding: 0;\r\n              height: 75%;\r\n            }\r\n\r\n            .Itemtext {\r\n              margin: 0;\r\n              padding: 0;\r\n              font-size: 0.6vw;\r\n              text-align: center;\r\n              color: white;\r\n              font-family: Arial, Helvetica, sans-serif;\r\n              height: 15%;\r\n            }\r\n          }\r\n        }\r\n\r\n        .LockPass {\r\n          position: absolute;\r\n          top: 40%;\r\n          left: 40%;\r\n          width: 20vw;\r\n          height: auto;\r\n          max-width: 70vw;\r\n          border: #0095ff 1px solid;\r\n\r\n          .LockPassnewHeader {\r\n            position: relative;\r\n            height: auto;\r\n            background-color: #fff;\r\n            text-align: start;\r\n            font-family: Arial, Helvetica, sans-serif;\r\n            color: rgb(0, 0, 0);\r\n            padding: 0.4vw 0.8vw;\r\n            font-size: 0.8vw;\r\n\r\n            .LockPassnewHeaderExit {\r\n              cursor: pointer;\r\n              height: 100%;\r\n              position: absolute;\r\n              right: 0;\r\n              top: 0;\r\n              font-size: 1.4vw;\r\n              padding: 0 0.5vw;\r\n              margin-top: -0.18vw;\r\n            }\r\n          }\r\n\r\n          .newCon {\r\n            height: 4vw;\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n            height: auto;\r\n            background-color: #eff0f0;\r\n\r\n            label {\r\n              margin-top: 0.5vw;\r\n              font-size: 1vw;\r\n              font-family: Arial, Helvetica, sans-serif;\r\n              margin-bottom: 0.1vw;\r\n            }\r\n\r\n            input {\r\n              margin-top: 0.5rem;\r\n              border: #585858 1px solid;\r\n              width: 10vw;\r\n              height: 1.2vw;\r\n              background-color: white;\r\n\r\n              &:focus {\r\n                border: #0096fa 1px solid; // Change border color on focus\r\n                outline: none; // Remove default focus outline\r\n              }\r\n            }\r\n\r\n            div {\r\n              display: flex;\r\n              justify-content: space-around;\r\n              align-items: center;\r\n              text-align: center;\r\n              height: 3vw;\r\n\r\n              button {\r\n                margin: 0 2vw;\r\n                width: 5vw;\r\n                height: 1.2vw;\r\n                font-size: 0.7vw;\r\n                border-radius: 0;\r\n                background-color: #dcdfdf;\r\n                border: #b6b6b6 1px solid;\r\n\r\n                &:hover {\r\n                  border: #31a8f8 2px solid;\r\n                }\r\n              }\r\n            }\r\n          }\r\n\r\n        }\r\n\r\n        .Files {\r\n          background-color: #b6b6b6;\r\n          width: calc(100% - 4.3vw);\r\n          height: calc(100% - 5.2vw);\r\n          position: absolute;\r\n          top: 2.6vw;\r\n          left: 2.15vw;\r\n\r\n          .FilesHeader {\r\n            height: 2.5vw;\r\n            width: 100%;\r\n            background-color: white;\r\n            position: relative;\r\n\r\n            .FilesHeaderExit {\r\n              cursor: pointer;\r\n              position: absolute;\r\n              right: 0.8vw;\r\n              top: 0.2vw;\r\n              font-size: 1.25vw;\r\n            }\r\n\r\n            .FilesHeaderFill {\r\n              cursor: pointer;\r\n              position: absolute;\r\n              right: 3.5vw;\r\n              top: 0;\r\n              font-size: 2vw;\r\n              margin-top: -0.24vw;\r\n            }\r\n\r\n            .FilesHeadermini {\r\n              cursor: pointer;\r\n              position: absolute;\r\n              right: 6.8vw;\r\n              top: 0.3vw;\r\n              font-size: 1vw;\r\n            }\r\n\r\n            .FilesName {\r\n              position: absolute;\r\n              left: 0.5vw;\r\n              top: 0.6vw;\r\n              font-size: 1vw;\r\n            }\r\n          }\r\n        }\r\n\r\n        .TextFile {\r\n          scrollbar-width: thin;\r\n          scrollbar-color: rgb(255, 255, 255) rgba(200, 200, 200, 0.6);\r\n          scroll-behavior: smooth;\r\n          width: calc(100% - 4.3vw);\r\n          height: calc(100% - 5.2vw);\r\n          position: absolute;\r\n          top: 2.6vw;\r\n          left: 2.15vw;\r\n\r\n          .TextFileHeader {\r\n            height: 2.5vw;\r\n            width: 100%;\r\n            background-color: white;\r\n            position: relative;\r\n\r\n            .TextFileHeaderExit {\r\n              cursor: pointer;\r\n              position: absolute;\r\n              right: 0.8vw;\r\n              top: 0.2vw;\r\n              font-size: 1.25vw;\r\n            }\r\n\r\n            .TextFileHeaderFill {\r\n              cursor: pointer;\r\n              position: absolute;\r\n              right: 3.5vw;\r\n              top: 0;\r\n              font-size: 2vw;\r\n              margin-top: -0.24vw;\r\n            }\r\n\r\n            .TextFileHeadermini {\r\n              cursor: pointer;\r\n              position: absolute;\r\n              right: 6.8vw;\r\n              top: 0.3vw;\r\n              font-size: 1vw;\r\n            }\r\n\r\n            .TextFileName {\r\n              position: absolute;\r\n              left: 0.5vw;\r\n              top: 0.6vw;\r\n              font-size: 1vw;\r\n            }\r\n          }\r\n\r\n          .TextFiletextar {\r\n            padding: 0.4vw;\r\n            margin: 0;\r\n            width: calc(100% - 0.8vw);\r\n            border: none;\r\n            outline: none;\r\n            resize: none;\r\n            height: calc(100% - 3.4vw);\r\n            background-color: #ebebeb;\r\n          }\r\n        }\r\n      }\r\n\r\n      #Bootvid {\r\n        z-index: 5;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        margin: auto;\r\n        width: auto;\r\n        height: 45vw;\r\n      }\r\n\r\n      .BackImg {\r\n        z-index: -999;\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        margin: auto;\r\n        width: calc(75vw - 5px);\r\n        height: calc((75vw / 1.514) - 5px);\r\n      }\r\n\r\n      .windowsNav {\r\n        z-index: -2;\r\n        background-color: #000000be;\r\n        width: calc(100% - 4.3vw);\r\n        height: calc(7.5vw - 5.2vw);\r\n        position: absolute;\r\n        bottom: 2.6vw;\r\n        left: 2.18vw;\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        .iconImgDiv {\r\n          height: calc(7.5vw - 5.2vw);\r\n          width: 2.18vw;\r\n          background-color: rgba(153, 153, 153, 0);\r\n          display: flex;\r\n          align-items: center;\r\n          justify-content: center;\r\n\r\n          img {\r\n            height: 70%;\r\n            width: auto;\r\n          }\r\n\r\n          &:hover {\r\n            background-color: rgba(153, 153, 153, 0.466);\r\n          }\r\n        }\r\n\r\n        .WindowsInfo {\r\n          display: flex;\r\n          flex-direction: column;\r\n          justify-content: space-around;\r\n          align-items: center;\r\n          text-align: center;\r\n          width: 5vw;\r\n          height: calc(7.5vw - 5.2vw);\r\n          position: absolute;\r\n          bottom: 0;\r\n          right: 0;\r\n\r\n          div {\r\n            font-size: 1vw;\r\n            font-family: Arial, Helvetica, sans-serif;\r\n            color: white;\r\n          }\r\n        }\r\n      }\r\n\r\n      .error {\r\n        position: absolute;\r\n        top: 38%;\r\n        left: 37%;\r\n        width: 20vw;\r\n        height: auto;\r\n        max-width: 70vw;\r\n        background-color: #eff0f0;\r\n        border: #0095ff 1px solid;\r\n\r\n        .LockPassnewHeader {\r\n          position: relative;\r\n          height: auto;\r\n          background-color: #fff;\r\n          text-align: start;\r\n          font-family: Arial, Helvetica, sans-serif;\r\n          color: rgb(0, 0, 0);\r\n          padding: 0.4vw 0.8vw;\r\n          font-size: 0.8vw;\r\n\r\n          .LockPassnewHeaderExit {\r\n            cursor: pointer;\r\n            height: 100%;\r\n            position: absolute;\r\n            right: 0;\r\n            top: 0;\r\n            font-size: 1.4vw;\r\n            padding: 0 0.5vw;\r\n            margin-top: -0.18vw;\r\n          }\r\n        }\r\n\r\n        .errorinfo {\r\n          height: 4vw;\r\n          display: flex;\r\n          justify-content: center;\r\n          height: auto;\r\n\r\n          .ErrorIcon {\r\n            margin-top: 0.5vw;\r\n            width: 2.2vw;\r\n            height: 2.2vw;\r\n            padding: 1vw;\r\n            padding-right: 0.5vw;\r\n          }\r\n\r\n          .Errortext {\r\n            display: flex;\r\n            justify-content: space-around;\r\n            align-items: center;\r\n            text-align: center;\r\n            font-size: 1vw;\r\n            padding: 1.5vw 0;\r\n          }\r\n        }\r\n\r\n        button {\r\n          margin: 0 2vw;\r\n          margin-bottom: 0.8vw;\r\n          width: 6vw;\r\n          height: 1.4vw;\r\n          font-size: 0.7vw;\r\n          border-radius: 0;\r\n          background-color: #e8e4e4;\r\n          border: #b6b6b6 2px solid;\r\n\r\n          &:hover {\r\n            border: #31a8f8 2px solid;\r\n          }\r\n        }\r\n\r\n      }\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n    @media (max-width: 1000px) {\r\n      h1 {\r\n        font-size: 12vw;\r\n        margin-bottom: 4vw;\r\n      }\r\n\r\n      h5 {\r\n        font-size: 3.5vw;\r\n        padding: 0 15vw;\r\n        text-align: center;\r\n        margin-bottom: 20vw;\r\n      }\r\n\r\n      div {\r\n        font-size: 4vw;\r\n        margin-bottom: 20vw;\r\n      }\r\n    }\r\n\r\n    @media (max-width: 700px) {\r\n      h1 {\r\n        font-size: 15vw;\r\n        margin-bottom: 5vw;\r\n      }\r\n\r\n      h5 {\r\n        font-size: 5vw;\r\n        text-align: center;\r\n        padding: 0 4vw;\r\n        margin-bottom: 40vw;\r\n      }\r\n\r\n      div {\r\n        font-size: 8vw;\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0scUNBQXFDLDhCQUE4Qix1REFBdUQsMEJBQTBCLHlCQUF5QixLQUFLLGNBQWMsNEJBQTRCLGtEQUFrRCw4QkFBOEIsdUJBQXVCLGdCQUFnQiwyQkFBMkIsa0JBQWtCLGdDQUFnQywwQkFBMEIsb0NBQW9DLGlCQUFpQixrQkFBa0Isc0JBQXNCLHVCQUF1QiwwQkFBMEIsb0NBQW9DLHNCQUFzQixrQ0FBa0MsOEJBQThCLDZCQUE2Qix5QkFBeUIsOEJBQThCLDRCQUE0QiwrQkFBK0IscUJBQXFCLHNCQUFzQiw2Q0FBNkMsNEJBQTRCLDJCQUEyQiw4QkFBOEIsd0JBQXdCLHlCQUF5QixzQ0FBc0MsK0JBQStCLHNDQUFzQyxnQ0FBZ0MseUJBQXlCLHdDQUF3Qyw2QkFBNkIsYUFBYSxXQUFXLHlCQUF5QiwrQkFBK0IscUJBQXFCLHNCQUFzQix3QkFBd0IsNkNBQTZDLDJCQUEyQiwyQkFBMkIsK0JBQStCLFdBQVcsU0FBUyxtQkFBbUIsc0JBQXNCLDBCQUEwQixtQkFBbUIsb0JBQW9CLDJDQUEyQyxzQkFBc0IsdUJBQXVCLDhCQUE4Qiw0QkFBNEIsa0NBQWtDLDhCQUE4QiwwQ0FBMEMsd0JBQXdCLDBCQUEwQixtQ0FBbUMsMENBQTBDLHlCQUF5QiwrREFBK0QsV0FBVyx5Q0FBeUMsd0JBQXdCLHlCQUF5QixXQUFXLFNBQVMsa0JBQWtCLDZCQUE2Qix3QkFBd0Isa0NBQWtDLDhCQUE4Qiw2QkFBNkIsd0JBQXdCLG1CQUFtQixvQkFBb0IsMENBQTBDLHNCQUFzQixxQ0FBcUMsMEJBQTBCLGtDQUFrQyx3Q0FBd0MsK0JBQStCLG1CQUFtQixzQkFBc0Isb0JBQW9CLHFCQUFxQix5QkFBeUIsd0JBQXdCLHVDQUF1QyxnQ0FBZ0MsMkJBQTJCLDRCQUE0QixnQ0FBZ0MsK0JBQStCLHlCQUF5QixnQ0FBZ0MsNEJBQTRCLHFDQUFxQyw4QkFBOEIsd0NBQXdDLDRCQUE0QixnQ0FBZ0MsOENBQThDLCtDQUErQyw4QkFBOEIsMkJBQTJCLDJCQUEyQiw0QkFBNEIsNkJBQTZCLDhCQUE4QixpQkFBaUIsK0JBQStCLDRCQUE0Qiw2QkFBNkIsbUNBQW1DLHFDQUFxQywrQkFBK0IsNERBQTRELDhCQUE4QixpQkFBaUIsZUFBZSxhQUFhLDJCQUEyQixpQ0FBaUMsdUJBQXVCLHdCQUF3QiwwQkFBMEIsMkJBQTJCLDhCQUE4Qix3Q0FBd0Msc0NBQXNDLG1DQUFtQyw2QkFBNkIsdUNBQXVDLGtDQUFrQywwREFBMEQsb0NBQW9DLHFDQUFxQyxpQ0FBaUMsNENBQTRDLGtDQUFrQywrQkFBK0IscUNBQXFDLDJCQUEyQix5QkFBeUIsbUNBQW1DLG1DQUFtQyxzQ0FBc0MsaUJBQWlCLGVBQWUsMkJBQTJCLDRCQUE0Qiw4QkFBOEIsdUNBQXVDLHdDQUF3QyxvQ0FBb0MsNkJBQTZCLDBDQUEwQywyQkFBMkIsb0NBQW9DLGlDQUFpQyw0REFBNEQsdUNBQXVDLGlCQUFpQiwyQkFBMkIscUNBQXFDLDRDQUE0Qyw4QkFBOEIsZ0NBQWdDLDBDQUEwQywrQkFBK0IsK0NBQStDLGtFQUFrRSxrREFBa0QsaUJBQWlCLHlCQUF5QixnQ0FBZ0MsZ0RBQWdELHNDQUFzQyxxQ0FBcUMsOEJBQThCLDhCQUE4QixrQ0FBa0MsK0JBQStCLGtDQUFrQyxxQ0FBcUMscUNBQXFDLDhDQUE4Qyw4Q0FBOEMsaUNBQWlDLGdEQUFnRCxxQkFBcUIsbUJBQW1CLGlCQUFpQixlQUFlLGlCQUFpQix3QkFBd0Isd0NBQXdDLHdDQUF3Qyx5Q0FBeUMsaUNBQWlDLHlCQUF5QiwyQkFBMkIsZ0NBQWdDLDhCQUE4Qiw0QkFBNEIsd0NBQXdDLG1DQUFtQyxzQ0FBc0Msa0NBQWtDLHFDQUFxQywrQkFBK0IsNkJBQTZCLG9DQUFvQyxpQkFBaUIsc0NBQXNDLGtDQUFrQyxxQ0FBcUMsK0JBQStCLHlCQUF5QixpQ0FBaUMsc0NBQXNDLGlCQUFpQixzQ0FBc0Msa0NBQWtDLHFDQUFxQywrQkFBK0IsNkJBQTZCLGlDQUFpQyxpQkFBaUIsZ0NBQWdDLHFDQUFxQyw4QkFBOEIsNkJBQTZCLGlDQUFpQyxpQkFBaUIsZUFBZSxhQUFhLDJCQUEyQixvQ0FBb0MsMkVBQTJFLHNDQUFzQyx3Q0FBd0MseUNBQXlDLGlDQUFpQyx5QkFBeUIsMkJBQTJCLG1DQUFtQyw4QkFBOEIsNEJBQTRCLHdDQUF3QyxtQ0FBbUMseUNBQXlDLGtDQUFrQyxxQ0FBcUMsK0JBQStCLDZCQUE2QixvQ0FBb0MsaUJBQWlCLHlDQUF5QyxrQ0FBa0MscUNBQXFDLCtCQUErQix5QkFBeUIsaUNBQWlDLHNDQUFzQyxpQkFBaUIseUNBQXlDLGtDQUFrQyxxQ0FBcUMsK0JBQStCLDZCQUE2QixpQ0FBaUMsaUJBQWlCLG1DQUFtQyxxQ0FBcUMsOEJBQThCLDZCQUE2QixpQ0FBaUMsaUJBQWlCLGVBQWUsbUNBQW1DLCtCQUErQiwwQkFBMEIsMENBQTBDLDZCQUE2Qiw4QkFBOEIsNkJBQTZCLDJDQUEyQywwQ0FBMEMsZUFBZSxhQUFhLFdBQVcsd0JBQXdCLHVCQUF1QiwrQkFBK0IscUJBQXFCLHNCQUFzQix5QkFBeUIsd0JBQXdCLHlCQUF5QixXQUFXLHdCQUF3QiwwQkFBMEIsK0JBQStCLG1CQUFtQixzQkFBc0Isb0JBQW9CLHFCQUFxQix5QkFBeUIsb0NBQW9DLCtDQUErQyxXQUFXLDJCQUEyQix3QkFBd0Isd0NBQXdDLHNDQUFzQyx3Q0FBd0MsK0JBQStCLDBCQUEwQix5QkFBeUIsMEJBQTBCLGdDQUFnQyw2QkFBNkIsMENBQTBDLDRCQUE0Qix1REFBdUQsNEJBQTRCLGtDQUFrQyxzQ0FBc0MsdUJBQXVCLDRCQUE0Qiw0QkFBNEIsZUFBZSwyQkFBMkIsNkRBQTZELGVBQWUsYUFBYSw4QkFBOEIsNEJBQTRCLHFDQUFxQyw0Q0FBNEMsa0NBQWtDLGlDQUFpQyx5QkFBeUIsMENBQTBDLGlDQUFpQyx3QkFBd0IsdUJBQXVCLHVCQUF1QiwrQkFBK0IsMERBQTBELDZCQUE2QixlQUFlLGFBQWEsV0FBVyxzQkFBc0IsK0JBQStCLHFCQUFxQixzQkFBc0Isd0JBQXdCLHlCQUF5Qiw0QkFBNEIsc0NBQXNDLHNDQUFzQyxvQ0FBb0MsaUNBQWlDLDJCQUEyQixxQ0FBcUMsZ0NBQWdDLHdEQUF3RCxrQ0FBa0MsbUNBQW1DLCtCQUErQiwwQ0FBMEMsZ0NBQWdDLDZCQUE2QixtQ0FBbUMseUJBQXlCLHVCQUF1QixpQ0FBaUMsaUNBQWlDLG9DQUFvQyxlQUFlLGFBQWEsNEJBQTRCLDBCQUEwQiw0QkFBNEIsc0NBQXNDLDJCQUEyQiw4QkFBOEIsa0NBQWtDLDZCQUE2Qiw4QkFBOEIsNkJBQTZCLHFDQUFxQyxlQUFlLDhCQUE4Qiw4QkFBOEIsOENBQThDLG9DQUFvQyxtQ0FBbUMsK0JBQStCLGlDQUFpQyxlQUFlLGFBQWEsd0JBQXdCLDRCQUE0QixtQ0FBbUMseUJBQXlCLDRCQUE0QiwrQkFBK0IsK0JBQStCLHdDQUF3Qyx3Q0FBd0MsMkJBQTJCLDBDQUEwQyxlQUFlLGFBQWEsZUFBZSxTQUFTLHdEQUF3RCxjQUFjLDRCQUE0QiwrQkFBK0IsV0FBVyxrQkFBa0IsNkJBQTZCLDRCQUE0QiwrQkFBK0IsZ0NBQWdDLFdBQVcsbUJBQW1CLDJCQUEyQixnQ0FBZ0MsV0FBVyxTQUFTLHVDQUF1QyxjQUFjLDRCQUE0QiwrQkFBK0IsV0FBVyxrQkFBa0IsMkJBQTJCLCtCQUErQiwyQkFBMkIsZ0NBQWdDLFdBQVcsbUJBQW1CLDJCQUEyQixXQUFXLFNBQVMsT0FBTyxLQUFLLG1CQUFtQjtBQUMzdDRCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTRJO0FBQzVJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJc0Y7QUFDOUcsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLDRIQUFPLFVBQVUsNEhBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ1g7O0FBRTNCOztBQUVBLENBQUMsWUFBWTtFQUVYLElBQUltSSxJQUFJLEdBQUcsSUFBSTFLLG1EQUFVLENBQUMsQ0FBQztBQUU3QixDQUFDLEVBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9zcmMvSW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL3NyYy9QQy5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0Vycm9yLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vY3NzL3N0eWxlLnNjc3M/ZjRmZCIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215X2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQQyBmcm9tIFwiLi9QQ1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0aWFsaXplIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgY29uc3QgYXNwZWN0UmF0aW8gPSAod2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQpLnRvRml4ZWQoMik7XHJcbiAgICBjb25zb2xlLmxvZyhhc3BlY3RSYXRpbyk7XHJcbiAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG4gICAgbGluay5yZWwgPSBcImljb25cIjtcclxuICAgIGxpbmsudHlwZSA9IFwiaW1hZ2UvcG5nXCI7XHJcbiAgICBsaW5rLmhyZWYgPSBcIi4vYXNzZXRzL2ltZ3MvTE9HTy5wbmdcIjtcclxuICAgIGRvY3VtZW50LnRpdGxlID0gXCJBbmRyZWFzTk4xIC0gU1RFQUxUSCBQcm9qZWN0XCI7XHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuXHJcbiAgICBjb25zdCBTdGFydFZpZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ1N0YXJ0VmlkJyk7XHJcbiAgICBpZiAoU3RhcnRWaWQgIT09ICdEb25lJykge1xyXG5cclxuICAgICAgdGhpcy5zdGFydGJ0bkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aGlzLnN0YXJ0YnRuQ29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3RhcnRidG5Db24nKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnN0YXJ0YnRuQ29uKTtcclxuXHJcbiAgICAgIHRoaXMuc3RhcnRidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5zdGFydGJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N0YXJ0YnRuJyk7XHJcbiAgICAgIHRoaXMuc3RhcnRidG4uaW5uZXJUZXh0ID0gXCJFbnRlclwiO1xyXG4gICAgICB0aGlzLnN0YXJ0YnRuQ29uLmFwcGVuZENoaWxkKHRoaXMuc3RhcnRidG4pO1xyXG5cclxuICAgICAgdGhpcy5zdGFydGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvU3JjO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuICAgICAgICBpZiAoYXNwZWN0UmF0aW8gPCAwLjcpIHtcclxuICAgICAgICAgIHZpZGVvU3JjID0gJy4vYXNzZXRzL1RpdGxlX2lwaG9uZS5tcDQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXNwZWN0UmF0aW8gPCAxLjQpIHtcclxuICAgICAgICAgIHZpZGVvU3JjID0gJy4vYXNzZXRzL1RpdGxlX0lwYWQubXA0JztcclxuICAgICAgICB9IGVsc2UgaWYgKGFzcGVjdFJhdGlvIDwgMS45KSB7XHJcbiAgICAgICAgICB2aWRlb1NyYyA9ICcuL2Fzc2V0cy9UaXRsZV9QQy5tcDQnO1xyXG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvIDwgMS43OCkge1xyXG4gICAgICAgICAgICB2aWRlby5zdHlsZS53aWR0aCA9ICdhdXRvJztcclxuICAgICAgICAgICAgdmlkZW8uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmlkZW9TcmMgPSAnLi9hc3NldHMvVGl0bGVfUEMubXA0JztcclxuICAgICAgICAgIGlmIChhc3BlY3RSYXRpbyA8IDEuNzgpIHtcclxuICAgICAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSAnYXV0byc7XHJcbiAgICAgICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgICAgICB2aWRlby5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnc3JjJywgdmlkZW9TcmMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpZGVvU3JjKTtcclxuXHJcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWRlbyk7XHJcbiAgICAgICAgdGhpcy5zdGFydGJ0bkNvbi5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICB2aWRlby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHZpZGVvKTtcclxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ1N0YXJ0VmlkJywgJ0RvbmUnKTtcclxuICAgICAgICAgIG5ldyBQQygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXcgUEMoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICB9IC8vIEVORCBjb25zdHJ1Y3RvclxyXG59IC8vIEVORCBjbGFzc1xyXG4iLCJpbXBvcnQgeyByZW1vdmUgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xpYnMvdHdlZW4ubW9kdWxlLmpzXCI7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9jb21wb25lbnRzL0Vycm9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQQyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTnVtYmVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigxMDAwMDAwMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDAwMDAwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVUaXRsZSgpIHtcclxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gcmFuZG9tTnVtYmVyO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVUaXRsZSgpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0KS50b0ZpeGVkKDIpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGFzcGVjdFJhdGlvID4gMS43MyAmJiBhc3BlY3RSYXRpbyA8IDMuMCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgICAgIGJvZHlFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubWFpbik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0NvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiLi9hc3NldHMvaW1ncy9jb250YWluZXIucG5nXCIpJztcclxuICAgICAgICAgICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHRoaXMuQ29udGFpbmVyKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLkJhY2tJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgdGhpcy5CYWNrSW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnQmFja0ltZycpO1xyXG4gICAgICAgICAgICB0aGlzLkJhY2tJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvaW1ncy9iYWNrRy5wbmcnKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHRoaXMuQmFja0ltZyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLndpbmRvd3NOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy53aW5kb3dzTmF2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2luZG93c05hdicpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQodGhpcy53aW5kb3dzTmF2KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IEJvb3RlZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0Jvb3RlZCcpO1xyXG4gICAgICAgICAgICBpZiAoQm9vdGVkICE9PSAneWVzJykge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL1BDYm9vdC5tcDQnKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnaWQnLCAnQm9vdHZpZCcpO1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZCh2aWRlbyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgQm9vdHZpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdCb290dmlkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlVmlkZW9JZk5vdFBsYXlpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCb290dmlkLnBhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vdHZpZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Db25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkl0ZW1Db24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Db25zLmZvckVhY2goaXRlbUNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5kb3dzTmF2LnN0eWxlLnpJbmRleCA9ICcwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ29uLnN0eWxlLnpJbmRleCA9ICcwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdCb290ZWQnLCAneWVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBCb290dmlkLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuSXRlbUNvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Db25zLmZvckVhY2goaXRlbUNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Db24uc3R5bGUuekluZGV4ID0gJy0yJztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBCb290dmlkLnN0eWxlLnpJbmRleCA9ICctMSc7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZW1vdmVWaWRlb0lmTm90UGxheWluZygpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgQm9vdHZpZC5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBCb290dmlkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Db25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkl0ZW1Db24nKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ29ucy5mb3JFYWNoKGl0ZW1Db24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ29uLnN0eWxlLnpJbmRleCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbmRvd3NOYXYuc3R5bGUuekluZGV4ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdCb290ZWQnLCAneWVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbmRvd3NOYXYuc3R5bGUuekluZGV4ID0gJzAnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLldpbmRvd3NJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuV2luZG93c0luZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdXaW5kb3dzSW5mbycpO1xyXG4gICAgICAgICAgICB0aGlzLndpbmRvd3NOYXYuYXBwZW5kQ2hpbGQodGhpcy5XaW5kb3dzSW5mbyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLndpbmRvd3NJbmZvVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLndpbmRvd3NJbmZvVGltZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dpbmRvd3NJbmZvVGltZScpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZm9ybWF0VGltZShob3VycywgbWludXRlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVyaWRpZW0gPSBob3VycyA+PSAxMiA/ICdQTScgOiAnQU0nO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkSG91cnMgPSBob3VycyAlIDEyIHx8IDEyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkTWludXRlcyA9IG1pbnV0ZXMgPCAxMCA/ICcwJyArIG1pbnV0ZXMgOiBtaW51dGVzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2Zvcm1hdHRlZEhvdXJzfToke2Zvcm1hdHRlZE1pbnV0ZXN9ICR7bWVyaWRpZW19YDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBob3VycyA9IGN1cnJlbnRUaW1lLmdldEhvdXJzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBjdXJyZW50VGltZS5nZXRNaW51dGVzKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLndpbmRvd3NJbmZvVGltZS5pbm5lclRleHQgPSBmb3JtYXRUaW1lKGhvdXJzLCBtaW51dGVzKTtcclxuICAgICAgICAgICAgdGhpcy5XaW5kb3dzSW5mby5hcHBlbmRDaGlsZCh0aGlzLndpbmRvd3NJbmZvVGltZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy53aW5kb3dzSW5mb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy53aW5kb3dzSW5mb0RhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd3aW5kb3dzSW5mb0RhdGUnKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7IC8vIEFkZGluZyAxIGJlY2F1c2UgZ2V0TW9udGgoKSByZXR1cm5zIDAtYmFzZWQgbW9udGggaW5kZXhcclxuICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLndpbmRvd3NJbmZvRGF0ZS5pbm5lclRleHQgPSBmb3JtYXREYXRlKGN1cnJlbnREYXRlKTtcclxuICAgICAgICAgICAgdGhpcy5XaW5kb3dzSW5mby5hcHBlbmRDaGlsZCh0aGlzLndpbmRvd3NJbmZvRGF0ZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuSXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLkl0ZW1Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtQ29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuSXRlbUNvbnRhaW5lcik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2ltZ3MvSWNvbnMtdHJhc2hCaW4tZW1wdHkucG5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW1Db24nKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLnNldEF0dHJpYnV0ZSgnaWQnLCAndHJhc2hCaW4nKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbScpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtdGV4dCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gJ1JlY3ljbGUgYmluJztcclxuICAgICAgICAgICAgdGhpcy5JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaXRlbUNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5hcHBlbmRDaGlsZCh0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvaW1ncy9JY29ucy1mdWxkZXItZW1wdHkucG5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW1Db24nKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnRW1wdHlGb2xkZXInKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbScpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtdGV4dCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gJ0VtcHR5IGZvbGRlcic7XHJcbiAgICAgICAgICAgIHRoaXMuSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLml0ZW1Db24pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2ltZ3MvSWNvbnMtZnVsZGVyLWZ1bGwucG5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW1Db24nKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnRnVsbEZvbGRlcicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW10ZXh0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5pbm5lclRleHQgPSAnRnVsbCBmb2xkZXInO1xyXG4gICAgICAgICAgICB0aGlzLkl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pdGVtQ29uKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMuaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5hcHBlbmRDaGlsZCh0aGlzLnRleHQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9pbWdzL0ljb25zLWZ1bGRlci1Mb2NrZWQucG5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW1Db24nKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9ja2VkRm9sZGVyMScpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW10ZXh0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5pbm5lclRleHQgPSAnTG9ja2VkIGZvbGRlciAxJztcclxuICAgICAgICAgICAgdGhpcy5JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaXRlbUNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5hcHBlbmRDaGlsZCh0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9pbWdzL0ljb25zLWZ1bGRlci1Mb2NrZWQucG5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW1Db24nKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9ja2VkRm9sZGVyMicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW10ZXh0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5pbm5lclRleHQgPSAnTG9ja2VkIGZvbGRlciAyJztcclxuICAgICAgICAgICAgdGhpcy5JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaXRlbUNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5hcHBlbmRDaGlsZCh0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9pbWdzL0ljb25zLWZ1bGRlci1Mb2NrZWQucG5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW1Db24nKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9ja2VkRm9sZGVyMycpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW10ZXh0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5pbm5lclRleHQgPSAnTG9ja2VkIGZvbGRlciAzJztcclxuICAgICAgICAgICAgdGhpcy5JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaXRlbUNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbi5hcHBlbmRDaGlsZCh0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvaW1ncy9JY29ucy1maWxlLXR4dC5wbmcnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSXRlbUNvbicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uc2V0QXR0cmlidXRlKCdpZCcsICd0eHRGaWxlMScpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdJdGVtJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0l0ZW10ZXh0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5pbm5lclRleHQgPSAndGV4dCBmaWxlIDEyMyc7XHJcbiAgICAgICAgICAgIHRoaXMuSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLml0ZW1Db24pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Db24uYXBwZW5kQ2hpbGQodGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ29uLmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWVnYUNvdW50ID0ge1xyXG4gICAgICAgICAgICAgICAgY291bnQ6IDBcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNvdW50KCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImljb25JbWdEaXZcIik7XHJcbiAgICAgICAgICAgICAgICBtZWdhQ291bnQuY291bnQgPSBlbGVtZW50cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkl0ZW1Db24nKTtcclxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lcnMuZm9yRWFjaChpdGVtQ29uID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtQ29uLmlkLmluY2x1ZGVzKCdsb2NrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Db24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZWdhQ291bnQuY291bnQgPD0gMjkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGlja2VkSXRlbUlkID0gaXRlbUNvbi5pbm5lclRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdMb2NrUGFzcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGl2LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnTG9ja1Bhc3NuZXdIZWFkZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlci5pbm5lclRleHQgPSBjbGlja2VkSXRlbUlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld0hlYWRlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3SGVhZGVyRXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SGVhZGVyRXhpdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0xvY2tQYXNzbmV3SGVhZGVyRXhpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SGVhZGVyRXhpdC5pbm5lclRleHQgPSAn4pyVJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlci5hcHBlbmRDaGlsZChuZXdIZWFkZXJFeGl0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkZXJFeGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNvdW50KCdpY29uSW1nRGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluaXRpYWxYLCBpbml0aWFsWTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5Db250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFggPSBlLmNsaWVudFggLSBuZXdEaXYub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsWSA9IGUuY2xpZW50WSAtIG5ld0Rpdi5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLkNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFkZGluZ1ggPSBjb250YWluZXJSZWN0LndpZHRoICogMC4wMjk7IC8vIDIuNCUgb2YgY29udGFpbmVyIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhZGRpbmdZID0gY29udGFpbmVyUmVjdC5oZWlnaHQgKiAwLjA1NDsgLy8gMy40JSBvZiBjb250YWluZXIgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heFggPSBjb250YWluZXJSZWN0LndpZHRoIC0gbmV3RGl2Lm9mZnNldFdpZHRoIC0gcGFkZGluZ1g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heFkgPSBjb250YWluZXJSZWN0LmhlaWdodCAtIG5ld0Rpdi5vZmZzZXRIZWlnaHQgLSBwYWRkaW5nWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRYID0gZS5jbGllbnRYIC0gaW5pdGlhbFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50WSA9IGUuY2xpZW50WSAtIGluaXRpYWxZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IE1hdGgubWluKE1hdGgubWF4KHBhZGRpbmdYLCBjdXJyZW50WCksIG1heFgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WSA9IE1hdGgubWluKE1hdGgubWF4KHBhZGRpbmdZLCBjdXJyZW50WSksIG1heFkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEaXYuc3R5bGUubGVmdCA9IGAke2N1cnJlbnRYfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGl2LnN0eWxlLnRvcCA9IGAke2N1cnJlbnRZfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3Q29uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3Q29uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBMb2NrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9ja0xhYmVsLmlubmVyVGV4dCA9IFwicGFzc3dvcmRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Nvbi5hcHBlbmRDaGlsZChMb2NrTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IExvY2tpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NraW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdMb2NraW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvY2tpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Bhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDb24uYXBwZW5kQ2hpbGQoTG9ja2lucHV0KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgTG9ja0J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvY2tCdG5zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnTG9ja2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDb24uYXBwZW5kQ2hpbGQoTG9ja0J0bnMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBMb2NrU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NrU3VibWl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnTG9ja2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NrU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvY2tTdWJtaXQuaW5uZXJUZXh0ID0gXCJPS1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9ja0J0bnMuYXBwZW5kQ2hpbGQoTG9ja1N1Ym1pdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NrU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDb3VudCgnaWNvbkltZ0RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBMb2NrRXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9ja0V4aXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdMb2NrRXhpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9ja0V4aXQuaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvY2tCdG5zLmFwcGVuZENoaWxkKExvY2tFeGl0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvY2tFeGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDb3VudCgnaWNvbkltZ0RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtSW1hZ2UgPSBpdGVtQ29uLnF1ZXJ5U2VsZWN0b3IoJy5JdGVtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpY29uU3JjID0gaXRlbUltYWdlLmdldEF0dHJpYnV0ZSgnc3JjJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbkltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZ0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgXCJpY29uSW1nRGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZ0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaXRlbUNvbi5pbm5lclRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5kb3dzTmF2LmFwcGVuZENoaWxkKGljb25JbWdEaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpY29uU3JjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpY29uU3JjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWdEaXYuYXBwZW5kQ2hpbGQoaWNvbkltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEaXYucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdEaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWdEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0Rpdi5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEaXYucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdEaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5wYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld0Rpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDb3VudCgnaWNvbkltZ0RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF1ZGlvID0gbmV3IEF1ZGlvKCcuL2Fzc2V0cy9Tb3VuZHMvZXJyb3IubXAzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdWRpby52b2x1bWUgPSAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBGaWxlQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5JdGVtQ29uJyk7XHJcbiAgICAgICAgICAgIEZpbGVDb250YWluZXJzLmZvckVhY2goaXRlbUNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUNvbi5pZC5pbmNsdWRlcygndHJhc2hCaW4nKSB8fCBpdGVtQ29uLmlkLmluY2x1ZGVzKCdGb2xkZXInKSAmJiAhaXRlbUNvbi5pZC5pbmNsdWRlcygnbG9ja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVnYUNvdW50LmNvdW50IDw9IDI5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9sZGVyTmFtZSA9IGl0ZW1Db24uaW5uZXJUZXh0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IEZpbGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0ZpbGVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNvbnRhaW5lci5hcHBlbmRDaGlsZChGaWxlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgRmlsZXNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzSGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnRmlsZXNIZWFkZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLmFwcGVuZENoaWxkKEZpbGVzSGVhZGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBGaWxlc05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0ZpbGVzTmFtZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXNOYW1lLmlubmVyVGV4dCA9IGZvbGRlck5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlc0hlYWRlci5hcHBlbmRDaGlsZChGaWxlc05hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0hlYWRlckV4aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlckV4aXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdGaWxlc0hlYWRlckV4aXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlckV4aXQuaW5uZXJUZXh0ID0gJ+KclSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlc0hlYWRlci5hcHBlbmRDaGlsZChuZXdIZWFkZXJFeGl0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkZXJFeGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWdEaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ291bnQoJ2ljb25JbWdEaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IEZpbGVzSGVhZGVyRmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXNIZWFkZXJGaWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnRmlsZXNIZWFkZXJGaWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlc0hlYWRlckZpbGwuaW5uZXJUZXh0ID0gJ+KWoSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlc0hlYWRlci5hcHBlbmRDaGlsZChGaWxlc0hlYWRlckZpbGwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzSGVhZGVyRmlsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoRmlsZXMuc3R5bGUud2lkdGggPT09ICdjYWxjKDEwMCUgLSA0LjN2dyknICYmIEZpbGVzLnN0eWxlLmhlaWdodCA9PT0gJ2NhbGMoMTAwJSAtIDUuMnZ3KScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuc3R5bGUud2lkdGggPSAnMzB2dyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLmhlaWdodCA9ICcyMHZ3JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuc3R5bGUudG9wID0gJzMwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLmxlZnQgPSAnMzAlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5zdHlsZS53aWR0aCA9ICdjYWxjKDEwMCUgLSA0LjN2dyknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5zdHlsZS5oZWlnaHQgPSAnY2FsYygxMDAlIC0gNS4ydncpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuc3R5bGUudG9wID0gJzIuNnZ3JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuc3R5bGUubGVmdCA9ICcyLjE1dncnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuc3R5bGUud2lkdGggPSBpc0V4cGFuZGVkID8gJzMwdncnIDogJ2NhbGMoMTAwJSAtIDQuM3Z3KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuc3R5bGUuaGVpZ2h0ID0gaXNFeHBhbmRlZCA/ICcyMHZ3JyA6ICdjYWxjKDEwMCUgLSA1LjJ2dyknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLnRvcCA9IGlzRXhwYW5kZWQgPyAnMzAlJyA6ICcyLjZ2dyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuc3R5bGUubGVmdCA9IGlzRXhwYW5kZWQgPyAnMzAlJyA6ICcyLjE1dncnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgRmlsZXNIZWFkZXJtaW5pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlc0hlYWRlcm1pbmkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdGaWxlc0hlYWRlcm1pbmknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzSGVhZGVybWluaS5pbm5lclRleHQgPSAn4pSBJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzSGVhZGVyLmFwcGVuZENoaWxkKEZpbGVzSGVhZGVybWluaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlc0hlYWRlcm1pbmkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5pdGlhbFgsIGluaXRpYWxZO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBpbml0aWFsIHBvc2l0aW9uIG9mIHRoZSBGaWxlcyBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxYID0gZS5jbGllbnRYIC0gRmlsZXMub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsWSA9IGUuY2xpZW50WSAtIEZpbGVzLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEZpbGVzLnN0eWxlLndpZHRoID09PSAnY2FsYygxMDAlIC0gNC4zdncpJyAmJiBGaWxlcy5zdHlsZS5oZWlnaHQgPT09ICdjYWxjKDEwMCUgLSA1LjJ2dyknKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMubWFpbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgLy8gVXNlIHRoZSBjb250YWluZXIncyBib3VuZGluZyByZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWRkaW5nWCA9IGNvbnRhaW5lclJlY3Qud2lkdGggKiAwLjAyOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhZGRpbmdZID0gY29udGFpbmVyUmVjdC5oZWlnaHQgKiAwLjA1NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heFggPSBjb250YWluZXJSZWN0LndpZHRoIC0gRmlsZXMub2Zmc2V0V2lkdGggLSBwYWRkaW5nWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heFkgPSBjb250YWluZXJSZWN0LmhlaWdodCAtIEZpbGVzLm9mZnNldEhlaWdodCAtIHBhZGRpbmdZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRYID0gZS5jbGllbnRYIC0gaW5pdGlhbFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFkgPSBlLmNsaWVudFkgLSBpbml0aWFsWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gTWF0aC5taW4oTWF0aC5tYXgocGFkZGluZ1gsIGN1cnJlbnRYKSwgbWF4WCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WSA9IE1hdGgubWluKE1hdGgubWF4KHBhZGRpbmdZLCBjdXJyZW50WSksIG1heFkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuc3R5bGUubGVmdCA9IGAke2N1cnJlbnRYfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVzLnN0eWxlLnRvcCA9IGAke2N1cnJlbnRZfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUltYWdlID0gaXRlbUNvbi5xdWVyeVNlbGVjdG9yKCcuSXRlbScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvblNyYyA9IGl0ZW1JbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb25JbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWdEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsIFwiaWNvbkltZ0RpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWdEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGl0ZW1Db24uaW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2luZG93c05hdi5hcHBlbmRDaGlsZChpY29uSW1nRGl2KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvblNyYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvblNyYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LmFwcGVuZENoaWxkKGljb25JbWcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWdEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEZpbGVzLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChGaWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChGaWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDb3VudCgnaWNvbkltZ0RpdicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdWRpbyA9IG5ldyBBdWRpbygnLi9hc3NldHMvU291bmRzL2Vycm9yLm1wMycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW8udm9sdW1lID0gMC41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IFR4dEZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuSXRlbUNvbicpO1xyXG4gICAgICAgICAgICBUeHRGaWxlLmZvckVhY2goaXRlbUNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUNvbi5pZC5pbmNsdWRlcygndHh0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lZ2FDb3VudC5jb3VudCA8PSAyOSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvbGRlck5hbWUgPSBpdGVtQ29uLmlubmVyVGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBUZXh0RmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdUZXh0RmlsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db250YWluZXIuYXBwZW5kQ2hpbGQoVGV4dEZpbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFRleHRGaWxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZUhlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ1RleHRGaWxlSGVhZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZS5hcHBlbmRDaGlsZChUZXh0RmlsZUhlYWRlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgVGV4dEZpbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnVGV4dEZpbGVOYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsTmFtZS5pbm5lclRleHQgPSBmb2xkZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGVIZWFkZXIuYXBwZW5kQ2hpbGQoVGV4dEZpbE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0hlYWRlckV4aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlckV4aXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdUZXh0RmlsZUhlYWRlckV4aXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlckV4aXQuaW5uZXJUZXh0ID0gJ+KclSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZUhlYWRlci5hcHBlbmRDaGlsZChuZXdIZWFkZXJFeGl0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBUZXh0RmlsZUhlYWRlckZpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlSGVhZGVyRmlsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ1RleHRGaWxlSGVhZGVyRmlsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGVIZWFkZXJGaWxsLmlubmVyVGV4dCA9ICfilqEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGVIZWFkZXIuYXBwZW5kQ2hpbGQoVGV4dEZpbGVIZWFkZXJGaWxsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBUZXh0RmlsZUhlYWRlcm1pbmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlSGVhZGVybWluaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ1RleHRGaWxlSGVhZGVybWluaScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGVIZWFkZXJtaW5pLmlubmVyVGV4dCA9ICfilIEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGVIZWFkZXIuYXBwZW5kQ2hpbGQoVGV4dEZpbGVIZWFkZXJtaW5pKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBUZXh0RmlsZXRleHRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZXRleHRhci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ1RleHRGaWxldGV4dGFyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzYXZlZENvbnRlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShmb2xkZXJOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2F2ZWRDb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGV0ZXh0YXIudmFsdWUgPSBcIldlbGNvbWUgaGVyZSEgWW91IGNhbiB3cml0ZSBhbGwgeW91IHdhbnQuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxldGV4dGFyLnZhbHVlID0gc2F2ZWRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUuYXBwZW5kQ2hpbGQoVGV4dEZpbGV0ZXh0YXIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZUhlYWRlcm1pbmkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IFRleHRGaWxldGV4dGFyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGZvbGRlck5hbWUsIHRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRlckV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBUZXh0RmlsZXRleHRhci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShmb2xkZXJOYW1lLCB0ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltZ0Rpdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDb3VudCgnaWNvbkltZ0RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlSGVhZGVyRmlsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoVGV4dEZpbGUuc3R5bGUud2lkdGggPT09ICdjYWxjKDEwMCUgLSA0LjN2dyknICYmIFRleHRGaWxlLnN0eWxlLmhlaWdodCA9PT0gJ2NhbGMoMTAwJSAtIDUuMnZ3KScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUuc3R5bGUud2lkdGggPSAnMzB2dyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnN0eWxlLmhlaWdodCA9ICcyMHZ3JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUuc3R5bGUudG9wID0gJzMwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnN0eWxlLmxlZnQgPSAnMzAlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZS5zdHlsZS53aWR0aCA9ICdjYWxjKDEwMCUgLSA0LjN2dyknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZS5zdHlsZS5oZWlnaHQgPSAnY2FsYygxMDAlIC0gNS4ydncpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUuc3R5bGUudG9wID0gJzIuNnZ3JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUuc3R5bGUubGVmdCA9ICcyLjE1dncnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUuc3R5bGUud2lkdGggPSBpc0V4cGFuZGVkID8gJzMwdncnIDogJ2NhbGMoMTAwJSAtIDQuM3Z3KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUuc3R5bGUuaGVpZ2h0ID0gaXNFeHBhbmRlZCA/ICcyMHZ3JyA6ICdjYWxjKDEwMCUgLSA1LjJ2dyknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnN0eWxlLnRvcCA9IGlzRXhwYW5kZWQgPyAnMzAlJyA6ICcyLjZ2dyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUuc3R5bGUubGVmdCA9IGlzRXhwYW5kZWQgPyAnMzAlJyA6ICcyLjE1dncnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbml0aWFsWCwgaW5pdGlhbFk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGVIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsWCA9IGUuY2xpZW50WCAtIFRleHRGaWxlLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFkgPSBlLmNsaWVudFkgLSBUZXh0RmlsZS5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUZXh0RmlsZS5zdHlsZS53aWR0aCA9PT0gJ2NhbGMoMTAwJSAtIDQuM3Z3KScgJiYgVGV4dEZpbGUuc3R5bGUuaGVpZ2h0ID09PSAnY2FsYygxMDAlIC0gNS4ydncpJykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLm1haW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWRkaW5nWCA9IGNvbnRhaW5lclJlY3Qud2lkdGggKiAwLjAyOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhZGRpbmdZID0gY29udGFpbmVyUmVjdC5oZWlnaHQgKiAwLjA1NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heFggPSBjb250YWluZXJSZWN0LndpZHRoIC0gVGV4dEZpbGUub2Zmc2V0V2lkdGggLSBwYWRkaW5nWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heFkgPSBjb250YWluZXJSZWN0LmhlaWdodCAtIFRleHRGaWxlLm9mZnNldEhlaWdodCAtIHBhZGRpbmdZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRYID0gZS5jbGllbnRYIC0gaW5pdGlhbFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFkgPSBlLmNsaWVudFkgLSBpbml0aWFsWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gTWF0aC5taW4oTWF0aC5tYXgocGFkZGluZ1gsIGN1cnJlbnRYKSwgbWF4WCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WSA9IE1hdGgubWluKE1hdGgubWF4KHBhZGRpbmdZLCBjdXJyZW50WSksIG1heFkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUuc3R5bGUubGVmdCA9IGAke2N1cnJlbnRYfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnN0eWxlLnRvcCA9IGAke2N1cnJlbnRZfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUltYWdlID0gaXRlbUNvbi5xdWVyeVNlbGVjdG9yKCcuSXRlbScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvblNyYyA9IGl0ZW1JbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb25JbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWdEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsIFwiaWNvbkltZ0RpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWdEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGl0ZW1Db24uaW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2luZG93c05hdi5hcHBlbmRDaGlsZChpY29uSW1nRGl2KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvblNyYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvblNyYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1nRGl2LmFwcGVuZENoaWxkKGljb25JbWcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWdEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRleHRGaWxlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEZpbGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChUZXh0RmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxldGV4dGFyLmlubmVyVGV4dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGZvbGRlck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRGaWxlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoVGV4dEZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0RmlsZXRleHRhci5pbm5lclRleHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShmb2xkZXJOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNvdW50KCdpY29uSW1nRGl2Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF1ZGlvID0gbmV3IEF1ZGlvKCcuL2Fzc2V0cy9Tb3VuZHMvZXJyb3IubXAzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdWRpby52b2x1bWUgPSAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuQWxlcnRBcHNDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5BbGVydEFwc0Nvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N0YXJ0YnRuQ29uJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5BbGVydEFwc0Nvbik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkFsZXJ0QXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuQWxlcnRBcHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdBbGVydEFwcycpO1xyXG4gICAgICAgICAgICB0aGlzLkFsZXJ0QXBzLmlubmVyVGV4dCA9IFwiQXNwZWN0IHJhdGlvIGlzIG5vdCB3aXRoaW4gdGhlIGFjY2VwdGFibGUgcmFuZ2U6IFwiICsgYXNwZWN0UmF0aW87XHJcbiAgICAgICAgICAgIHRoaXMuQWxlcnRBcHNDb24uYXBwZW5kQ2hpbGQodGhpcy5BbGVydEFwcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkJhY2tidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5CYWNrYnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3RhcnRidG4nKTtcclxuICAgICAgICAgICAgdGhpcy5CYWNrYnRuLmlubmVyVGV4dCA9IFwiR28gQmFja1wiO1xyXG4gICAgICAgICAgICB0aGlzLkFsZXJ0QXBzQ29uLmFwcGVuZENoaWxkKHRoaXMuQmFja2J0bik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkJhY2tidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiLi9cIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiY2xhc3MgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuICAgICAgICBjb25zdCBFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIEVycm9yLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZXJyb3InKTtcclxuICAgICAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQoRXJyb3IpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuZXdIZWFkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdMb2NrUGFzc25ld0hlYWRlcicpO1xyXG4gICAgICAgIG5ld0hlYWRlci5pbm5lclRleHQgPSBcIkVycm9yXCI7XHJcbiAgICAgICAgRXJyb3IuYXBwZW5kQ2hpbGQobmV3SGVhZGVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3SGVhZGVyRXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5ld0hlYWRlckV4aXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdMb2NrUGFzc25ld0hlYWRlckV4aXQnKTtcclxuICAgICAgICBuZXdIZWFkZXJFeGl0LmlubmVyVGV4dCA9ICfinJUnO1xyXG4gICAgICAgIG5ld0hlYWRlci5hcHBlbmRDaGlsZChuZXdIZWFkZXJFeGl0KTtcclxuXHJcbiAgICAgICAgbmV3SGVhZGVyRXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgRXJyb3IucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBpc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGluaXRpYWxYLCBpbml0aWFsWTtcclxuXHJcbiAgICAgICAgbmV3SGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5tYWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBpbml0aWFsWCA9IGUuY2xpZW50WCAtIEVycm9yLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIGluaXRpYWxZID0gZS5jbGllbnRZIC0gRXJyb3Iub2Zmc2V0VG9wO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMubWFpbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZGRpbmdYID0gY29udGFpbmVyUmVjdC53aWR0aCAqIDAuMDI5OyAvLyAyLjQlIG9mIGNvbnRhaW5lciB3aWR0aFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFkZGluZ1kgPSBjb250YWluZXJSZWN0LmhlaWdodCAqIDAuMDU0OyAvLyAzLjQlIG9mIGNvbnRhaW5lciBoZWlnaHRcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1heFggPSBjb250YWluZXJSZWN0LndpZHRoIC0gRXJyb3Iub2Zmc2V0V2lkdGggLSBwYWRkaW5nWDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1heFkgPSBjb250YWluZXJSZWN0LmhlaWdodCAtIEVycm9yLm9mZnNldEhlaWdodCAtIHBhZGRpbmdZO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRYID0gZS5jbGllbnRYIC0gaW5pdGlhbFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFkgPSBlLmNsaWVudFkgLSBpbml0aWFsWTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gTWF0aC5taW4oTWF0aC5tYXgocGFkZGluZ1gsIGN1cnJlbnRYKSwgbWF4WCk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50WSA9IE1hdGgubWluKE1hdGgubWF4KHBhZGRpbmdZLCBjdXJyZW50WSksIG1heFkpO1xyXG4gICAgICAgICAgICAgICAgRXJyb3Iuc3R5bGUubGVmdCA9IGAke2N1cnJlbnRYfXB4YDtcclxuICAgICAgICAgICAgICAgIEVycm9yLnN0eWxlLnRvcCA9IGAke2N1cnJlbnRZfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVycm9yaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGVycm9yaW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Vycm9yaW5mbycpO1xyXG4gICAgICAgIEVycm9yLmFwcGVuZENoaWxkKGVycm9yaW5mbyk7XHJcblxyXG4gICAgICAgIGNvbnN0IEVycm9ySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIEVycm9ySWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0Vycm9ySWNvbicpO1xyXG4gICAgICAgIEVycm9ySWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9pbWdzL2Vycm9yLnBuZycpO1xyXG4gICAgICAgIGVycm9yaW5mby5hcHBlbmRDaGlsZChFcnJvckljb24pO1xyXG5cclxuICAgICAgICBjb25zdCBFcnJvcnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBFcnJvcnRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdFcnJvcnRleHQnKTtcclxuICAgICAgICBFcnJvcnRleHQuaW5uZXJUZXh0ID0gXCJ3YXJuaW5nISwgY29tcHV0ZXIgbWVtb3J5IGlzIGZ1bGwsIHVzaW5nIHVuZGVyIDMwIGl0ZW1zIGF0IGEgdGltZSBpcyByZWNvbW1lbmRlZC5cIjtcclxuICAgICAgICBlcnJvcmluZm8uYXBwZW5kQ2hpbGQoRXJyb3J0ZXh0KTtcclxuXHJcbiAgICAgICAgY29uc3QgRXJyb3JPayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIEVycm9yT2suaW5uZXJUZXh0ID0gXCJva2F5XCI7XHJcbiAgICAgICAgRXJyb3IuYXBwZW5kQ2hpbGQoRXJyb3JPayk7XHJcbiAgICAgICAgRXJyb3JPay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgRXJyb3IucmVtb3ZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBFcnJvcjsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL1JldmFtcGVkLVgzcTFhLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuaHRtbCB7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxuICBzY3JvbGxiYXItY29sb3I6IGFxdWEgcmdiYSgxLCAxLCA0MywgMC41MjEpO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5odG1sIGJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbmh0bWwgYm9keSAuc3RhcnRidG5Db24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlZjNmYTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICB6LWluZGV4OiAxMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuaHRtbCBib2R5IC5zdGFydGJ0bkNvbiAuc3RhcnRidG4ge1xcbiAgdGV4dC13cmFwOiBub3dyYXA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZm9udC1zaXplOiAxMHZ3O1xcbiAgY29sb3I6ICM0ZWYzZmE7XFxuICBwYWRkaW5nOiAxdncgMTB2dztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogIzRlZjNmYSAycHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5odG1sIGJvZHkgLnN0YXJ0YnRuQ29uIC5zdGFydGJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGVmM2ZhO1xcbiAgY29sb3I6ICMxMTExMTE7XFxufVxcbmh0bWwgYm9keSAuc3RhcnRidG5Db24gLkFsZXJ0QXBzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjAlO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGZvbnQtc2l6ZTogNnZ3O1xcbiAgY29sb3I6ICM0ZWYzZmE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmh0bWwgYm9keSB2aWRlbyB7XFxuICB6LWluZGV4OiAxMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XFxuICBodG1sIGJvZHkgdmlkZW8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICBodG1sIGJvZHkgdmlkZW8ge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIGh0bWwgYm9keSB2aWRlbyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxufVxcbmh0bWwgYm9keSBtYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxdncpO1xcbiAgd2lkdGg6IDc1dnc7XFxuICBoZWlnaHQ6IDQ5LjUzNzY0ODYxMjl2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogNzV2dztcXG4gIGhlaWdodDogNDkuNTM3NjQ4NjEyOXZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5JdGVtQ29udGFpbmVyIHtcXG4gIHdpZHRoOiA5NC40JTtcXG4gIGhlaWdodDogOTMuMiU7XFxuICBtYXgtaGVpZ2h0OiA4OS42JTtcXG4gIG1heC13aWR0aDogOTQuNCU7XFxuICB6LWluZGV4OiAxO1xcbiAgbWFyZ2luOiAzLjQlIDIuOSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkl0ZW1Db250YWluZXIgLkl0ZW1Db24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDUuMTY2NjY2NjY2NyU7XFxuICBoZWlnaHQ6IDguMTU1NTU1NTU1NiU7XFxuICBtYXJnaW46IDAuNzUlO1xcbiAgcGFkZGluZzogMDtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuSXRlbUNvbnRhaW5lciAuSXRlbUNvbiAuSXRlbSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiA3NSU7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkl0ZW1Db250YWluZXIgLkl0ZW1Db24gLkl0ZW10ZXh0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDAuNnZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDE1JTtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuTG9ja1Bhc3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MCU7XFxuICBsZWZ0OiA0MCU7XFxuICB3aWR0aDogMjB2dztcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogNzB2dztcXG4gIGJvcmRlcjogIzAwOTVmZiAxcHggc29saWQ7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkxvY2tQYXNzIC5Mb2NrUGFzc25ld0hlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBwYWRkaW5nOiAwLjR2dyAwLjh2dztcXG4gIGZvbnQtc2l6ZTogMC44dnc7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkxvY2tQYXNzIC5Mb2NrUGFzc25ld0hlYWRlciAuTG9ja1Bhc3NuZXdIZWFkZXJFeGl0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgZm9udC1zaXplOiAxLjR2dztcXG4gIHBhZGRpbmc6IDAgMC41dnc7XFxuICBtYXJnaW4tdG9wOiAtMC4xOHZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5Mb2NrUGFzcyAubmV3Q29uIHtcXG4gIGhlaWdodDogNHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMGYwO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5Mb2NrUGFzcyAubmV3Q29uIGxhYmVsIHtcXG4gIG1hcmdpbi10b3A6IDAuNXZ3O1xcbiAgZm9udC1zaXplOiAxdnc7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1ib3R0b206IDAuMXZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5Mb2NrUGFzcyAubmV3Q29uIGlucHV0IHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGJvcmRlcjogIzU4NTg1OCAxcHggc29saWQ7XFxuICB3aWR0aDogMTB2dztcXG4gIGhlaWdodDogMS4ydnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuTG9ja1Bhc3MgLm5ld0NvbiBpbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6ICMwMDk2ZmEgMXB4IHNvbGlkO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuTG9ja1Bhc3MgLm5ld0NvbiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogM3Z3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5Mb2NrUGFzcyAubmV3Q29uIGRpdiBidXR0b24ge1xcbiAgbWFyZ2luOiAwIDJ2dztcXG4gIHdpZHRoOiA1dnc7XFxuICBoZWlnaHQ6IDEuMnZ3O1xcbiAgZm9udC1zaXplOiAwLjd2dztcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZmRmO1xcbiAgYm9yZGVyOiAjYjZiNmI2IDFweCBzb2xpZDtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuTG9ja1Bhc3MgLm5ld0NvbiBkaXYgYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlcjogIzMxYThmOCAycHggc29saWQ7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkZpbGVzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNmI2YjY7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNC4zdncpO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1LjJ2dyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIuNnZ3O1xcbiAgbGVmdDogMi4xNXZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5GaWxlcyAuRmlsZXNIZWFkZXIge1xcbiAgaGVpZ2h0OiAyLjV2dztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkZpbGVzIC5GaWxlc0hlYWRlciAuRmlsZXNIZWFkZXJFeGl0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwLjh2dztcXG4gIHRvcDogMC4ydnc7XFxuICBmb250LXNpemU6IDEuMjV2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuRmlsZXMgLkZpbGVzSGVhZGVyIC5GaWxlc0hlYWRlckZpbGwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDMuNXZ3O1xcbiAgdG9wOiAwO1xcbiAgZm9udC1zaXplOiAydnc7XFxuICBtYXJnaW4tdG9wOiAtMC4yNHZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5GaWxlcyAuRmlsZXNIZWFkZXIgLkZpbGVzSGVhZGVybWluaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNi44dnc7XFxuICB0b3A6IDAuM3Z3O1xcbiAgZm9udC1zaXplOiAxdnc7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLkZpbGVzIC5GaWxlc0hlYWRlciAuRmlsZXNOYW1lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDAuNXZ3O1xcbiAgdG9wOiAwLjZ2dztcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5UZXh0RmlsZSB7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxuICBzY3JvbGxiYXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNik7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0LjN2dyk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUuMnZ3KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMi42dnc7XFxuICBsZWZ0OiAyLjE1dnc7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLlRleHRGaWxlIC5UZXh0RmlsZUhlYWRlciB7XFxuICBoZWlnaHQ6IDIuNXZ3O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuVGV4dEZpbGUgLlRleHRGaWxlSGVhZGVyIC5UZXh0RmlsZUhlYWRlckV4aXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDAuOHZ3O1xcbiAgdG9wOiAwLjJ2dztcXG4gIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuQ29udGFpbmVyIC5UZXh0RmlsZSAuVGV4dEZpbGVIZWFkZXIgLlRleHRGaWxlSGVhZGVyRmlsbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMy41dnc7XFxuICB0b3A6IDA7XFxuICBmb250LXNpemU6IDJ2dztcXG4gIG1hcmdpbi10b3A6IC0wLjI0dnc7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLlRleHRGaWxlIC5UZXh0RmlsZUhlYWRlciAuVGV4dEZpbGVIZWFkZXJtaW5pIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA2Ljh2dztcXG4gIHRvcDogMC4zdnc7XFxuICBmb250LXNpemU6IDF2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkNvbnRhaW5lciAuVGV4dEZpbGUgLlRleHRGaWxlSGVhZGVyIC5UZXh0RmlsZU5hbWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMC41dnc7XFxuICB0b3A6IDAuNnZ3O1xcbiAgZm9udC1zaXplOiAxdnc7XFxufVxcbmh0bWwgYm9keSBtYWluIC5Db250YWluZXIgLlRleHRGaWxlIC5UZXh0RmlsZXRleHRhciB7XFxuICBwYWRkaW5nOiAwLjR2dztcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAwLjh2dyk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjR2dyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAjQm9vdHZpZCB7XFxuICB6LWluZGV4OiA1O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogNDV2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLkJhY2tJbWcge1xcbiAgei1pbmRleDogLTk5OTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiBjYWxjKDc1dncgLSA1cHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDQ5LjUzNzY0ODYxMjl2dyAtIDVweCk7XFxufVxcbmh0bWwgYm9keSBtYWluIC53aW5kb3dzTmF2IHtcXG4gIHotaW5kZXg6IC0yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc0NTA5ODAzOTIpO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQuM3Z3KTtcXG4gIGhlaWdodDogMi4zdnc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDIuNnZ3O1xcbiAgbGVmdDogMi4xOHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmh0bWwgYm9keSBtYWluIC53aW5kb3dzTmF2IC5pY29uSW1nRGl2IHtcXG4gIGhlaWdodDogMi4zdnc7XFxuICB3aWR0aDogMi4xOHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmh0bWwgYm9keSBtYWluIC53aW5kb3dzTmF2IC5pY29uSW1nRGl2IGltZyB7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAud2luZG93c05hdiAuaWNvbkltZ0Rpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNDY2KTtcXG59XFxuaHRtbCBib2R5IG1haW4gLndpbmRvd3NOYXYgLldpbmRvd3NJbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDV2dztcXG4gIGhlaWdodDogMi4zdnc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG59XFxuaHRtbCBib2R5IG1haW4gLndpbmRvd3NOYXYgLldpbmRvd3NJbmZvIGRpdiB7XFxuICBmb250LXNpemU6IDF2dztcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuZXJyb3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzOCU7XFxuICBsZWZ0OiAzNyU7XFxuICB3aWR0aDogMjB2dztcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogNzB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYwZjA7XFxuICBib3JkZXI6ICMwMDk1ZmYgMXB4IHNvbGlkO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuZXJyb3IgLkxvY2tQYXNzbmV3SGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIHBhZGRpbmc6IDAuNHZ3IDAuOHZ3O1xcbiAgZm9udC1zaXplOiAwLjh2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLmVycm9yIC5Mb2NrUGFzc25ld0hlYWRlciAuTG9ja1Bhc3NuZXdIZWFkZXJFeGl0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgZm9udC1zaXplOiAxLjR2dztcXG4gIHBhZGRpbmc6IDAgMC41dnc7XFxuICBtYXJnaW4tdG9wOiAtMC4xOHZ3O1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuZXJyb3IgLmVycm9yaW5mbyB7XFxuICBoZWlnaHQ6IDR2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuaHRtbCBib2R5IG1haW4gLmVycm9yIC5lcnJvcmluZm8gLkVycm9ySWNvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjV2dztcXG4gIHdpZHRoOiAyLjJ2dztcXG4gIGhlaWdodDogMi4ydnc7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjV2dztcXG59XFxuaHRtbCBib2R5IG1haW4gLmVycm9yIC5lcnJvcmluZm8gLkVycm9ydGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxdnc7XFxuICBwYWRkaW5nOiAxLjV2dyAwO1xcbn1cXG5odG1sIGJvZHkgbWFpbiAuZXJyb3IgYnV0dG9uIHtcXG4gIG1hcmdpbjogMCAydnc7XFxuICBtYXJnaW4tYm90dG9tOiAwLjh2dztcXG4gIHdpZHRoOiA2dnc7XFxuICBoZWlnaHQ6IDEuNHZ3O1xcbiAgZm9udC1zaXplOiAwLjd2dztcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlNGU0O1xcbiAgYm9yZGVyOiAjYjZiNmI2IDJweCBzb2xpZDtcXG59XFxuaHRtbCBib2R5IG1haW4gLmVycm9yIGJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXI6ICMzMWE4ZjggMnB4IHNvbGlkO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICBodG1sIGJvZHkgaDEge1xcbiAgICBmb250LXNpemU6IDEydnc7XFxuICAgIG1hcmdpbi1ib3R0b206IDR2dztcXG4gIH1cXG4gIGh0bWwgYm9keSBoNSB7XFxuICAgIGZvbnQtc2l6ZTogMy41dnc7XFxuICAgIHBhZGRpbmc6IDAgMTV2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHZ3O1xcbiAgfVxcbiAgaHRtbCBib2R5IGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHZ3O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIGh0bWwgYm9keSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMTV2dztcXG4gICAgbWFyZ2luLWJvdHRvbTogNXZ3O1xcbiAgfVxcbiAgaHRtbCBib2R5IGg1IHtcXG4gICAgZm9udC1zaXplOiA1dnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCA0dnc7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwdnc7XFxuICB9XFxuICBodG1sIGJvZHkgZGl2IHtcXG4gICAgZm9udC1zaXplOiA4dnc7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Nzcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0UscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFBSjtBQUVJO0VBQ0UseUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFOO0FBRU07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUFSO0FBRVE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFBVjtBQUlNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Es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d0RJO0VBQ0U7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUF0RE47RUF5REk7SUFDRSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBdkROO0VBMERJO0lBQ0UsY0FBQTtJQUNBLG1CQUFBO0VBeEROO0FBQ0Y7QUEyREk7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQXpETjtFQTRESTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQTFETjtFQTZESTtJQUNFLGNBQUE7RUEzRE47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvUmV2YW1wZWQtWDNxMWEudHRmXFxcIik7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXHJcXG4gIHNjcm9sbGJhci1jb2xvcjogYXF1YSByZ2JhKDEsIDEsIDQzLCAwLjUyMSk7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcblxcclxcbiAgICAuc3RhcnRidG5Db24ge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZWYzZmE7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcclxcbiAgICAgIHotaW5kZXg6IDExO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICAgIC5zdGFydGJ0biB7XFxyXFxuICAgICAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEwdnc7XFxyXFxuICAgICAgICBjb2xvcjogIzRlZjNmYTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDF2dyAxMHZ3O1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgYm9yZGVyOiAjNGVmM2ZhIDJweCBzb2xpZDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRlZjNmYTtcXHJcXG4gICAgICAgICAgY29sb3I6ICMxMTExMTE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5BbGVydEFwcyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDIwJTtcXHJcXG4gICAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICAgICBmb250LXNpemU6IDZ2dztcXHJcXG4gICAgICAgIGNvbG9yOiAjNGVmM2ZhO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB2aWRlbyB7XFxyXFxuICAgICAgei1pbmRleDogMTA7XFxyXFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG5cXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87IC8vIE1haW50YWluIGFzcGVjdCByYXRpb1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bzsgLy8gQWxsb3cgdmlkZW8gdG8gYmUgaXRzIG5hdHVyYWwgd2lkdGhcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbWFpbiB7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMXZ3KTtcXHJcXG4gICAgICB3aWR0aDogNzV2dztcXHJcXG4gICAgICBoZWlnaHQ6IGNhbGMoNzV2dyAvIDEuNTE0KTtcXHJcXG5cXHJcXG4gICAgICAuQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgIHdpZHRoOiA3NXZ3O1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDc1dncgLyAxLjUxNCk7XFxyXFxuXFxyXFxuICAgICAgICAuSXRlbUNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgIHdpZHRoOiA5NC40JTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiA5My4yJTtcXHJcXG4gICAgICAgICAgbWF4LWhlaWdodDogODkuNiU7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogOTQuNCU7XFxyXFxuICAgICAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgICAgICAgIG1hcmdpbjogMy40JSAyLjklO1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuICAgICAgICAgIC5JdGVtQ29uIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDE1IC0gMS41JSk7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDkzLjIlIC8gOSAtIDIuMiUpO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMC43NSU7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuSXRlbSB7XFxyXFxuICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3NSU7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5JdGVtdGV4dCB7XFxyXFxuICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjZ2dztcXHJcXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNSU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuTG9ja1Bhc3Mge1xcclxcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgIHRvcDogNDAlO1xcclxcbiAgICAgICAgICBsZWZ0OiA0MCU7XFxyXFxuICAgICAgICAgIHdpZHRoOiAyMHZ3O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogNzB2dztcXHJcXG4gICAgICAgICAgYm9yZGVyOiAjMDA5NWZmIDFweCBzb2xpZDtcXHJcXG5cXHJcXG4gICAgICAgICAgLkxvY2tQYXNzbmV3SGVhZGVyIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjR2dyAwLjh2dztcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHZ3O1xcclxcblxcclxcbiAgICAgICAgICAgIC5Mb2NrUGFzc25ld0hlYWRlckV4aXQge1xcclxcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHZ3O1xcclxcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjV2dztcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0wLjE4dnc7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIC5uZXdDb24ge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNHZ3O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMGYwO1xcclxcblxcclxcbiAgICAgICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXZ3O1xcclxcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XFxyXFxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMXZ3O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgICBib3JkZXI6ICM1ODU4NTggMXB4IHNvbGlkO1xcclxcbiAgICAgICAgICAgICAgd2lkdGg6IDEwdnc7XFxyXFxuICAgICAgICAgICAgICBoZWlnaHQ6IDEuMnZ3O1xcclxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAjMDA5NmZhIDFweCBzb2xpZDsgLy8gQ2hhbmdlIGJvcmRlciBjb2xvciBvbiBmb2N1c1xcclxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lOyAvLyBSZW1vdmUgZGVmYXVsdCBmb2N1cyBvdXRsaW5lXFxyXFxuICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIGRpdiB7XFxyXFxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMnZ3O1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNXZ3O1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuMnZ3O1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3Z3O1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkZmRmO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICNiNmI2YjYgMXB4IHNvbGlkO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICMzMWE4ZjggMnB4IHNvbGlkO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuRmlsZXMge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZiNmI2O1xcclxcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNC4zdncpO1xcclxcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUuMnZ3KTtcXHJcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICB0b3A6IDIuNnZ3O1xcclxcbiAgICAgICAgICBsZWZ0OiAyLjE1dnc7XFxyXFxuXFxyXFxuICAgICAgICAgIC5GaWxlc0hlYWRlciB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyLjV2dztcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLkZpbGVzSGVhZGVyRXhpdCB7XFxyXFxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICByaWdodDogMC44dnc7XFxyXFxuICAgICAgICAgICAgICB0b3A6IDAuMnZ3O1xcclxcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1dnc7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5GaWxlc0hlYWRlckZpbGwge1xcclxcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgcmlnaHQ6IDMuNXZ3O1xcclxcbiAgICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XFxyXFxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMC4yNHZ3O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuRmlsZXNIZWFkZXJtaW5pIHtcXHJcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgIHJpZ2h0OiA2Ljh2dztcXHJcXG4gICAgICAgICAgICAgIHRvcDogMC4zdnc7XFxyXFxuICAgICAgICAgICAgICBmb250LXNpemU6IDF2dztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLkZpbGVzTmFtZSB7XFxyXFxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICBsZWZ0OiAwLjV2dztcXHJcXG4gICAgICAgICAgICAgIHRvcDogMC42dnc7XFxyXFxuICAgICAgICAgICAgICBmb250LXNpemU6IDF2dztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5UZXh0RmlsZSB7XFxyXFxuICAgICAgICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXHJcXG4gICAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjYpO1xcclxcbiAgICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQuM3Z3KTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1LjJ2dyk7XFxyXFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgdG9wOiAyLjZ2dztcXHJcXG4gICAgICAgICAgbGVmdDogMi4xNXZ3O1xcclxcblxcclxcbiAgICAgICAgICAuVGV4dEZpbGVIZWFkZXIge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMi41dnc7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAgICAgICAgIC5UZXh0RmlsZUhlYWRlckV4aXQge1xcclxcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgcmlnaHQ6IDAuOHZ3O1xcclxcbiAgICAgICAgICAgICAgdG9wOiAwLjJ2dztcXHJcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuVGV4dEZpbGVIZWFkZXJGaWxsIHtcXHJcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgIHJpZ2h0OiAzLjV2dztcXHJcXG4gICAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xcclxcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTAuMjR2dztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLlRleHRGaWxlSGVhZGVybWluaSB7XFxyXFxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICByaWdodDogNi44dnc7XFxyXFxuICAgICAgICAgICAgICB0b3A6IDAuM3Z3O1xcclxcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5UZXh0RmlsZU5hbWUge1xcclxcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgbGVmdDogMC41dnc7XFxyXFxuICAgICAgICAgICAgICB0b3A6IDAuNnZ3O1xcclxcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIC5UZXh0RmlsZXRleHRhciB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMC40dnc7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwLjh2dyk7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgcmVzaXplOiBub25lO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMy40dncpO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgI0Jvb3R2aWQge1xcclxcbiAgICAgICAgei1pbmRleDogNTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICBoZWlnaHQ6IDQ1dnc7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5CYWNrSW1nIHtcXHJcXG4gICAgICAgIHotaW5kZXg6IC05OTk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICB3aWR0aDogY2FsYyg3NXZ3IC0gNXB4KTtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygoNzV2dyAvIDEuNTE0KSAtIDVweCk7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC53aW5kb3dzTmF2IHtcXHJcXG4gICAgICAgIHotaW5kZXg6IC0yO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGJlO1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQuM3Z3KTtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYyg3LjV2dyAtIDUuMnZ3KTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogMi42dnc7XFxyXFxuICAgICAgICBsZWZ0OiAyLjE4dnc7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgIC5pY29uSW1nRGl2IHtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDcuNXZ3IC0gNS4ydncpO1xcclxcbiAgICAgICAgICB3aWR0aDogMi4xOHZ3O1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDApO1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDcwJTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNDY2KTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLldpbmRvd3NJbmZvIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgd2lkdGg6IDV2dztcXHJcXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDcuNXZ3IC0gNS4ydncpO1xcclxcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuXFxyXFxuICAgICAgICAgIGRpdiB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5lcnJvciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDM4JTtcXHJcXG4gICAgICAgIGxlZnQ6IDM3JTtcXHJcXG4gICAgICAgIHdpZHRoOiAyMHZ3O1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA3MHZ3O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjBmMDtcXHJcXG4gICAgICAgIGJvcmRlcjogIzAwOTVmZiAxcHggc29saWQ7XFxyXFxuXFxyXFxuICAgICAgICAuTG9ja1Bhc3NuZXdIZWFkZXIge1xcclxcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAwLjR2dyAwLjh2dztcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAwLjh2dztcXHJcXG5cXHJcXG4gICAgICAgICAgLkxvY2tQYXNzbmV3SGVhZGVyRXhpdCB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40dnc7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMCAwLjV2dztcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMC4xOHZ3O1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuZXJyb3JpbmZvIHtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiA0dnc7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuXFxyXFxuICAgICAgICAgIC5FcnJvckljb24ge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXZ3O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyLjJ2dztcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDIuMnZ3O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDF2dztcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjV2dztcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAuRXJyb3J0ZXh0IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXZ3O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXZ3IDA7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgIG1hcmdpbjogMCAydnc7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuOHZ3O1xcclxcbiAgICAgICAgICB3aWR0aDogNnZ3O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDEuNHZ3O1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDAuN3Z3O1xcclxcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlNGU0O1xcclxcbiAgICAgICAgICBib3JkZXI6ICNiNmI2YjYgMnB4IHNvbGlkO1xcclxcblxcclxcbiAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBib3JkZXI6ICMzMWE4ZjggMnB4IHNvbGlkO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXHJcXG4gICAgICBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEydnc7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0dnc7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGg1IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMy41dnc7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDE1dnc7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHZ3O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBkaXYge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHZ3O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gICAgICBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE1dnc7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1dnc7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGg1IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogMCA0dnc7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHZ3O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBkaXYge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA4dnc7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSBcIi4vSW5pdGlhbGl6ZVwiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGUuc2Nzc1wiO1xyXG5cclxuLy8gKiogIElJRkU6IEltbWVkaWF0ZWx5IEludm9rZWQgRnVuY3Rpb24gRXhwcmVzc2lvbiAgKi9cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGxldCBpbml0ID0gbmV3IEluaXRpYWxpemUoKTtcclxuXHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6WyJQQyIsIkluaXRpYWxpemUiLCJfY3JlYXRlQ2xhc3MiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImFzcGVjdFJhdGlvIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidG9GaXhlZCIsImNvbnNvbGUiLCJsb2ciLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicmVsIiwidHlwZSIsImhyZWYiLCJ0aXRsZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIlN0YXJ0VmlkIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic3RhcnRidG5Db24iLCJzZXRBdHRyaWJ1dGUiLCJib2R5Iiwic3RhcnRidG4iLCJpbm5lclRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwidmlkZW9TcmMiLCJ2aWRlbyIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJzZXRJdGVtIiwiZGVmYXVsdCIsIkVycm9yIiwiZ2VuZXJhdGVSYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ1cGRhdGVUaXRsZSIsInNldEludGVydmFsIiwicmFuZG9tTnVtYmVyIiwiYm9keUVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9ybWF0VGltZSIsImhvdXJzIiwibWludXRlcyIsIm1lcmlkaWVtIiwiZm9ybWF0dGVkSG91cnMiLCJmb3JtYXR0ZWRNaW51dGVzIiwiY29uY2F0IiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJkYXkiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsInVwZGF0ZUNvdW50IiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibWVnYUNvdW50IiwiY291bnQiLCJsZW5ndGgiLCJ1c2VyU2VsZWN0IiwibWFpbiIsIkNvbnRhaW5lciIsImJhY2tncm91bmRJbWFnZSIsIkJhY2tJbWciLCJ3aW5kb3dzTmF2IiwiQm9vdGVkIiwiQm9vdHZpZCIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlVmlkZW9JZk5vdFBsYXlpbmciLCJzZXRUaW1lb3V0IiwicGF1c2VkIiwiaXRlbUNvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW1Db24iLCJ6SW5kZXgiLCJXaW5kb3dzSW5mbyIsIndpbmRvd3NJbmZvVGltZSIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsIndpbmRvd3NJbmZvRGF0ZSIsImN1cnJlbnREYXRlIiwiSXRlbUNvbnRhaW5lciIsIml0ZW0iLCJ0ZXh0IiwiaXRlbUNvbnRhaW5lcnMiLCJpZCIsImluY2x1ZGVzIiwiY2xpY2tlZEl0ZW1JZCIsIm5ld0RpdiIsIm5ld0hlYWRlciIsIm5ld0hlYWRlckV4aXQiLCJpY29uSW1nRGl2IiwiaXNEcmFnZ2luZyIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJlIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwiY2xpZW50WSIsIm9mZnNldFRvcCIsInBhZGRpbmdYIiwicGFkZGluZ1kiLCJtYXhYIiwib2Zmc2V0V2lkdGgiLCJtYXhZIiwib2Zmc2V0SGVpZ2h0IiwiY3VycmVudFgiLCJjdXJyZW50WSIsIm1pbiIsIm1heCIsImxlZnQiLCJ0b3AiLCJuZXdDb24iLCJMb2NrTGFiZWwiLCJMb2NraW5wdXQiLCJMb2NrQnRucyIsIkxvY2tTdWJtaXQiLCJMb2NrRXhpdCIsIml0ZW1JbWFnZSIsImljb25TcmMiLCJnZXRBdHRyaWJ1dGUiLCJpY29uSW1nIiwiZGlzcGxheSIsImF1ZGlvIiwiQXVkaW8iLCJ2b2x1bWUiLCJwbGF5IiwiRmlsZUNvbnRhaW5lcnMiLCJmb2xkZXJOYW1lIiwiRmlsZXMiLCJGaWxlc0hlYWRlciIsIkZpbGVzTmFtZSIsIkZpbGVzSGVhZGVyRmlsbCIsImlzRXhwYW5kZWQiLCJGaWxlc0hlYWRlcm1pbmkiLCJUeHRGaWxlIiwiVGV4dEZpbGUiLCJUZXh0RmlsZUhlYWRlciIsIlRleHRGaWxOYW1lIiwiVGV4dEZpbGVIZWFkZXJGaWxsIiwiVGV4dEZpbGVIZWFkZXJtaW5pIiwiVGV4dEZpbGV0ZXh0YXIiLCJzYXZlZENvbnRlbnQiLCJsb2NhbFN0b3JhZ2UiLCJ2YWx1ZSIsInRleHRDb250ZW50IiwiQWxlcnRBcHNDb24iLCJBbGVydEFwcyIsIkJhY2tidG4iLCJsb2NhdGlvbiIsImVycm9yaW5mbyIsIkVycm9ySWNvbiIsIkVycm9ydGV4dCIsIkVycm9yT2siLCJpbml0Il0sInNvdXJjZVJvb3QiOiIifQ==