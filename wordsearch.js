const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    for (const l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
};

const transpose = function(matrix) {
    return matrix[0].map((a, i) => matrix.map(b => b[i]));
  };

// start by debugging wordsearch.js and make sure it passes both tests
// check to find the word horizontally AND vertically.
// return true if found, return false if not found
// TO CHECK VERTICAL
//

module.exports = wordSearch;