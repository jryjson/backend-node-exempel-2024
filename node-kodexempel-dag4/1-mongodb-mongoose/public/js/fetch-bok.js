function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('bok');
const url = 'http://localhost:3000/api/books';
//const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data);
        let bok = data;
        return bok.map(function(data) {
            let li = createNode('li');
            li.innerHTML = data.book + ' ' + data.author + ' ' + data.isbn +  ' ' + data.categories;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
