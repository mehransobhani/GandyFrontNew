import {BaseUrl} from "../env";
import {refreshToken, signout} from "./Auth";

export async function getProduct(page) {
    const response = await fetch(BaseUrl + "product/getAll/"+page,
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
            getProduct(page);
        }
    }
    return response.json();
}

export async function searchProduct(name) {
    const response = await fetch(BaseUrl + "product/getProductByWords",
        {
            credentials: 'include',

            method: 'POST',
            body: JSON.stringify(
              { name:name}
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
            searchProduct(name);
        }
    }
    return response.json();
}
export async function insertProduct(name,  description,  amazingOffer,  productType, brand) {
    const response = await fetch(BaseUrl + "product/add",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    AmazingOffer:amazingOffer,
                    id:0,
                    description:description,
                    name:name,
                    productType:{
                        id:productType.id
                    },
                    brand:{
                        id:brand.id
                    }
                }
            ),
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
            insertProduct(name,  description,  amazingOffer,  productType, brand);
        }
    }
    return response;
}export async function editProduct(name,  description,  amazingOffer,  productType, brand ,id) {
    const response = await fetch(BaseUrl + "product/add",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    AmazingOffer:amazingOffer,
                    id:id,
                    description:description,
                    name:name,
                    productType:{
                        id:productType.id
                    },
                    brand:{
                        id:brand.id
                    }
                }
            ),
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
            editProduct(name,  description,  amazingOffer,  productType, brand ,id);
        }
    }
    return response;
}export async function removeProduct(id) {
    const response = await fetch(BaseUrl + "product/delete",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    id:id
                }
            ),
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
            removeProduct(id);
        }
    }
    return response;
}

export async function getProductTypeByWords(name){
     const response = await fetch(BaseUrl + "ptype/getProductTypeByWords",
    {
        method: 'POST',
        body: JSON.stringify(
            {
                name:name
            }
        ),
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
            getProductTypeByWords(name)
        }
    }
return response.json();
}

export async function getBrandByWords(name){
    const response = await fetch(BaseUrl + "brand/getBrandByWords",
   {
       method: 'POST',
       body: JSON.stringify(
           {
               name:name
           }
       ),
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
            getBrandByWords(name);
        }
    }
return response.json();
}
