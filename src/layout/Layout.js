import './Layout.scss';

const Layout = (header, content, footer) => {
    const layoutElement = document.createElement('div');
    layoutElement.className = 'layout';

    layoutElement.appendChild(header);
    layoutElement.appendChild(content);
    layoutElement.appendChild(footer);

    return layoutElement;
}

export default Layout;