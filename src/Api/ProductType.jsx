import {BaseUrl} from "../env";
import {refreshToken, signout} from "./Auth";
export async function getProductType(page) {
    const response = await fetch(BaseUrl + "ptype/getAllProductType/"+page,
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
            getProductType(page);
        }
    }
    return response.json();
}
export async function removeProductType(id) {
    const response = await fetch(BaseUrl + "ptype/deleteById/"+id,
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
            removeProductType(id);
        }
    }
    return response;
}
export async function editProductType(name,parentProductType,id) {
    const response = await fetch(BaseUrl + "ptype/add",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    id:id,
                    name:name,
                    parentProductType:{
                        id:parentProductType
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
            editProductType(name,parentProductType,id);
        }
    }
    return response;
}
export async function insertProductType(name,parentProductType) {
    const response = await fetch(BaseUrl + "ptype/add",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    name:name,
                    parentProductType:{
                        id:parentProductType
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
            insertProductType(name,parentProductType);
        }
    }
    return response;
}
export async function getProductTypeByWords(name) {
    const response = await fetch(BaseUrl + "ptype/getProductTypeByWords",
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
            getProductTypeByWords(name);
        }
    }
    return response.json();
}
