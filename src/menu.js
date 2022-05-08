import chickenGarlicRanchImg from './chicken-garlic-ranch.jpg';
import baconCheeseburgerImg from './bacon-cheeseburger.jpg';
import pepperoniImg from './pepperoni.jpg';
import cheeseImg from './cheese.jpg';
import breadsticksImg from './cheesy-breadsticks.jpg';
import wingsImg from './wings.jpg';
import fountainDrinkImg from './fountain.jpg';
import milkshakeImg from './milkshake.jpg';
import margheritaImg from './margherita.jpg';

export default function menu() {
    const content = document.querySelector('#content');

    class menuItem {
        constructor (name, description, price, image) {
            this.name = name;
            this.description = description;
            this.price = price;
            this.image = image;
        }

        addToMenu() {
            const itemName = document.createElement('h3');
            itemName.textContent = this.name;
            itemName.classList.toggle('name');
            const itemDescription = document.createElement('p');
            itemDescription.innerHTML = this.description;
            const itemPrice = document.createElement('h3');
            itemPrice.textContent = this.price;
            itemPrice.classList.toggle('price');
            const itemImg = document.createElement('img');
            itemImg.src = this.image;
            const itemContainer = document.createElement('div');
            itemContainer.classList.toggle('menu-item');
            itemContainer.appendChild(itemName);
            itemContainer.appendChild(itemDescription);
            itemContainer.appendChild(itemPrice);
            itemContainer.appendChild(itemImg);
            content.appendChild(itemContainer);
        }
    }

    const header = document.createElement('h1');
    header.textContent = 'Our Menu';
    content.appendChild(header);


    const specialties = document.createElement('h2');
    specialties.textContent = 'Pal\'s Specialty Pizzas';
    content.appendChild(specialties);

    const chickenGarlicRanch = new menuItem('Chicken Garlic Ranch', 'Garlic ranch sauce base, grilled chicken, green peppers, red onions', '$13.99', chickenGarlicRanchImg);
    chickenGarlicRanch.addToMenu();

    const baconCheeseburger = new menuItem('Bacon Cheeseburger Pizza ', 'Ground beef, bacon, onion, cheddar', '$12.99', baconCheeseburgerImg);
    baconCheeseburger.addToMenu();


    const pies = document.createElement('h2');
    pies.textContent = 'Pal\'s Pies';
    content.appendChild(pies);

    const margherita = new menuItem('Margherita', 'Fresh mozzarella cheese, basil, tomato sauce', '$10.99', margheritaImg);
    margherita.addToMenu();

    const pepperoni = new menuItem('Pepperoni', 'Mozzarella cheese, tomato sauce, pepperoni', '$11.49', pepperoniImg);
    pepperoni.addToMenu();

    const cheese = new menuItem('Cheese', 'Mozzarella cheese, tomato sauce', '$9.99', cheeseImg);
    cheese.addToMenu();


    const sides = document.createElement('h2');
    sides.textContent = 'Sides';
    content.appendChild(sides);

    const breadsticks = new menuItem('Cheesy Breadsticks', 'Garlic bread covered in mozzarella cheese, marinara dipping sauce', '$5.99', breadsticksImg);
    breadsticks.addToMenu();

    const wings = new menuItem('Buffalo Wings', 'Crispy chicken wings, buffalo sauce, ranch dipping sauce', '$8.99', wingsImg);
    wings.addToMenu();


    const drinks = document.createElement('h2');
    drinks.textContent = 'Drinks';
    content.appendChild(drinks);

    const fountainDrink = new menuItem('Fountain Drink', '20 oz. Coca-cola, Sprite, Dr. Pepper, Root Beer, or Lemonade', '$2.49', fountainDrinkImg);
    fountainDrink.addToMenu();

    const milkshake = new menuItem('Milkshake', 'Chocolate, Vanilla, or Strawberry', '$5.99', milkshakeImg);
    milkshake.addToMenu();
}