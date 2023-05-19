import './Button.scss';

const Button = (value, type, mode = 'default') => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('button');

    switch(mode) {
        case 'primary': 
            buttonElement.classList.add('primary');
            break;
        case 'default':
            buttonElement.classList.add('default');
            break;
    }
    buttonElement.type = type;
    buttonElement.innerHTML = value;
   
    return buttonElement;
}

export default Button;