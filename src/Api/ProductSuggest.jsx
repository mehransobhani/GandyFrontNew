import {BaseUrl} from "../env";
import {refreshToken, signout} from "./Auth";

export async function getProductSuggest(page) {
    const response = await fetch(BaseUrl + "psug/getAll/"+page,
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    if(response.status==408)
    {
        let  refreshTokens=await refreshToken()
        if(refreshTokens.status==20||refreshTokens.status==400||refreshTokens.status==408) {
            let  signouts=await signout()
            window.location.href="/login";
        }
        else {
            getProductSuggest(page);
        }
    }
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
    if(response.status==408)
    {
        let  refreshTokens=await refreshToken()
        if(refreshTokens.status==20||refreshTokens.status==400||refreshTokens.status==408) {
            let  signouts=await signout()
            window.location.href="/login";
        }
        else {
            insertProductSuggest(productId,createAt,expireAt);
        }
    }
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
    if(response.status==408)
    {
        let  refreshTokens=await refreshToken()
        if(refreshTokens.status==20||refreshTokens.status==400||refreshTokens.status==408) {
            let  signouts=await signout()
            window.location.href="/login";
        }
        else {
            editProductSuggest(id,productId,createAt,expireAt);
        }
    }
return response;
}

export async function removeProductSuggest(id) {
    const response = await fetch(BaseUrl + "psug/delete",
        {
            method: 'POST',
            credentials: 'include',
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
    if(response.status==408)
    {
        let  refreshTokens=await refreshToken()
        if(refreshTokens.status==20||refreshTokens.status==400||refreshTokens.status==408) {
            let  signouts=await signout()
            window.location.href="/login";
        }
        else {
            removeProductSuggest(id);
        }
    }
    return response;
}
export async function searchProductSuggest(name) {
    const response = await fetch(BaseUrl + "pcount/getProductByWords",
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
    if(response.status==408)
    {
        let  refreshTokens=await refreshToken()
        if(refreshTokens.status==20||refreshTokens.status==400||refreshTokens.status==408) {
            let  signouts=await signout()
            window.location.href="/login";
        }
        else {
            searchProductSuggest(name);
        }
    }
    return response.json();
}
