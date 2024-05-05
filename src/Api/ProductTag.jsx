import {BaseUrl} from '../env';
import {refreshToken, signout} from "./Auth";
export async function getProductTag(page) {
    const response = await fetch(BaseUrl + "ptag/getAll/"+page,
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
            getProductTag(page);
        }
    }

    return response.json();
}
export async function insertProductTag(product , tag) {
    const response = await fetch(BaseUrl + "ptag/add",
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    product: {id:product},
                    tag: {id:tag},
                }
            ),

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
            insertProductTag(product , tag);
        }
    }
    return response;
}
export async function editProductTag(product , tag ,id) {
    const response = await fetch(BaseUrl + "ptag/add",
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    product: {id:product},
                    tag: {id:tag},
                    id:id
                }
            ),

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
            editProductTag(product , tag ,id);
        }
    }
    return response;
}
 export async function removeProductTag(id) {
    const response = await fetch(BaseUrl + "ptag/deleteById/"+id,
        {
            method: 'DELETE',
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
            removeProductTag(id);
        }
    }
    return response;
}

export async function getProductTagByWords(name) {
    const response = await fetch(BaseUrl + "ptag/getProductTagByWords",
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
    if(response.status==408)
    {
        let  refreshTokens=await refreshToken()
        if(refreshTokens.status==20||refreshTokens.status==400||refreshTokens.status==408) {
            let  signouts=await signout()
            window.location.href="/login";
        }
        else {
            getProductTagByWords(name);
        }
    }
    return response.json();
}
export async function getProductByWords(name) {
    const response = await fetch(BaseUrl + "product/getProductByWords",
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
    if(response.status==408)
    {
        let  refreshTokens=await refreshToken()
        if(refreshTokens.status==20||refreshTokens.status==400||refreshTokens.status==408) {
            let  signouts=await signout()
            window.location.href="/login";
        }
        else {
            getProductByWords(name);
        }
    }
    return response.json();
}
export async function getTagByWords(name) {
    const response = await fetch(BaseUrl + "tag/getTagByWords",
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
    if(response.status==408)
    {
        let  refreshTokens=await refreshToken()
        if(refreshTokens.status==20||refreshTokens.status==400||refreshTokens.status==408) {
            let  signouts=await signout()
            window.location.href="/login";
        }
        else {
            getTagByWords(name);
        }
    }
    return response.json();
}

