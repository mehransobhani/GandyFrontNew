import {BaseUrl} from '../env';
import {refreshToken, signout} from "./Auth";
export async function getAttributeName(page) {
    const response = await fetch(BaseUrl + "attributeType/findAll/"+page,
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
            getAttributeName(page);
        }
    }
    return response.json();
}export async function getAttributeTypeByWords(name) {
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
export async function insertAttributeName(attributeType) {
    const response = await fetch(BaseUrl + "attributeType/add",
        {
            method: 'POST',
            credentials: 'include',

            body: JSON.stringify(
                {
                    attributeType:attributeType
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
            insertAttributeName(attributeType);
        }
    }
    return response;
}export async function editAttributeName(attributeType ,id) {
    const response = await fetch(BaseUrl + "attributeType/add",
        {
            method: 'POST',
            credentials: 'include',

            body: JSON.stringify(
                {
                    attributeType:attributeType,
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
            editAttributeName(attributeType ,id);
        }
    }
    return response;
}export async function removeAttributeName(id) {
    const response = await fetch(BaseUrl + "attributeType/deleteById/"+id,
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
            removeAttributeName(id);
        }
    }
    return response;
}
