import {BaseUrl} from "../env";

export async function getAttributeSelect(page) {
    const response = await fetch(BaseUrl + "attributeOption/findAll/"+page,
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response.json();
}

export async function insertAttributeSelect(attributeOption,attributeType) {
    const response = await fetch(BaseUrl + "attributeOption/add",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    attributeOption:attributeOption,
                    attributeType:{
                        id:attributeType
                    }
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}

export async function editAttributeSelect(attributeOption,attributeType ,id) {
    const response = await fetch(BaseUrl + "attributeOption/add",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    id:id,
                    attributeOption:attributeOption,
                    attributeType:{
                        id:attributeType
                    }
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}

export async function removeAttributeSelect(id) {
    const response = await fetch(BaseUrl + "attributeOption/deleteById/"+id,
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
export async function getAttributeTypeByWords(name) {
    const response = await fetch(BaseUrl + "attributeType/getAttributeTypeByWords",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    name:name
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response.json();
}
export async function searchAttributeOption(name) {
    const response = await fetch(BaseUrl + "attributeOption/searchAttributeOption",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    name:name
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response.json();
}
