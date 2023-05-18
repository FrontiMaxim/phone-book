import './Button.scss';

const Button = (value, type) => {
    const buttonElement = document.createElement('button');
    buttonElement.className = 'button';
    buttonElement.type = type;
    buttonElement.innerHTML = value;
   
    return buttonElement;
}

export default Button;