'use strict'
var images = [];
var firstImgEl = document.getElementsByClassName('first-image')[0];
var secondImgEl = document.getElementsByClassName('second-image')[0];
var thirdImgEl = document.getElementsByClassName('third-image')[0];

function Image(name,path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
  images.push(this);
  }

  var bag = new Image('bag', './assets/bag.jpg');
  var banana = new Image('banana', './assets/banana.jpg');
  var bathroom = new Image('bathroom', './assets/bathroom.jpg');
  var boots = new Image('boots', './assets/boots.jpg');
  var breakfast = new Image('breakfast', './assets/breakfast.jpg');
  var bubblegum = new Image('bubblegum', './assets/bubblegum.jpg');
  var chair = new Image('chair', './assets/chair.jpg');
  var cthulu = new Image('cthulu', './assets/cthulhu.jpg');
  var dogDuck = new Image('dog-duck', './assets/dog-duck.jpg');
  var dragon = new Image('dragon', './assets/dragon.jpg');
  var pen = new Image('pen', './assets/pen.jpg');
  var petSweep = new Image('pet-sweep', './assets/pet-sweep.jpg');
  var scissors = new Image('scissors', './assets/scissors.jpg');
  var shark = new Image('shark', './assets/shark.jpg');
  var sweep = new Image('sweep', './assets/sweep.png');
  var tauntaun = new Image('tauntaun', './assets/tauntaun.jpg');
  var unicorn = new Image('unicorn', './assets/unicorn.jpg');
  var usb = new Image('usb', './assets/usb.gif');
  var waterCan = new Image('water-can', './assets/water-can.jpg');
  var wineGlass = new Image('wine-glass', './assets/wine-glass.jpg');

  var imageElements = [firstImgEl, secondImgEl, thirdImgEl]

var rounds = 0;

var imgMaker = function(event){

  if (rounds < 25) {
    rounds++;
    console.log(rounds);
    event.target.name
    for (var i = 0; i < 3; i++) {
  images[i]

  var num = Math.floor(Math.random() * images.length)
  var img = images[num];
  console.log(img);
  imageElements[i].setAttribute('src', img.path);
  imageElements[i].setAttribute('name', img.name);
    }
  }
}
firstImgEl.addEventListener("click", imgMaker);

secondImgEl.addEventListener("click", imgMaker);

thirdImgEl.addEventListener("click", imgMaker);
