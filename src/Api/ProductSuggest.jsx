import {BaseUrl} from "../env";

export async function getProductSuggest(page) {
    const response = await fetch(BaseUrl + "psug/getAll/"+page,
        {
            method: 'POST',
         
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response.json();
}
export async function insertProductSuggest(productId,createAt,expireAt) {
    const response = await fetch(BaseUrl + "psug/add",
        {
            method: 'POST',
            credentials: 'include',

            body: JSON.stringify(
                {
                    create_at:createAt,
                    expire_at:expireAt,
                    productCount:{
                            id:productId
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

export async function editProductSuggest(id,productId,createAt,expireAt) {
    const response = await fetch(BaseUrl + "psug/add",
    {
        method: 'POST',
        credentials: 'include',

        body: JSON.stringify(
            {
                id:id,
                create_at:createAt,
                expire_at:expireAt,
                productCount:{
                        id:productId
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

export async function removeProductSuggest(id) {
    const response = await fetch(BaseUrl + "psug/delete",
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
export async function searchProductSuggest(name) {
    const response = await fetch(BaseUrl + "pcount/getProductByWords",
        {
            method: 'POST',
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
