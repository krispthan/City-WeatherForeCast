"use strict";

let searchBtn = document.querySelector('button');
let searchCity = document.getElementById('city');

let loadingText = document.getElementById('load');
let weatherBox = document.getElementById('weather');

let weatherCity = weatherBox.firstElementChild;
let weatherDescription = document.querySelector('#weatherDescription');
let weatherTemperature = weatherBox.lastElementChild;