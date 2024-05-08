import {BaseUrl} from '../env';
import {refreshToken, signout} from "./Auth";
export async function getCover(page) {
    const response = await fetch(BaseUrl + "cover/findAll/"+page,
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
            getCover(page);
        }
    }

    return response.json();
}
export async function insertCover(position,col,image,url,amount,productType,productTag,attributeOption) {
    let body;
    if(attributeOption) {
       body = JSON.stringify(
          {
              position: position,
              col: col,
              image: image.name,
              url: url,
              amount: amount,
              productType: {id: productType},
              productTag: {id: productTag},
              attributeOption: {id: attributeOption}
          }
      );
  }
  else {
       body = JSON.stringify(
          {
              position: position,
              col: col,
              image: image.name,
              url: url,
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

    const response = await fetch(BaseUrl + "cover/add",
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
            insertCover(position,col,image,url,amount,productType,productTag,attributeOption);
        }
    }
    return response;
}
export async function editCover(position,col,image,url,amount,productType,productTag,attributeOption,id) {
    let body;
    if(attributeOption) {
        body = JSON.stringify(
            {
                id: id,
                position: position,
                col: col,
                image: image.name,
                url: url,
                amount: amount,
                productType: {id: productType},
                productTag: {id: productTag},
                attributeOption: {id: attributeOption}
            }
        );
    }
    else {
        body = JSON.stringify(
            {
                id: id,
                position: position,
                col: col,
                image: image.name,
                url: url,
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

    const response = await fetch(BaseUrl + "cover/add",
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
            editCover(position,col,image,url,amount,productType,productTag,attributeOption,id);
        }
    }
    return response;
}
export async function removeCover(id) {
    const response = await fetch(BaseUrl + "cover/deleteById/"+id,
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
            removeCover(id);
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

