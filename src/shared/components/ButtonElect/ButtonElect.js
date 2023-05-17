import './ButtonElect.scss';

const ButtonElect = () => {
    const buttonElectElement = document.createElement('div');
    buttonElectElement.classList.add('btn', 'btn_elect');
   
    return buttonElectElement;
}

export default ButtonElect;