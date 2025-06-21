const imageContainer = document.getElementById('all-image');
const url = 'https://dummyjson.com/products?limit=';
const limit = 20;
let skip = 0;

async function getImages() {
    const url = getUrl(limit, skip);
    const response = await fetch(url)
    const images = await response.json();
    loadImages(images.products);
}

function loadImages(images) {
    let i = 0;
    while (i < limit) {
        const img = document.createElement('img');
        img.src = images[i].thumbnail;
        imageContainer.appendChild(img);
        i++;
    }
}

getImages();

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        setValue();
        getImages();
    }
})

function setValue() {
    skip += limit;
}

function getUrl(limit, skip) {
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    return url;
}