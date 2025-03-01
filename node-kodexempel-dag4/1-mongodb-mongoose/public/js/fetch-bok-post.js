const elForm = document.querySelector('#formBok');
const elBooktitle = document.querySelector('#bookTitle');
const elBookauthor = document.querySelector('#bookAuthor');
const elBookisbn = document.querySelector('#bookIsbn');
const elBookprice = document.querySelector('#bookPrice');
const elBookcategory1 = document.querySelector('#bookCategory1');
const elBookcategory2 = document.querySelector('#bookCategory2');
const elOutput = document.querySelector('#output');

function newBook(event){
    event.preventDefault();
    let bookTitle = elBooktitle.value;
    let bookAuthor = elBookauthor.value;
    let bookIsbn = elBookisbn.value;
    let bookPrice = elBookprice.value;
    let bookCategory1 = elBookcategory1.value;
    let bookCategory2 = elBookcategory2.value;

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({bookTitle:bookTitle, bookAuthor:bookAuthor, bookIsbn:bookIsbn, bookPrice:bookPrice, bookCategory1:bookCategory1, bookCategory2:bookCategory2}) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

postData('http://localhost:3000/api/books')
    .then((data) => {
        console.log(data); // JSON data parsed by `response.json()` call
    });

}

elForm.addEventListener('submit', newBook, false);

/*
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://dev.to/devamaz/using-fetch-api-to-get-and-post--1g7d
 */