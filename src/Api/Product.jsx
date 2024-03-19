import { async } from "q";
import {BaseUrl} from "../env";


export async function getProduct(page) {
    const response = await fetch(BaseUrl + "product/getAll/"+page,
        {
            credentials: 'include',

            method: 'POST',
            body: JSON.stringify(
               
            ),
            headers: {
                "Content-Type": "application/json",
            }
            
        }
    )
    return response.json();
}

export async function searchProduct(name) {
    const response = await fetch(BaseUrl + "product/getProductByWords",
        {
            credentials: 'include',

            method: 'POST',
            body: JSON.stringify(
              { name:name}
            ),
            headers: {
                "Content-Type": "application/json",
            }
            
        }
    )
    return response.json();
}
export async function insertProduct(name,  description,  amazingOffer,  productType, brand) {
    const response = await fetch(BaseUrl + "product/add",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    AmazingOffer:amazingOffer,
                    id:0,
                    description:description,
                    name:name,
                    productType:{
                        id:productType.id
                    },
                    brand:{
                        id:brand.id
                    }
                }
            ),
            credentials: 'include',

            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}export async function editProduct(name,  description,  amazingOffer,  productType, brand ,id) {
    const response = await fetch(BaseUrl + "product/add",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    AmazingOffer:amazingOffer,
                    id:id,
                    description:description,
                    name:name,
                    productType:{
                        id:productType.id
                    },
                    brand:{
                        id:brand.id
                    }
                }
            ),
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}export async function removeProduct(id) {
    const response = await fetch(BaseUrl + "product/delete",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    id:id
                }
            ),
            credentials: 'include',

            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}

export async function getProductTypeByWords(name){
     const response = await fetch(BaseUrl + "ptype/getProductTypeByWords",
    {
        method: 'POST',
        body: JSON.stringify(
            {
                name:name
            }
        ),
        credentials: 'include',

        headers: {
            "Content-Type": "application/json",
        }
    }
)
return response.json();
}

export async function getBrandByWords(name){
    const response = await fetch(BaseUrl + "brand/getBrandByWords",
   {
       method: 'POST',
       body: JSON.stringify(
           {
               name:name
           }
       ),
       credentials: 'include',

       headers: {
           "Content-Type": "application/json",
       }
   }
)
return response.json();
}