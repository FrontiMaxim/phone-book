import './Header.scss';

import IconPhone from './assets/phone.svg';

const Header = (children) => {
    const headerElement = document.createElement('div');
    headerElement.className = 'header';

    const iconPhone = document.createElement('img');
    iconPhone.src = IconPhone;
    iconPhone.className = 'icon_phone';
    
    headerElement.appendChild(iconPhone);

    if(children) headerElement.appendChild(children);

    return headerElement;
}

export default Header;