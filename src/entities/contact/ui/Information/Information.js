import './Information.scss';

const Information = (name, phone) => {

    const photoElement = document.createElement('div');
    photoElement.className = 'photo';

    const nameElement = document.createElement('span');
    nameElement.innerHTML = name;
    nameElement.className = 'name';

    const phoneElement = document.createElement('span');
    phoneElement.innerHTML = phone;
    phoneElement.className = 'phone';

    const informationElement = document.createElement('div');
    informationElement.appendChild(photoElement);
    informationElement.appendChild(nameElement);
    informationElement.appendChild(phoneElement);
    informationElement.className = 'information'; 

    return informationElement;
}

export default Information;