import pinImg from '../assets/pin.png';
import timeImg from '../assets/time.png';
import phoneImg from '../assets/call.png';
import fbImg from '../assets/facebook.png';
import igImg from '../assets/instagram.png';
import mailImg from '../assets/email.png';

export default function contactPage() {
    const content = document.querySelector('#content');

    const contactpage = document.createElement('div');
    const contactDiv = document.createElement('div');
    const messageDiv = document.createElement('div');
    const infoDiv = document.createElement('div');

    const form = document.createElement('form');
    const nameForm = document.createElement('input');
    const numberForm = document.createElement('input');
    const messageForm = document.createElement('textArea');
    const nameLabel = document.createElement('label');
    const numberLabel = document.createElement('label');
    const messageLabel = document.createElement('label');
    const sendBtn = document.createElement('button');

    const contactUs = document.createElement('h3');
    const contactUsDesc = document.createElement('p');
    const belowIcon = document.createElement('div');
    const fbIcon = document.createElement('img');
    const mailIcon = document.createElement('img');
    const igIcon = document.createElement('img');

    contactpage.setAttribute('class', 'contactpage');
    contactDiv.setAttribute('id', 'contactdiv');
    messageDiv.setAttribute('id', 'messagediv');
    sendBtn.setAttribute('id', 'sendBtn');
    infoDiv.setAttribute('id', 'infoDiv');
    contactUs.setAttribute('id', 'ctcUs');
    contactUsDesc.setAttribute('id', 'ctcUsDesc');
    igIcon.setAttribute('id', 'igIcon');
    mailIcon.setAttribute('id', 'mailIcon');
    fbIcon.setAttribute('id', 'fbIcon');
    belowIcon.setAttribute('id', 'belowIcon');

    nameLabel.textContent = 'Name';
    numberLabel.textContent = 'Phone';
    messageLabel.textContent = 'Message';
    sendBtn.textContent = 'SEND';

    contactUs.textContent = 'Contact Us';
    contactUsDesc.innerHTML = 'Wanna give your feedback? It would be greatly appreciated. You can also check our menu availability via WhatsApp.';
    fbIcon.src = fbImg;
    mailIcon.src = mailImg;
    igIcon.src = igImg;

    form.appendChild(nameLabel);
    form.appendChild(nameForm);
    form.appendChild(numberLabel);
    form.appendChild(numberForm);
    form.appendChild(messageLabel);
    form.appendChild(messageForm);
    form.appendChild(sendBtn);

    function createInfo(info) {
        const contact = document.createElement('div');
        const icon = document.createElement('img');
        const desc = document.createElement('p');

        icon.src = info.getIcon();
        desc.textContent = info.getInfo();

        contact.setAttribute('id', 'contact');

        contact.appendChild(icon);
        contact.appendChild(desc);

        infoDiv.appendChild(contact);
    }

    const InfoArr = [
        new Info(phoneImg, '+628123456789'),
        new Info(timeImg, '08.00 - 20.00'),
        new Info(pinImg, '18 Sudirman Street, Denpasar')
    ]

    infoDiv.appendChild(contactUs);
    infoDiv.appendChild(contactUsDesc);

    for (let i = 0; i < InfoArr.length; i++) {
        createInfo(InfoArr[i]);
    }

    belowIcon.appendChild(fbIcon);
    belowIcon.appendChild(igIcon);
    belowIcon.appendChild(mailIcon);
    infoDiv.appendChild(belowIcon);

    messageDiv.appendChild(form);
    contactDiv.appendChild(messageDiv);
    contactDiv.appendChild(infoDiv);
    contactpage.appendChild(contactDiv);
    
    content.appendChild(contactpage);
}

class Info {
    constructor(icon, info) {
        this.icon = icon;
        this.info = info;
    }

    getIcon = () => this.icon;
    getInfo = () => this.info;
}