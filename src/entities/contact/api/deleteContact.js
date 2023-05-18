import { DELETE } from "../../../shared/const/httpMethods";

const deleteContact = async(url) => {

    const response = await fetch(url, {
        method: DELETE,  
    });

    return response;
}

export default deleteContact;