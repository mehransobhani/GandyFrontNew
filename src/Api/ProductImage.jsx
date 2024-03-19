import {BaseUrl} from "../env";

export async function getProductImage(page) {
    const response = await fetch(BaseUrl + "productImage/getAllProductImage/"+page,
        {
            credentials: 'include',

            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response.json();
}
export async function insertProductImage() {
    const formdata = new FormData();
    formdata.append("image", "");

    const response = await fetch(BaseUrl + "productImage/add",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
export async function editProductImage() {
    const response = await fetch(BaseUrl + "productImage/add",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
export async function removeProductImage(id) {
    const response = await fetch(BaseUrl + "productImage/deleteById/"+id,
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
