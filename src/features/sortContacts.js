const sortContacts = (contacts) => {
    const contactIsNotElected = [];
    const contactIsElected = [];

    contacts.forEach(contact => {
        if(contact.isElected) contactIsElected.push(contact);
        else contactIsNotElected.push(contact);
    });

    contactIsNotElected.sort((contact1, contact2) => sortByName(contact1.name, contact2.name));
    
    return [...contactIsElected, ...contactIsNotElected];
}

export default sortContacts;

const sortByName = (name1, name2) => {

    if(name1 < name2) return -1;

    if (name1 === name2) return 0;
}