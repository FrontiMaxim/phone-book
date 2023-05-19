import './Search.scss';

import IconGlass from './assets/glass.svg';

import findСontact from '../../features/findContact';

const Search = () => {

    const wrapperSearchElement = document.createElement('div');
    wrapperSearchElement.className = 'wrapper_search';

    const iconElement = document.createElement('img');
    iconElement.src = IconGlass;
    iconElement.className = 'icon_glass';

    const searchElement = document.createElement('input');
    searchElement.type = 'search';
    searchElement.className = 'search';
    searchElement.addEventListener('input', findСontact);

    wrapperSearchElement.appendChild(iconElement);
    wrapperSearchElement.appendChild(searchElement);

    return wrapperSearchElement;
}

export default Search;