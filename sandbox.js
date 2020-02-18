const imageLibrary = [
    {image: 'bunny-and-chick.jpeg', alt: 'bunny and chick'},
    {image: 'cat.jpeg', alt: 'cat'},
    {image: 'chicken.jpeg', alt: 'chicken'},
    {image: 'dog.jpeg', alt: 'dog'},
    {image: 'donkey.jpeg', alt: 'donkey'},
    {image: 'duck.jpeg', alt: 'duck'},
    {image: 'eagle.jpeg', alt: 'eagle'},
    {image: 'elephant.jpeg', alt: 'elephant'},
    {image: 'gorilla.jpeg', alt: 'gorilla'},
    {image: 'horse.jpeg', alt: 'horse'},
    {image: 'kangaroo.jpeg', alt: 'kangaroo'},
    {image: 'panda.jpeg', alt: 'panda'},
    {image: 'penguin.jpeg', alt: 'penguin'},
    {image: 'rat.jpeg', alt: 'rat'},
    {image: 'snake.jpeg', alt: 'snake'},
    {image: 'swallow.jpeg', alt: 'swallow'}
];

const imagebox = document.querySelector('.images');

imageLibrary.forEach(image => {
    imagebox.innerHTML += `
        <div class="card">
            <div class="card-image">
                <img src="assets/${image.image}" min-width="100%" height="110%" alt="${image.alt}">
            </div>
            <figure>
                <p>${image.alt}</p>
            </figure>
        </div>
    `
})