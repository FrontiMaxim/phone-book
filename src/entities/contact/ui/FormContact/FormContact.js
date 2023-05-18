import './FormContact.scss';

import submitFormContact from "../../../../features/submitFormContact";

import Button from "../../../../shared/components/Button/Button";
import GroupCheckBox from "../../../../shared/components/GroupCheckBox/GroupCheckBox";
import GroupInput from "../../../../shared/components/GroupInput/GroupInput";

const FormContact = () => {
    const formContactElement = document.createElement('form');
    formContactElement.className = 'form_contact';

    const inputName = GroupInput('Name', 'name', 'Maxim');
    const inputPhone = GroupInput('Phone', 'phone', '89999999999');
    const checkbox = GroupCheckBox('Favorites', 'isFavorite', true);
    const submitElement = Button('Создать', 'submit');

    formContactElement.appendChild(inputName);
    formContactElement.appendChild(inputPhone);
    formContactElement.appendChild(checkbox);
    formContactElement.appendChild(submitElement);

    formContactElement.addEventListener('submit', submitFormContact);

    return formContactElement;
}

export default FormContact;