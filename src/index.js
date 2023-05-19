import './index.scss';

import { BASE_URL } from './environment';

import List from "./shared/components/List/List";
import Card from "./widgets/Card/Card";
import Search from './widgets/Search/Search';
import Button from './shared/components/Button/Button';
import ModalWindow from './shared/components/ModalWindow/ModalWindow';
import FormContact from './entities/contact/ui/FormContact/FormContact';
import Header from './layout/Header/Header';
import Content from './layout/Content/Content';
import Footer from './layout/Footer/Footer';
import Layout from './layout/Layout';

import getContacts from "./entities/contact/api/getContacts";
import sortContacts from "./features/sortContacts";
import openModalWindow from './features/openModalWindow';

import StoreContacts from './store/StoreContacts';

const root = document.getElementById('app');

const storeContacts = new StoreContacts();

const searchElement = Search();
const headerElement = Header(searchElement);

let contentElement = Content();
 
const buttonElement = Button('Добавить', 'button', 'primary');
buttonElement.addEventListener('click', openModalWindow);
const footerElement = Footer(buttonElement);

const layoutElement = Layout(headerElement, contentElement, footerElement);
root.appendChild(layoutElement);

const formContact = FormContact();
const modalWindowElement = ModalWindow(formContact);
root.appendChild(modalWindowElement);

getContacts(BASE_URL)
.then(data => {
    storeContacts.setData(sortContacts([...data]));
}).finally(() => {

    const elementsContact = storeContacts.getData().map(contact => Card(contact));
    const listElement = List(elementsContact);
    contentElement = Content(listElement);
 
    document.querySelector('.content').replaceWith(contentElement);
});

