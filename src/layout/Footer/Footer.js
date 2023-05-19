import './Footer.scss';

const Footer = (children) => {
    const footerElement = document.createElement('div');
    footerElement.className = 'footer';

    if(children) footerElement.appendChild(children);

    return footerElement
}

export default Footer;