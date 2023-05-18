import StoreContacts from "../store/StoreContacts";
import Card from "../widgets/Card/Card";
import List from "../shared/components/List/List";

const findСontact = (event) => {
    const string = event.target.value.toLowerCase();
    
    const storeContacts = new StoreContacts();
    let contacts = storeContacts.getData();
    contacts = contacts.filter(contact => contact.name.toLowerCase().includes(string));
    
    const elementsContact = contacts.map(contact => Card(contact));
    
    document.querySelector('.list').replaceWith(List(elementsContact));
}

export default findСontact;