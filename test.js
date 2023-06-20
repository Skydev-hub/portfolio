// This is JS code
 
// siht si SJ edoc

function reverseStringByWord(str) {
  var words = str.split(' ');
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });
  return reversedWords.join(' ');
}

const originalString  = 'This is the JS code';
const reversedString = reverseStringByWord(originalString);
console.log(reversedString); 