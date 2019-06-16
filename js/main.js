'use strict';

var locationOverlay = document.querySelector('.map');
locationOverlay.classList.remove('map--faded');

var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var mapPinsElement = document.querySelector('.map__pins');

var fragment = document.createDocumentFragment();

var YMIN = 130;
var YMAX = 630;

var apartmentsType = ['palace', 'flat', 'house', 'bungalo'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var apartmentsInfo = [];
for (var i = 1; i <= 8; i++) {
  apartmentsInfo.push({
    author: 'img/avatars/user0' + i + '.png',
    offer: apartmentsType[getRandomInt(0, apartmentsType.length)],
    locationX: getRandomInt(0, locationOverlay.offsetWidth),
    locationY: getRandomInt(YMIN, YMAX)
  });
}

var createPins = function (info) {
  var pinElement = pinTemplate.cloneNode(true);
  var pinElementImg = pinElement.querySelector('img');
  pinElementImg.src = info.author;
  pinElementImg.alt = info.offer;
  pinElement.style.left = info.locationX + 'px';
  pinElement.style.top = info.locationY + 'px';
  return pinElement;
};

for (i = 1; i < apartmentsInfo.length; i++) {
  fragment.appendChild(createPins(apartmentsInfo[i]));
}

mapPinsElement.appendChild(fragment);