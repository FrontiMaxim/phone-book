import './ButtonDelete.scss';

const ButtonDelete = () => {
    const buttonDeleteElement = document.createElement('div');
    buttonDeleteElement.classList.add('btn', 'btn_delete');
   
    return buttonDeleteElement;
}

export default ButtonDelete;