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

    contactpage.setAttribute('class', 'contactpage');
    contactDiv.setAttribute('id', 'contactdiv');
    messageDiv.setAttribute('id', 'messagediv');
    sendBtn.setAttribute('id', 'sendBtn');

    nameLabel.textContent = 'Name';
    numberLabel.textContent = 'Phone';
    messageLabel.textContent = 'Message';
    sendBtn.textContent = 'SEND';

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

    messageDiv.appendChild(form);
    contactDiv.appendChild(messageDiv);
    contactDiv.appendChild(infoDiv);
    contactpage.appendChild(contactDiv);
    
    content.appendChild(contactpage);
}