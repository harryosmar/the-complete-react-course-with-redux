console.log('destructuring demo');

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { title: booktitle, author } = book;
console.log(booktitle, author);

const { name: publishername = 'Self-Published' } = book.publisher;

console.log(publishername);


const [a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(a, b, rest);