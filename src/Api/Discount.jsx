import {BaseUrl} from '../env';
import {refreshToken, signout} from "./Auth";
export async function getDiscount(page) {
    const response = await fetch(BaseUrl + "discount/getAll/"+page,
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
            getDiscount(page);
        }
    }

    return response.json();
}export async function insertDiscount(discount,create_at,expire_at) {

   
    const response = await fetch(BaseUrl + "discount/add",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    discount:discount,                   
                    create_at:create_at,                   
                    expire_at:expire_at,                   
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
            insertDiscount(discount,create_at,expire_at);
        }
    }
    return response;
}export async function editDiscount(discount,create_at,expire_at,id) {
  

    const response = await fetch(BaseUrl + "article/add",
        {
            method: 'POST',
            credentials: 'include', 
            body: JSON.stringify(
                {
                    discount:discount,
                    create_at:create_at,
                    expire_at:expire_at,
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
            editDiscount(discount,create_at,expire_at);
        }
    }
    return response;
}
export async function removeDiscount(id) {
    const response = await fetch(BaseUrl + "discount/deleteById/"+id,
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
            removeDiscount(id);
        }
    }
    return response;
}

export async function getDiscountByWords(name) {
    const response = await fetch(BaseUrl + "discount/getDiscountByWords",
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
            getDiscountByWords(name);
        }
    }
    return response;
}
