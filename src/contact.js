import palImg from './pal.jpg';

export default function contact() {
    const content = document.querySelector('#content');

    const header = document.createElement('h1')
    header.textContent = 'Get In Touch With Pal';
    content.appendChild(header);

    const contactInfo = document.createElement('div');
    contactInfo.classList.toggle('contact-container');

    const phoneLabel = document.createElement('h3');
    phoneLabel.classList.toggle('contact-label');
    phoneLabel.textContent = 'Phone:'
    contactInfo.appendChild(phoneLabel);

    const phoneNumber = document.createElement('p');
    phoneNumber.innerText = '(555)555-5555';
    contactInfo.appendChild(phoneNumber);

    const emailLabel = document.createElement('h3');
    emailLabel.classList.toggle('contact-label');
    emailLabel.textContent = 'Email:';
    contactInfo.appendChild(emailLabel);

    const emailAddress = document.createElement('p');
    emailAddress.innerText = 'paltheman@notFake.com';
    contactInfo.appendChild(emailAddress);

    const contactImg = document.createElement('img');
    contactImg.src = palImg;
    contactInfo.appendChild(contactImg);

    content.appendChild(contactInfo);
};