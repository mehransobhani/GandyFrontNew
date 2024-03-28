import {BaseUrl} from "../env";
export async function getProductType(page) {
    const response = await fetch(BaseUrl + "ptype/getAllProductType/"+page,
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
export async function removeProductType(id) {
    const response = await fetch(BaseUrl + "ptype/deleteById/"+id,
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
export async function editProductType(name,parentProductType,id) {
    const response = await fetch(BaseUrl + "ptype/add",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    id:id,
                    name:name,
                    parentProductType:{
                        id:parentProductType
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
export async function insertProductType(name,parentProductType) {
    const response = await fetch(BaseUrl + "ptype/add",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    name:name,
                    parentProductType:{
                        id:parentProductType
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
export async function getProductTypeByWords(name) {
    const response = await fetch(BaseUrl + "ptype/getProductTypeByWords",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    name:name,
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response.json();
}
