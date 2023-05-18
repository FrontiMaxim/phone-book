import './Search.scss';
import findСontact from '../../features/findContact';

const Search = () => {

    const searchElement = document.createElement('input');
    searchElement.type = 'search';
    searchElement.addEventListener('input', findСontact);

    return searchElement;
}

export default Search;