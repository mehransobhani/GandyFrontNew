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
export async function insertProductImage(product,image) {
    let body=JSON.stringify({
        img:image.name,
        product:{
            id:product
        }
    })

    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append("model", body);

    const response = await fetch(BaseUrl + "productImage/add",
        {
            method: 'POST',
            credentials: 'include',
            body: formdata,
        }
    )
    return response;
}
export async function editProductImage(product,image,id) {
    let body=JSON.stringify({
        id:id,
        img:image.name,
        product:{
            id:product
        }
    })
    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append("model", body);
    const response = await fetch(BaseUrl + "productImage/add",
        {
            method: 'POST',
            credentials: 'include',
            body: formdata,
        }
    )
    return response;
}
export async function removeProductImage(id) {
    const response = await fetch(BaseUrl + "productImage/deleteById/"+id,
        {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
