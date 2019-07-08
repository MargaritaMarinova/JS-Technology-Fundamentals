/*
Write a function that receives an array of words and finds occurrences of given words in that sentence. 
The input will come as array of strings. The first string will contain the words you will be 
looking for separated by a space. All strings after that will be the words you will be looking for. 
Print for each word how many times it occurs. The words should be sorted by count in descending.
*/

function wordsTracker(input) {
    let wordsToSearch = input.shift().split(' ');
    let map = new Map();

    for (let word of wordsToSearch) {
        map.set(word, 0);
    }

    for (let word of input) {
        if (map.has(word)) {
            let value = map.get(word) + 1;
            map.set(word, value);
        }
    }
    let result = [...map]
        .sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(`${e[0]} - ${e[1]}`));
}

wordsTracker(['this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
,'words','this','and','sentence','because','this','is','your','task']);

