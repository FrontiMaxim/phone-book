import './GroupCheckBox.scss';

const GroupCheckBox = (label, name, value) => {
    const groupCheckBoxElement = document.createElement('div');
    groupCheckBoxElement.className = 'group_checkbox';
    groupCheckBoxElement.id = `group_checkbox_${name}`;

    const labelElement = document.createElement('label');
    labelElement.className = 'label';
    labelElement.innerHTML = label;

    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.name = name;
    checkboxElement.className = 'checkbox';
    checkboxElement.value = value;

    
    groupCheckBoxElement.appendChild(labelElement);
    groupCheckBoxElement.appendChild(checkboxElement);

    return groupCheckBoxElement;
}

export default GroupCheckBox;