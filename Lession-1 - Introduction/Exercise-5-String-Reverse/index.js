
function wordReverse(word) {
  return word.split('').reverse().join('');
}
function stringReverse() {
  var str1 = document.getElementById('str').value;
  
  var splitString = str1.split(' ');
  splitString = splitString.reverse();
  console.log(splitString);
  var resultString = []
  splitString.forEach(function(word) {
    resultString.push(wordReverse(word));
  });
  resultString =  resultString.join(' ');
  document.getElementById('result').innerHTML = resultString;
}
