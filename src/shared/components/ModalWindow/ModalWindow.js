import closeModalWindow from '../../../features/closeModalWindow';
import './ModalWindow.scss';

const ModalWindow = (children) => {
    const modalWindowElement = document.createElement('div');
    modalWindowElement.className = 'modal_window';
    modalWindowElement.addEventListener('click', (event) => {
        if(event.target.className.includes('modal_window')) closeModalWindow();
    });

    children.className = 'modal_window_children';

    modalWindowElement.appendChild(children);
   
    return modalWindowElement;
}

export default ModalWindow;