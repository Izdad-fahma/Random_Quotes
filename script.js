let quotes = document.getElementById('quotes');
let author = document.getElementById('author');

console.log(quotes);
console.log(author);

async function getQuotes() {
    try {
        let result = await fetch('https://dummyjson.com/quotes/random');
        let data = await result.json();

        console.log(data);
        
        quotes.innerHTML = data.quote;
        author.innerHTML = data.author;

    } catch (error) {
        console.log("Error : " + error);   
    }
}
