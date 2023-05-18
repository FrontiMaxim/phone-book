import { BASE_URL } from "../environment";

import deleteContact from '../entities/contact/api/deleteContact'

import StoreContacts from '../store/StoreContacts';

const removeContact = async (id) => {
    const status = (await deleteContact(`${BASE_URL}${id}`)).status;

    if(status === 200) {
        const storeContacts = new StoreContacts();

        storeContacts.setData(storeContacts.getData().filter(contact => contact.id !== id));

        document.getElementById(id).remove();
    }
}

export default removeContact;