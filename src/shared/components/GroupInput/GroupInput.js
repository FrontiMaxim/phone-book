import './GroupInput.scss';

const GroupInput = (label, name, placeholder = '', maxLength = 20) => {
    const groupInputElement = document.createElement('div');
    groupInputElement.className = 'group_input';
    groupInputElement.id = `group_input_${name}`;

    const labelElement = document.createElement('label');
    labelElement.className = 'label';
    labelElement.innerHTML = label;

    const inputElement = document.createElement('input');
    inputElement.name = name;
    inputElement.placeholder = placeholder;
    inputElement.className = 'input';
    inputElement.maxLength = maxLength;

    const errorElement = document.createElement('div');
    errorElement.className = 'error';

    groupInputElement.appendChild(labelElement);
    groupInputElement.appendChild(inputElement);
    groupInputElement.appendChild(errorElement);

    return groupInputElement;
    
}

export default GroupInput;