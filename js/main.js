'use strict';

var locationOverlay = document.querySelector('.map');

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
