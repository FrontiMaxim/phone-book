import updateContact from "../entities/contact/api/updateContact";
import sortContacts from "./sortContacts";
import List from "../shared/components/List/List";
import Card from "../widgets/Card/Card";
import StoreContacts from "../store/StoreContacts";

const changeIsElectСontact = async (contact) => {

    const storeContacts = new StoreContacts();

    const body = {
        ...contact
    };

    body.isElected = !body.isElected;
   
    const response = await updateContact(`http://localhost:9001/contacts/${body.id}`, body);
    
    if(response.status === 200) {

        const filterContacts = storeContacts.getData().filter(contact => contact.id !== body.id);

        storeContacts.setData(sortContacts([body, ...filterContacts]));
    
        const elementsContact = storeContacts.getData().map(contact => Card(contact));
    
        document.querySelector('.list').replaceWith(List(elementsContact));
    }
}

export default changeIsElectСontact;