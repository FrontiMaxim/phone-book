import './Card.scss';
import ButtonDelete from '../../shared/components/ButtonDelete/ButtonDelete';
import ButtonFavorite from '../../shared/components/ButtonFavorite/ButtonFavorite';
import Information from '../../entities/contact/ui/Information/Information';
import changeIsFavoriteСontact from '../../features/changeIsFavoriteСontact';
import removeContact from '../../features/removeContact';

const Card = (contact) => {

    const deleteElement = ButtonDelete();
    deleteElement.addEventListener('click', () => removeContact(contact.id));
   
    const favoriteElement = ButtonFavorite();
    favoriteElement.addEventListener('click', () => changeIsFavoriteСontact(contact));
    if(contact.isFavorite) favoriteElement.classList.add('favorite');
   
    const containerButtonElement = document.createElement('div');
    containerButtonElement.appendChild(deleteElement);
    containerButtonElement.appendChild(favoriteElement);
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