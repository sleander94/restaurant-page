import palImg from './pal.jpg';

export default function contact() {
    const content = document.querySelector('#content');

    const header = document.createElement('h1')
    header.textContent = 'Get In Touch With Pal';
    content.appendChild(header);

    const contactInfo = document.createElement('div');
    contactInfo.classList.toggle('contact-info');

    const title = document.createElement('h3');
    title.innerText = 'General Manager: George "Pal" Costanza';
    contactInfo.appendChild(title);

    const phoneNumber = document.createElement('h4');
    phoneNumber.innerText = 'Phone: (555)555-5555';
    contactInfo.appendChild(phoneNumber);

    const emailAddress = document.createElement('h4');
    emailAddress.innerText = 'Email: paltheman@notFake.com';
    contactInfo.appendChild(emailAddress);

    const contactImg = document.createElement('img');
    contactImg.src = palImg;
    contactInfo.appendChild(contactImg);

    content.appendChild(contactInfo);
};