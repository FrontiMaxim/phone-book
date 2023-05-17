import './List.scss';

const List = (elements) => {
    const listElement = document.createElement('div');
    listElement.className = 'list';
    elements.forEach(element => listElement.appendChild(element));

    return listElement;
}

export default List;