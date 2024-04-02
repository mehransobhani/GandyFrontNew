import {BaseUrl} from "../env";
import {refreshToken, signout} from "./Auth";

export async function getAttributeSelect(page) {
    const response = await fetch(BaseUrl + "attributeOption/findAll/"+page,
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
            getAttributeSelect(page);
        }
    }
    return response.json();
}

export async function insertAttributeSelect(attributeOption,attributeType) {
    const response = await fetch(BaseUrl + "attributeOption/add",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    attributeOption:attributeOption,
                    attributeType:{
                        id:attributeType
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
            insertAttributeSelect(attributeOption,attributeType);
        }
    }
    return response;
}

export async function editAttributeSelect(attributeOption,attributeType ,id) {
    const response = await fetch(BaseUrl + "attributeOption/add",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    id:id,
                    attributeOption:attributeOption,
                    attributeType:{
                        id:attributeType
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
            editAttributeSelect(attributeOption,attributeType ,id);
        }
    }
    return response;
}

export async function removeAttributeSelect(id) {
    const response = await fetch(BaseUrl + "attributeOption/deleteById/"+id,
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
            removeAttributeSelect(id);
        }
    }
    return response;
}
export async function getAttributeTypeByWords(name) {
    const response = await fetch(BaseUrl + "attributeType/getAttributeTypeByWords",
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
            getAttributeTypeByWords(name);
        }
    }
    return response.json();
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
