const validateFormContact = (contact) => {

    const errorInputNameElement = document.getElementById('group_input_name').querySelector('.error');
    const nameIsValid = contact.name !== '';
   
    if(!nameIsValid) {
        errorInputNameElement.innerHTML = 'Поле не может быть пустым'
        errorInputNameElement.classList.add('open');
    } else {
        errorInputNameElement.classList.remove('open');
    }

    const regexp = /^(\+7|8)([0-9]{10})/;
    const phoneIsValid = regexp.test(contact.phone);
    const errorInputPhoneElement = document.getElementById('group_input_phone').querySelector('.error');

    if(!phoneIsValid) {
        errorInputPhoneElement.innerHTML = 'Неверный формат номера телефона'
        errorInputPhoneElement.classList.add('open');
    } else {
        errorInputPhoneElement.classList.remove('open');
    }

    return nameIsValid && phoneIsValid;
}

export default validateFormContact;