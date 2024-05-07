import {BaseUrl} from '../env';
import {refreshToken, signout} from "./Auth";
export async function getSlider(page) {
    const response = await fetch(BaseUrl + "slider/getAll/"+page,
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
            getSlider(page);
        }
    }

    return response.json();
}
export async function insertSlider(image,url,productType,productTag,attributeOption) {
    let body=JSON.stringify(
        {
            image:image.name,
            url:url,
            productType:{id:productType},
            productTag:{id:productTag},
            attributeOption:{id:attributeOption}
        }
    );
    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append("model", body);

    const response = await fetch(BaseUrl + "slider/add",
        {
            method: 'POST',
            credentials: 'include',
            body:formdata,
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
            insertSlider(image,url,productType,productTag,attributeOption);
        }
    }
    return response;
}
export async function editSlider(image,url,productType,productTag,attributeOption,id) {
    let body=JSON.stringify(
        {
            image:image.name,
            url:url,
            productType:{id:productType},
            productTag:{id:productTag},
            attributeOption:{id:attributeOption},
            id:id
        }
    );
    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append("model", body);

    const response = await fetch(BaseUrl + "slider/add",
        {
            method: 'POST',
            credentials: 'include',
            body:formdata,
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
            editSlider(image,url,productType,productTag,attributeOption,id);
        }
    }
    return response;
}
export async function removeSlider(id) {
    const response = await fetch(BaseUrl + "slider/deleteById/"+id,
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
            removeSlider(id);
        }
    }
    return response;
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
    return response;
}
export async function getAttributeTypeByWords(name) {
    const response = await fetch(BaseUrl + "attributeType/getAttributeTypeByWords",
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
            getAttributeTypeByWords(name);
        }
    }
    return response;
}
export async function getAttributeOptionByAT(id) {
    const response = await fetch(BaseUrl + "attributeOption/getAttributeOptionByAT/"+id,
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
            getAttributeOptionByAT(id);
        }
    }
    return response;
}

