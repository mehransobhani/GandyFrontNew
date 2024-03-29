import {BaseUrl} from "../env";

export async function getProductInfo(page) {
    const response = await fetch(BaseUrl + "pcount/getAllProductCount/"+page,
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
export async function insertProductInfo(price,color,colorHex,count,discount,product,productImage,main) {
    const response = await fetch(BaseUrl + "pcount/add",
        {
            method: 'POST', 
            credentials: 'include',
            body: JSON.stringify(
                {
                    price:price,
                    color:color,
                    colorHex:colorHex,
                    count:count,
                    discount:discount,
                    product:{
                        id:product
                    },
                    productImage:{
                        id:productImage
                    },
                    main:main
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
export async function editProductInfo(price,color,colorHex,count,discount,product,productImage,main,id) {
    const response = await fetch(BaseUrl + "pcount/add",
        {
            method: 'POST', 
            credentials: 'include',
            body: JSON.stringify(
                {
                    price:price,
                    color:color,
                    colorHex:colorHex,
                    count:count,
                    discount:discount,
                    product:{
                        id:product
                    },
                    productImage:{
                        id:productImage
                    },
                    main:main ,
                    id:id
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
export async function removeProductInfo(id) {
    const response = await fetch(BaseUrl + "pcount/delete",
        {
            method: 'POST', 
            body: JSON.stringify(
                {
                    id:id
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
export async function getProductImageByWords(name) {
    const response = await fetch(BaseUrl + "productImage/getProductImageByWords",
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
