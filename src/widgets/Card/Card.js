import './Card.scss';
import ButtonDelete from '../../shared/components/ButtonDelete/ButtonDelete';
import ButtonElect from '../../shared/components/ButtonElect/ButtonElect';
import Information from '../../entities/contact/ui/Information/Information';
import changeIsElectСontact from '../../features/changeIsElectСontact';

const Card = (contact) => {

    const deleteElement = ButtonDelete();
    // deleteElement.addEventListener('click', () => handleDelete());
   
    const electedElement = ButtonElect();
    electedElement.addEventListener('click', () => changeIsElectСontact(contact));
    if(contact.isElected) electedElement.classList.add('elected');
   
    const containerButtonElement = document.createElement('div');
    containerButtonElement.appendChild(deleteElement);
    containerButtonElement.appendChild(electedElement);
    containerButtonElement.className = 'container_button';

    const informationElement = Information(contact.name, contact.phone);
    informationElement.classList.add('information_wrapper');
    
    const cardElement = document.createElement('div');
    cardElement.appendChild(informationElement);
    cardElement.appendChild(containerButtonElement);
    cardElement.className = 'card';
    cardElement.id = contact.id;

    return cardElement;
}

export default Card;