import './index.scss';

import { BASE_URL } from './environment';

import List from "./shared/components/List/List";
import Card from "./widgets/Card/Card";
import Search from './widgets/Search/Search';
import Button from './shared/components/Button/Button';
import ModalWindow from './shared/components/ModalWindow/ModalWindow';
import FormContact from './entities/contact/ui/FormContact/FormContact';

import getContacts from "./entities/contact/api/getContacts";
import sortContacts from "./features/sortContacts";
import openModalWindow from './features/openModalWindow';

import StoreContacts from './store/StoreContacts';

const root = document.getElementById('app');

const storeContacts = new StoreContacts();

const searchElement = Search();
root.appendChild(searchElement);

getContacts(BASE_URL)
.then(data => {
    storeContacts.setData(sortContacts([...data]));

    const elementsContact = storeContacts.getData().map(contact => Card(contact));

    root.appendChild(List(elementsContact));
});

const buttonElement = Button('Добавить', 'button');
buttonElement.addEventListener('click', openModalWindow);
root.appendChild(buttonElement);

const formContact = FormContact();
const modalWindowElement = ModalWindow(formContact);

root.appendChild(modalWindowElement);
