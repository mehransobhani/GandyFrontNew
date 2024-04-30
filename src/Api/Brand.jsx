import {BaseUrl} from '../env';
import {refreshToken, signout} from "./Auth";
export async function getBrand(page) {
    const response = await fetch(BaseUrl + "brand/all/"+page,
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
            getBrand(page);
        }
    }

    return response.json();
}export async function insertBrand(name) {

   
    const response = await fetch(BaseUrl + "brand/add",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    name:name                   
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
            insertBrand(name);
        }
    }
    return response;
}export async function editBrand(name,id) {
  

    const response = await fetch(BaseUrl + "article/add",
        {
            method: 'POST',
            credentials: 'include', 
            body: JSON.stringify(
                {
                   name:name,
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
            editBrand(name,id);
        }
    }
    return response;
}
export async function removeBrand(id) {
    const response = await fetch(BaseUrl + "brand/delete/"+id,
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
            removeBrand(id);
        }
    }
    return response;
}

export async function getBrandByWords(name) {
    const response = await fetch(BaseUrl + "brand/getBrandByWords",
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
            getBrandListByMobile(mobile);
        }
    }
    return response;
}
