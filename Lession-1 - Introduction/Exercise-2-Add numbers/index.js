
function addNumbers() {
  var num1 = document.getElementById('num1');
  var num2 = document.getElementById('num2');
  if (isNaN(num1) || x < 1 || x > 10) {
    text = "Input not valid";
    document.getElementById('num1').focus();
  }
  if (isNaN(num2) || x < 1 || x > 10) {
    text = "Input not valid";
    document.getElementById('num2').focus();
   
  } 
  document.getElementById("demo").innerHTML = text

  var sum = Number(num1.value) + Number(num2.value);

  var result = document.getElementById('result');
  result.innerHTML = sum;
}