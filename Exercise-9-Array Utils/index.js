

function getPrimes() {
  var num1 = document.getElementById('arr1');
  //get the array of numbers
  num1 = num1.value;
  var inputList = num1.split(' ');
  var result = "";

  var primeResultElement = document.getElementById('primeList');
  primeResultElement.innerHTML = result;

}

