import { PUT } from "../../../shared/const/httpMethods";

const updateContact = async(url, body) => {

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: PUT,
        body: JSON.stringify(body),
    });

    return response;
}

export default updateContact;