import pizza from './pizza-main.jpg'

export default function home() {
    const content = document.querySelector('#content');

    const heading = document.createElement('h1');
    heading.textContent = 'Pal\'s Pizza Parlor';
    content.appendChild(heading);


    const pizzaImage = document.createElement('img');
    pizzaImage.src = pizza;
    pizzaImage.classList.toggle('main-img');
    content.appendChild(pizzaImage);
     
    const descriptionHeader = document.createElement('h2');
    descriptionHeader.textContent = 'Come on down to Pal\'s Pizza Party for a slice of our welcoming atmosphere, sensational flavors, and friendly service.';
    content.appendChild(descriptionHeader);

    const description = document.createElement('p');
    description.innerHTML = 'We\'ve been serving up good memories since 1986, when George "Pal" Costanza made his dream of sharing his family\'s delicious pies with the world a reality. Pal\'s pizza parlor is a proud supporter of our local Boys and Girls Club.';
    content.appendChild(description);
}