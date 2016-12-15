'use strict';


var picContainer = document.getElementById('picContainer');
var picList = document.getElementById('picList');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var displayButton = document.getElementById('display-button');
var ctx = document.getElementById('myChart');



var allProducts = [];
var names = ['bag', 'banana', 'breakfast', 'bathroom', 'boots', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep','scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var newArray = [];
var oldArray = [];
var clickCounter = 0;
var clicked = [];
var viewed =[];

// Global variables
// -----------------


// Constructor
// -----------------
function Product(name) {
  this.name = name;
  this.filepath = 'images/' + name + '.jpg';
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

function rand() {
  return Math.floor(Math.random() * allProducts.length);
}


function arrayOfThreeNumbers() {
  oldArray[0] = newArray[0];
  oldArray[1] = newArray[1];
  oldArray[2] = newArray[2];

  newArray[0] = rand();
  while (newArray[0] === oldArray[0] || newArray[0] === oldArray[1] || newArray[0] === oldArray[2]){
    // console.log(newArray, 'broken value in first position of new array');
    newArray[0] = rand();
    // console.log('fixed');
  }

  newArray[1] = rand();

  while (newArray[1] === newArray[0] || newArray[1] === oldArray[0] || newArray[1] === oldArray[1] || newArray[1] === oldArray[2]){
    // console.log(newArray, 'old broken array');
    newArray[1] = rand();
    // console.log('caught dupes between 1st and 2nd numbers');
  }

  newArray[2] = rand();
  while (newArray[2] === newArray[0] || newArray[2] === newArray[1] || newArray[2] === oldArray[0] || newArray[2] === oldArray[1] || newArray[2] === oldArray[2]){
    // console.log(newArray, 'old broken array');
    newArray[2] = rand();
    // console.log('caught a dupe with the 3rd number');
  }
}

renderList();

function createThreePics() {
  arrayOfThreeNumbers();

  left.src = allProducts[newArray[0]].filepath;
  allProducts[newArray[0]].views += 1;
  center.src = allProducts[newArray[1]].filepath;
  allProducts[newArray[1]].views += 1;
  right.src = allProducts[newArray[2]].filepath;
  allProducts[newArray[2]].views +=1;

}

function displayList() {
  picList.innerHTML = '';
  for (var i = 0; i < allProducts.length; i++) {
    var liEl = document.createElement('li');
    var liEl2 = document.createElement('li');
    liEl.textContent = allProducts[i].name + ' has been clicked ' + allProducts[i].clicks + ' times';
    liEl2.textContent = allProducts[i].name + ' has been viewed ' + allProducts[i].views + ' times';
    picList.appendChild(liEl);
    picList.appendChild(liEl2);
  }
}

function handleClick(event) {
  event.preventDefault();

  if(event.target.id === 'picContainer'){
    return alert('Click on a picture! Not the Background!');
  }
  if (event.target.id === 'left'){
    allProducts[newArray[0]].clicks += 1;
  }

  if (event.target.id === 'center'){
    allProducts[newArray[1]].clicks += 1;
  }

  if (event.target.id === 'right'){
    allProducts[newArray[2]].clicks += 1;
  }

  clickCounter += 1;



  if (clickCounter < 25){
    createThreePics();
  } else {

      document.getElementById('display-button').style.visibility = 'visible';
      return alert('You are outta clicks!');
    }


  localStorage.setItem('allProducts', JSON.stringify(allProducts));

  createThreePics();
  displayList();
}

function handleGenerateButton() {
  makeChart ();
}

var picList = document.getElementById('picList');
function displayList() {
  picList.innerHTML = '';
  for (var i = 0; i < allProducts.length; i++) {
    var liEl = document.createElement('li');
    var liEl2 = document.createElement('li');
    liEl.textContent = allProducts[i].name + ' has been clicked ' + allProducts[i].clicks + ' times';
    liEl2.textContent = allProducts[i].name + ' has been viewed ' + allProducts[i].views + ' times';
    picList.appendChild(liEl);
    picList.appendChild(liEl2);
  }
}



//chart below//
function myImageNames () {
  var names = [];
  for(var i = 0; i < allProducts.length; i++) {
    names.push(allProducts[i].name);
  }
  return names;
}

function renderList() {
 for (var i=0; i < allProducts.length; i++){
   viewed[i] = allProducts[i].views;
   clicked[i] = allProducts[i].clicks;
 }
}

// var myChart = new Chart({})
function makeChart() {
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: ('# of clicks'),

            data: clicked,
            backgroundColor: [
                'rgba(204, 0, 0, 0.5)',
                'rgba(51, 51, 51, 0.5)',
                'rgba(204, 0, 0, 0.5)',
                'rgba(51, 51, 51, 0.5)',
                'rgba(204, 0, 0, 0.5)',
                'rgba(51, 51, 51, 0.5)',
                'rgba(204, 0, 0, 0.5)',
                'rgba(51, 51, 51, 0.5)',
                'rgba(204, 0, 0, 0.5)',
                'rgba(51, 51, 51, 0.5)',
                'rgba(204, 0, 0, 0.5)',
                'rgba(51, 51, 51, 0.5)',
                'rgba(204, 0, 0, 0.5)',
                'rgba(51, 51, 51, 0.5)',
                'rgba(204, 0, 0, 0.5)',
                'rgba(51, 51, 51, 0.5)',
                'rgba(204, 0, 0, 0.5)',
                'rgba(51, 51, 51, 0.5)',
                'rgba(204, 0, 0, 0.5)',
                'rgba(51, 51, 51, 0.5)'
            ],
            borderColor: [
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      height: 175,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

}

if (localStorage.allProducts) {
  allProducts = JSON.parse(localStorage.allProducts);
} else {
  alert('work');
  for (var j = 0; j < names.length; j++) {
    new Product(names[j])
  }
  var allProductsStringified = JSON.stringify(allProducts);
  localStorage.setItem('allProducts', allProductsStringified);
}

createThreePics();

picContainer.addEventListener('click', handleClick);
displayButton.addEventListener('click', handleGenerateButton);
