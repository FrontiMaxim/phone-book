const closeModalWindow = () => {
    const modalWindowElement = document.querySelector('.modal_window');

    modalWindowElement.querySelector('form').reset();

    modalWindowElement.querySelectorAll('.error').forEach(error => error.classList.remove('error-open'));
    
    modalWindowElement.classList.remove('modal_window-open');
}

export default closeModalWindow;