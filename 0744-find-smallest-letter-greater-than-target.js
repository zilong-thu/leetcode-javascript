/**
 * 744. Find Smallest Letter Greater Than Target
 */

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let res = '';
  const targetCode = target.charCodeAt();
  const len = letters.length;

  for (var i = 0; i < len; i++) {
    const code = letters[i].charCodeAt();
    if (code > targetCode) {
      res = letters[i];
      break;
    }
  }

  if (!res && letters[len - 1].charCodeAt() <= targetCode) {
    res = letters[0];
  }

  return res;
};


const tests = [{
  letters: ['a', 'b'],
  target: 'z',
}, {
  letters: ["c", "f", "j"],
  target: 'a',
}, {
  letters: ["c", "f", "j"],
  target: 'j',
}];


tests.forEach(item => {
  let res = nextGreatestLetter(item.letters, item.target);
  console.log(res);
});
