import {BaseUrl} from "../env";
import {refreshToken, signout} from "./Auth";
export async function getProductAttribute(page) {
    const response = await fetch(BaseUrl + "pconfig/findAll/"+page,
        {
            credentials: 'include',
            method: 'POST',
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
            getProductAttribute(page);
        }
    }
    return response.json();
}
export async function insertProductAttribute(attributeOption,product) {
    const response = await fetch(BaseUrl + "pconfig/add",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    attributeOption:{
                        id:attributeOption
                    },
                    product:{
                        id:product
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
            insertProductAttribute(attributeOption,product);
        }
    }
    return response;
}
export async function editProductAttribute(attributeOption,product,id) {
    const response = await fetch(BaseUrl + "pconfig/add",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    attributeOption:{
                        id:attributeOption
                    },
                    product:{
                        id:product
                    },
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
            editProductAttribute(attributeOption,product,id);
        }
    }
    return response;
}
export async function removeProductAttribute(id) {
    const response = await fetch(BaseUrl + "pconfig/deleteById"+id,
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
            removeProductAttribute(id);
        }
    }
    return response;
}
export async function searchPConfigByPName(name) {
    const response = await fetch(BaseUrl + "pconfig/searchPConfigByPName",
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
            searchPConfigByPName(name);
        }
    }
    return response;
}
export async function searchAttributeOption(name) {
    const response = await fetch(BaseUrl + "attributeOption/searchAttributeOption",
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
            searchAttributeOption(name);
        }
    }
    return response.json();
}
export async function getProductByWords(name) {
    const response = await fetch(BaseUrl + "pconfig/getProductByWords",
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
            getProductByWords(name);
        }
    }
    return response;
}
