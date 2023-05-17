class StoreContacts {

    constructor() {

        if(StoreContacts.exists) {
            return StoreContacts.instance;
        }

        StoreContacts.instance = this;
        StoreContacts.exists = true;

        this.data = [];
    }

    getData() {
        return this.data;
    }

    setData(value) {
        this.data = value;
    }
}

export default StoreContacts;