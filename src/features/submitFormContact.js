import { BASE_URL } from "../environment";

import createContact from "../entities/contact/api/createContact";
import closeModalWindow from "./closeModalWindow";
import sortContacts from "./sortContacts";
import validateFormContact from "./validateFormContact";

import StoreContacts from "../store/StoreContacts";

import Card from "../widgets/Card/Card";
import List from "../shared/components/List/List";

const submitFormContact = async (event) => {
    event.preventDefault();
    
    const contact = {
        id: Date.now(),
        name: document.getElementById('group_input_name').querySelector('input').value,
        phone: document.getElementById('group_input_phone').querySelector('input').value,
        isFavorite: document.getElementById('group_checkbox_isFavorite').querySelector('input').checked
    };

    const isValid = validateFormContact(contact);

    if(isValid) {
        const status = (await createContact(BASE_URL, contact)).status;
        if (status === 201) closeModalWindow();

        const storeContacts = new StoreContacts();

        let contacts = storeContacts.getData();        
        contacts.push(contact);
        contacts = sortContacts(contacts);

        storeContacts.setData(contacts);

        const elementsContact = contacts.map(contact => Card(contact));
    
        document.querySelector('.list').replaceWith(List(elementsContact));
    }
}

export default submitFormContact;