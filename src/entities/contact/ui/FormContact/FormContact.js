import './FormContact.scss';

import submitFormContact from "../../../../features/submitFormContact";

import Button from "../../../../shared/components/Button/Button";
import GroupCheckBox from "../../../../shared/components/GroupCheckBox/GroupCheckBox";
import GroupInput from "../../../../shared/components/GroupInput/GroupInput";

const FormContact = () => {
    const formContactElement = document.createElement('form');
    formContactElement.className = 'form_contact';

    const titleElement = document.createElement('div');
    titleElement.innerHTML = 'Add contact';
    titleElement.className = 'form_contact_title';

    const wrapperGroup = document.createElement('div');

    const inputName = GroupInput('Name', 'name', 'Maxim');
    inputName.classList.add('form_contact_wrapper_group');

    const inputPhone = GroupInput('Phone', 'phone', '89999999999');
    inputPhone.classList.add('form_contact_wrapper_group');
    
    const checkbox = GroupCheckBox('Favorites', 'isFavorite', true);
    checkbox.classList.add('form_contact_wrapper_group');

    const submitElement = Button('Создать', 'submit', 'primary');
    submitElement.classList.add('form_contact_sumbit');

    formContactElement.appendChild(titleElement);
    formContactElement.appendChild(inputName);
    formContactElement.appendChild(inputPhone);
    formContactElement.appendChild(checkbox);
    formContactElement.appendChild(submitElement);

    formContactElement.addEventListener('submit', submitFormContact);

    return formContactElement;
}

export default FormContact;