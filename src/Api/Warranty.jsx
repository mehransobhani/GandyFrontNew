import {BaseUrl} from '../env';
import {refreshToken, signout} from "./Auth";
export async function getWarranty(page) {
    const response = await fetch(BaseUrl + "warranty/findAll/"+page,
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
            getWarranty(page);
        }
    }

    return response.json();
}export async function insertWarranty(product,regWarranty) {


    const response = await fetch(BaseUrl + "warranty/add",
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    product: {id:product},
                    regWarranty: {id:regWarranty},

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
            insertWarranty(product,regWarranty);
        }
    }
    return response;
}
export async function editWarranty(product,regWarranty,id) {


    const response = await fetch(BaseUrl + "warranty/add",
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    product: {id:product},
                    regWarranty: {id:regWarranty},
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
            insertWarranty(product,regWarranty);
        }
    }
    return response;
}
export async function removeWarranty(id) {
    const response = await fetch(BaseUrl + "warranty/deleteById/"+id,
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
            removeWarranty(id);
        }
    }
    return response;
}

export async function findWarrantyByproductName(name) {
    const response = await fetch(BaseUrl + "warranty/findWarrantyByproductName",
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
            findWarrantyByproductName(name);
        }
    }
    return response.json();
}
export async function findRegWarrantyByWords(name) {
    const response = await fetch(BaseUrl + "regWarranty/findRegWarrantyByWords",
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
            findRegWarrantyByWords(name);
        }
    }
    return response.json();
}
export async function getProductByWords(name) {
    const response = await fetch(BaseUrl + "product/getProductByWords",
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
            getProductByWords(name);
        }
    }
    return response.json();
}
