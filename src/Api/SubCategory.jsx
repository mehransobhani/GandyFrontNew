import {BaseUrl} from '../env';
import {refreshToken, signout} from "./Auth";
export async function getSubCategory(page) {
    const response = await fetch(BaseUrl + "subcategory/findAllMenu/"+page,
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
            getSubCategory(page);
        }
    }

    return response.json();
}export async function insertSubCategory(subId,parentId) {


    const response = await fetch(BaseUrl + "subcategory/add",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    subId:subId,
                    parentId:parentId,

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
            insertSubCategory(subId,parentId);
        }
    }
    return response;
}export async function editSubCategory(subId,parentId,id) {


    const response = await fetch(BaseUrl + "subcategory/add",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    subId:subId,
                    parentId:parentId,
                    id:id,

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
            editSubCategory(subId,parentId,id);
        }
    }
    return response;
}
export async function removeSubCategory(id) {
    const response = await fetch(BaseUrl + "subcategory/delete/"+id,
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
            removeSubCategory(id);
        }
    }
    return response;
}


export async function getCategoryByWords(name) {
    const response = await fetch(BaseUrl + "category/getCategoryByWords",
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
            getSubCategoryListByMobile(mobile);
        }
    }
    return response;
}
