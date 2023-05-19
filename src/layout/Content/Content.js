import './Content.scss';

const Content = (children) => {
    const contentElement = document.createElement('div');
    contentElement.className = 'content';

    if(children) contentElement.appendChild(children);

    return contentElement;
}

export default Content;