const closeModalWindow = () => {
    const modalWindowElement = document.querySelector('.modal_window');

    modalWindowElement.querySelector('form').reset();
    
    modalWindowElement.classList.remove('modal_window-open');
}

export default closeModalWindow;