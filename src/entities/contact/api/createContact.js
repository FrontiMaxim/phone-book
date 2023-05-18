import { POST } from "../../../shared/const/httpMethods";

const createContact = async(url, body) => {

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: POST,
        body: JSON.stringify(body),
    });

    return response;
}

export default createContact;