import {BaseUrl} from '../env';
import {refreshToken, signout} from "./Auth";
export async function getProductBox(page) {
    const response = await fetch(BaseUrl + "pbox/getAll/"+page,
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
            getProductBox(page);
        }
    }

    return response.json();
}
export async function insertProductBox(boxNum,productCount) {


    const response = await fetch(BaseUrl + "pbox/add",
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    boxNum: boxNum,
                    productCount : {id:productCount}
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
            insertProductBox(boxNum,productCount);
        }
    }
    return response;
}
export async function editProductBox(boxNum,productCount,id) {
    const response = await fetch(BaseUrl + "pbox/add",
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    boxNum: boxNum,
                    productCount : {id:productCount},
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
            editProductBox(boxNum,productCount,id);
        }
    }
    return response;
}
export async function removeProductBox(id) {
    const response = await fetch(BaseUrl + "pbox/deleteById/"+id,
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
            removeProductBox(id);
        }
    }
    return response;
}

export async function getProductByWords(name) {
    const response = await fetch(BaseUrl + "pcount/getProductByWords",
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
    return response;
}

