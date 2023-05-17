import './index.scss';
import List from "./shared/components/List/List";
import Card from "./widgets/Card/Card";
import getContacts from "./entities/contact/api/getContacts";
import sortContacts from "./features/sortContacts";
import StoreContacts from './store/StoreContacts';

const root = document.getElementById('app');
const storeContacts = new StoreContacts();

getContacts('http://localhost:9001/contacts')
.then(data => {
    storeContacts.setData(sortContacts([...data]));

    const elementsContact = storeContacts.getData().map(contact => Card(contact));

    root.appendChild(List(elementsContact));
});
