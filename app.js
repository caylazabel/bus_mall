'use strict'

var totalClicks = 0;
var allProducts = [ ];
var container = document.getElementById('image_container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

//constructor//
function Images (filepath, nickname){
  this.location = filepath;
  this.name = nickname;
  this.clicks = 0;
  this.timesShown = 0;

  allProducts.push(this);
};

function imagePlacement(){
  left.src = allProducts[Math.floor(Math.random() * 20)].location;
  center.src = allProducts[Math.floor(Math.random() * 20)].location;
  right.src = allProducts[Math.floor(Math.random() * 20)].location;
}

//objects//
new Images('images/bag.jpg', 'travelbag');
new Images('images/banana.jpg', 'banana');
new Images('images/bathroom.jpg', 'banana');
new Images('images/boots.jpg', 'boots');
new Images('images/breakfast.jpg', 'breakfast');
new Images('images/bubblegum.jpg', 'gum');
new Images('images/chair.jpg', 'chair');
new Images('images/cthulhu.jpg', 'cthulhu');
new Images('images/dog-duck.jpg', 'dogduck');
new Images('images/dragon.jpg', 'dragon');
new Images('images/pen.jpg', 'pen');
new Images('images/pet-sweep.jpg', 'petsweep');
new Images('images/scissors.jpg', 'scissors');
new Images('images/shark.jpg', 'shark');
new Images('images/sweep.png', 'sweep');
new Images('images/tauntaun.jpg', 'tauntaun');
new Images('images/unicorn.jpg', 'unicorn');
new Images('images/usb.gif', 'usb');
new Images('images/water-can.jpg', 'watercan');
new Images('images/wine-glass.jpg', 'wineglass');


imagePlacement();
//for loop
// for (var i = 0; i < imageNames.length; i++){
//   imagesArray.push(new Image(imageNames[i]));
// }

// function createRandomImage(){
//   if(totalClicks < 25){
//     var randImage1 = randomImage();
//     var randImage2 = randomImage();
//     var randImage3 = randomImage();
// // no duplicates//
//     while (randImage1 === randImage2 || randImage1 === randImage3){
//       randImage1 = randomImage();
//     }
//     while (randImage2 === randImage1 || randImage2 === randImage3){
//       randImage2 = randomImage();
//     }
//     while(randImage3 === randImage1 || randImage3 === randImage2)
//     randImage3 = randomImage();
//   }
// }
// console.log(hey);
//
//     var imageOne = document.getElementById('leftImage');
//     var imageTwo = document.getElementById('centerImage');
//     var imageThree = document.getElementById('rightImage');
//
//     imageOne.src = rand1.filepath;
//     imageOne.name = rand1.name;
//
//     imageTwo.src = rand2.filepath;
//     imageTwo.name = rand2.name;
//
//     imageThree.src = rand3.filepath;
//     imageThree.name = rand3.name;
//   }
// };
// console.log(hey);
// // randomImage();