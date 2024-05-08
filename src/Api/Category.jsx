import {BaseUrl} from '../env';
import {refreshToken, signout} from "./Auth";
export async function getCategory(page) {
    const response = await fetch(BaseUrl + "category/getAll/"+page,
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
            getCategory(page);
        }
    }

    return response.json();
}
export async function insertCategory(name,isMain,image,url,isActive,amount,productType,productTag,attributeOption) {
    let body ;
    if(attributeOption) {
        body = JSON.stringify(
            {
                name: name,
                isMain: isMain,
                imgName: image.name,
                url: url,
                isActive: isActive,
                amount: amount,
                productType: {id: productType},
                productTag: {id: productTag},
                attributeOption: {id: attributeOption}
            }
        );
    }
    else{
        body = JSON.stringify(
            {
                name: name,
                isMain: isMain,
                imgName: image.name,
                url: url,
                isActive: isActive,
                amount: amount,
                productType: {id: productType},
                productTag: {id: productTag},
                attributeOption: null
            }
        );
    }
    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append("model", body);

    const response = await fetch(BaseUrl + "category/add",
        {
            method: 'POST',
            credentials: 'include',
            body: formdata ,

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
            insertCategory(name,isMain,image,url,isActive,amount,productType,productTag,attributeOption);
        }
    }
    return response;
}
export async function editCategory(name,isMain,image,url,isActive,amount,productType,productTag,attributeOption,id) {
    let body ;
    if(attributeOption) {
        body = JSON.stringify(
            {
                id: id,
                name: name,
                isMain: isMain,
                imgName: image.name,
                url: url,
                isActive: isActive,
                amount: amount,
                productType: {id: productType},
                productTag: {id: productTag},
                attributeOption: {id: attributeOption}
            }
        );
    }
    else{
        body = JSON.stringify(
            {
                id: id,
                name: name,
                isMain: isMain,
                imgName: image.name,
                url: url,
                isActive: isActive,
                amount: amount,
                productType: {id: productType},
                productTag: {id: productTag},
                attributeOption: null
            }
        );
    }
    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append("model", body);

    const response = await fetch(BaseUrl + "category/add",
        {
            method: 'POST',
            credentials: 'include',
            body: formdata ,

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
            editCategory(name,isMain,image,url,isActive,amount,productType,productTag,attributeOption,id);
        }
    }
    return response;
}
export async function removeCategory(id) {
    const response = await fetch(BaseUrl + "category/deleteById/"+id,
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
            removeCategory(id);
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
            getCategoryByWords(name);
        }
    }
    return response.json();
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
            getTagByWords(name) ;
        }
    }
    return response.json();
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
