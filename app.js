'use strict'

var firstImgEl = document.getElementsByClassName('first image')[0];
var secondImgEl = document.getElementsByClassName('second image')[0];
var thirdImgEl = document.getElementsByClassName('third image')[0];

function Image(name,path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
}

var images = [
  new Image('tauntaun', 'https://github.com/codefellows/seattle-201n8/blob/master/class-11-av-practical-clicktracker/assets/tauntaun.jpg?raw=true')

  new Image('Water Can', 'https://github.com/codefellows/seattle-201n8/blob/master/class-11-av-practical-clicktracker/assets/water-can.jpg?raw=true')

  new Image('Dog', 'https://github.com/codefellows/seattle-201n8/blob/master/class-11-av-practical-clicktracker/assets/dog-duck.jpg?raw=true')

]



var tauntaun = new Image('tauntaun', 'https://github.com/codefellows/seattle-201n8/blob/master/class-11-av-practical-clicktracker/assets/tauntaun.jpg?raw=true')

var water = new Image('Water Can', 'https://github.com/codefellows/seattle-201n8/blob/master/class-11-av-practical-clicktracker/assets/water-can.jpg?raw=true')

var dog = new Image('Dog', 'https://github.com/codefellows/seattle-201n8/blob/master/class-11-av-practical-clicktracker/assets/dog-duck.jpg?raw=true')

formEl.addEventListener('onclick', handleSubmit);
