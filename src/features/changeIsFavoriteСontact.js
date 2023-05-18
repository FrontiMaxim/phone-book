import { BASE_URL } from "../environment";

import updateContact from "../entities/contact/api/updateContact";
import sortContacts from "./sortContacts";

import List from "../shared/components/List/List";
import Card from "../widgets/Card/Card";

import StoreContacts from "../store/StoreContacts";

const changeIsFavoriteСontact = async (contact) => {

    const storeContacts = new StoreContacts();

    const body = {
        ...contact
    };

    body.isFavorite = !body.isFavorite;
   
    const response = await updateContact(`${BASE_URL}${body.id}`, body);
    
    if(response.status === 200) {

        const filterContacts = storeContacts.getData().filter(contact => contact.id !== body.id);

        storeContacts.setData(sortContacts([body, ...filterContacts]));
    
        const elementsContact = storeContacts.getData().map(contact => Card(contact));
    
        document.querySelector('.list').replaceWith(List(elementsContact));
    }
}

export default changeIsFavoriteСontact;