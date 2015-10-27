// www.reddit.com/r/dailyprogrammer/comments/3pcb3i/20151019_challenge_237_easy_broken_keyboard/

var fs = require('fs');

function compareArrays(arr1, arr2) {
  var comp1 = arr1.sort().join(""),
      comp2 = arr2.sort().join("");
  if (comp1 === comp2) {
    // console.log("a match!\n\n\n\n\n\n\nwow!")
    return true
  }
  else return false;
}

function brokenKeyboard(inputString) {
  var output = [];
  fs.readFile('./dictionary-data.txt', 'utf-8', function(err, data) {
    if (err) console.log(err);
    var arrayOfWords = data.toString().toLowerCase().split('\n');
    var inputAsArray = inputString.split('\n');
    var lineCount = inputAsArray[0];
    for (var i = 1; i <= lineCount; i++) {
      // console.log("length: ", arrayOfWords.length);
      var tempWordsArray = [];
      arrayOfWords.forEach(function(word) {
        var tempLettersArray = [];
        // console.log("word number ", i);
        var arrayOfWordLetters = word.split("");
        arrayOfWordLetters.forEach(function(letter) {
          if (inputAsArray[i].indexOf(letter) > -1) {
            tempLettersArray.push(letter);
          }
        })
        if (compareArrays(tempLettersArray, arrayOfWordLetters)) {
          tempWordsArray.push(word) 
          // console.log(tempWordsArray);
        }
      })
      var longestWord = tempWordsArray.sort(function (a, b) { return b.length - a.length; })[0];
      output.push(inputAsArray[i] + " = " + longestWord);
    }   
    var solution = output.join('\n');
    return console.log(solution);
  });
}

brokenKeyboard('6\nedcf\nbnki\nvybu\npoil\nqwer\nhjklo');
