// const wordSearch = (letters, word) => { 
//     const horizontalJoin = letters.map(ls => ls.join(''))
//     for (l of horizontalJoin) {
//         if (l.includes(word)) return true
//     }
// }

// module.exports = wordSearch

const wordSearch = (letters, word) => {
    let verticalJoin = [[]];
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let i = 0; i < letters[0].length; i++) {
        verticalJoin[i] = [];
        for (let j = 0; j < letters.length; j++) {
            verticalJoin[i][j] = letters[j][i];
        }
    }
    verticalJoin = verticalJoin.map(ls => ls.join(''));
    console.log(horizontalJoin, verticalJoin);
    for (let l of horizontalJoin) {
        for (let h of verticalJoin) {
            if (l.includes(word)) return true;
            else if (h.includes(word)) return true;
        }
    }
    return false;
};

console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FRANK'));

module.exports = wordSearch;