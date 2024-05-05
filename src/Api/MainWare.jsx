import {BaseUrl} from '../env';
import {refreshToken, signout} from "./Auth";

export async function getMainWare(page) {
    const response = await fetch(BaseUrl + "mainWare/getAll/"+page ,
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    if (response.status == 408) {
        let refreshTokens = await refreshToken()
        if (refreshTokens.status == 20 || refreshTokens.status == 400 || refreshTokens.status == 408) {
            let signouts = await signout()
            window.location.href = "/login";
        } else {
            getMainWare(page);
        }
    }

    return response.json();
}

export async function insertMainWare(name, img, url, productType) {

    let body = JSON.stringify(
        {
            name: name,
            logo: img.name,
            url: url,
            productType: {id:productType}
        }
    );
    const formdata = new FormData();
    formdata.append("file", img);
    formdata.append("model", body);
    const response = await fetch(BaseUrl + "mainWare/add",
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body:formdata,
        }
    )
    if (response.status == 408) {
        let refreshTokens = await refreshToken()
        if (refreshTokens.status == 20 || refreshTokens.status == 400 || refreshTokens.status == 408) {
            let signouts = await signout()
            window.location.href = "/login";
        } else {
            insertMainWare(name, img, url, productType);
        }
    }
    return response;
}
export async function editMainWare(name, img, url, productType,id) {

    let body = JSON.stringify(
        {
            id: id,
            name: name,
            logo: img.name,
            url: url,
            productType: {id:productType}
        }
    );
    const formdata = new FormData();
    formdata.append("file", img);
    formdata.append("model", body);
    const response = await fetch(BaseUrl + "mainWare/add",
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body:formdata,
        }
    )
    if (response.status == 408) {
        let refreshTokens = await refreshToken()
        if (refreshTokens.status == 20 || refreshTokens.status == 400 || refreshTokens.status == 408) {
            let signouts = await signout()
            window.location.href = "/login";
        } else {
            editMainWare(name, img, url, productType,id);
        }
    }
    return response;
}
export async function removeMainWare(id) {
    const response = await fetch(BaseUrl + "mainWare/deleteById/" + id,
        {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    if (response.status == 408) {
        let refreshTokens = await refreshToken()
        if (refreshTokens.status == 20 || refreshTokens.status == 400 || refreshTokens.status == 408) {
            let signouts = await signout()
            window.location.href = "/login";
        } else {
            removeMainWare(id);
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
            getTagByWords(name);
        }
    }
    return response.json();
}

