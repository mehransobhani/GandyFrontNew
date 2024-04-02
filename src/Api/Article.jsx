import {BaseUrl} from '../env';
import {refreshToken, signout} from "./Auth";
export async function getArticle(page) {
    const response = await fetch(BaseUrl + "article/getAll/"+page,
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
            getArticle(page);
        }
    }

    return response.json();
}export async function insertArticle(title,description,url,content,image) {

    let body=JSON.stringify({
        title:title,
        description:description,
        url:url,
        content:content,
        image:image.name,
    })
    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append("model", body);

    const response = await fetch(BaseUrl + "article/add",
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
            insertArticle(title,description,url,content,image);
        }
    }
    return response;
}export async function editArticle(title,description,url,content,image,id) {
    let body=JSON.stringify({
        id:id,
        title:title,
        description:description,
        url:url,
        content:content,
         image:image.name,
    })
    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append("model", body);

    const response = await fetch(BaseUrl + "article/add",
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
            editArticle(title,description,url,content,image,id);
        }
    }
    return response;
}export async function removeArticle(id) {
    const response = await fetch(BaseUrl + "article/delete/"+id,
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
            removeArticle(id);
        }
    }
    return response;
}

export async function getArticleByWords(name) {
    const response = await fetch(BaseUrl + "article/getArticleByWords",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    name:name
                }
            ),
            headers: {
                "Content-Type": "application/json"
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
            getArticleByWords(name);
        }
    }
    return response.json();
}
