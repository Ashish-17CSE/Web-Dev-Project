
const root = document.querySelector('#root')

const button = document.querySelector('button')


function creatItem(items) {
    // card
    const card = document.createElement('div');
    card.classList.add('card');

    // photo
    const photo = document.createElement('img');
    photo.src = items.thumbnailUrl;

    // Title
    const title = document.createElement('h4');
    title.innerHTML = items.title

    card.appendChild(photo);
    card.appendChild(title);
    root.appendChild(card);
}


function displayImages(items) {
    items.forEach(function (items) {
        creatItem(items);
    });

    // console.log(items);

}

button.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(res => res.json())
        .then((items) => {
            displayImages(items);
        })
});



