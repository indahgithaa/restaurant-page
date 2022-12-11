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

    contactpage.setAttribute('class', 'contactpage');
    contactDiv.setAttribute('id', 'contactdiv');
    messageDiv.setAttribute('id', 'messagediv');
    sendBtn.setAttribute('id', 'sendBtn');
    infoDiv.setAttribute('id', 'infoDiv');
    contactUs.setAttribute('id', 'ctcUs');
    contactUsDesc.setAttribute('id', 'ctcUsDesc');

    nameLabel.textContent = 'Name';
    numberLabel.textContent = 'Phone';
    messageLabel.textContent = 'Message';
    sendBtn.textContent = 'SEND';

    contactUs.textContent = 'Contact Us';
    contactUsDesc.innerHTML = 'Wanna give your feedback? It would be greatly appreciated. You can also check our menu availability via WhatsApp.';

    nameLabel.setAttribute('for', 'nameForm');
    numberLabel.setAttribute('for', 'numberForm');
    messageLabel.setAttribute('for', 'messageForm');

    form.appendChild(nameLabel);
    form.appendChild(nameForm);
    form.appendChild(numberLabel);
    form.appendChild(numberForm);
    form.appendChild(messageLabel);
    form.appendChild(messageForm);
    form.appendChild(sendBtn);

    infoDiv.appendChild(contactUs);
    infoDiv.appendChild(contactUsDesc);

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