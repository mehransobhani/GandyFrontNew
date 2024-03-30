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
    let products= {product: {id:product}}
    const formdata = new FormData();
    formdata.append("image", image);
    formdata.append("product", products);

    const response = await fetch(BaseUrl + "productImage/add",
        {
            method: 'POST',
            credentials: 'include',
            body: formdata,
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }
    )
    return response;
}
export async function editProductImage(product,image,id) {
    let products= {product: {id:product}}

    const formdata = new FormData();
    formdata.append("image", image);
    formdata.append("product", products);
    formdata.append("id", id);
    const response = await fetch(BaseUrl + "productImage/add",
        {
            method: 'POST',
            credentials: 'include',
            body: formdata,
            headers: {
                "Content-Type": "multipart/form-data",
            }
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
