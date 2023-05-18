const sortContacts = (contacts) => {
    const contactIsNotFavorite = [];
    const contactIsFavorite = [];

    contacts.forEach(contact => {
        if(contact.isFavorite) contactIsFavorite.push(contact);
        else contactIsNotFavorite.push(contact);
    });

    contactIsNotFavorite.sort((contact1, contact2) => sortByName(contact1.name, contact2.name));
    
    return [...contactIsFavorite, ...contactIsNotFavorite];
}

export default sortContacts;

const sortByName = (name1, name2) => {

    if(name1 < name2) return -1;

    if (name1 === name2) return 0;
}