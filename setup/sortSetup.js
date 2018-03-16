const SORT_RECORDS = 20000;

let shuffleArr = [];

const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
for (let i = 0; i < SORT_RECORDS; i++) shuffleArr.push(i);

module.exports = shuffle(shuffleArr);

