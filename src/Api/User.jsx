import {BaseUrl} from '../env';
import {refreshToken, signout} from "./Auth";
export async function getUser(page) {
    const response = await fetch(BaseUrl + "auth/getAllUser/"+page,
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
            getUser(page);
        }
    }

    return response.json();
}
export async function findUserByMobile(mobile) {
    const response = await fetch(BaseUrl + "auth/findUserByMobile/"+mobile,
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
            findUserByMobile(mobile);
        }
    }

    return response.json();
}
export async function editUser(name,family,mobile,password,nationalCode,create_at,roleId,roleName,active) {

   
    const response = await fetch(BaseUrl + "auth/updateUser",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    name :         name ,
                    family :       family ,
                    mobile :       mobile ,
                    password :     password ,
                    nationalCode : nationalCode ,
                    create_at :    create_at ,
                    roles :  [{
                        id:roleId,
                        name:roleName
                    }]     ,
                    
                    active :       active               
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
            editUser(name,family,mobile,password,nationalCode,create_at,roleId,roleName,active) ;
        }
    }
    return response;
} 
export async function removeUser(id) {
    const response = await fetch(BaseUrl + "auth/deleteById/"+id,
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
            removeUser(id);
        }
    }
    return response;
}

export async function getUserByMobile(mobile) {
    const response = await fetch(BaseUrl + "auth/getUserByMobile",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    name:mobile, 
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
            getUserByMobile(name);
        }
    }
    return response;
}
