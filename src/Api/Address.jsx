import {BaseUrl} from '../env';
import {refreshToken, signout} from "./Auth";
export async function getAddress(page) {
    const response = await fetch(BaseUrl + "address/getAddressList/"+page,
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
            getAddress(page);
        }
    }

    return response.json();
}export async function insertAddress(postalCode,address,no,unit,area,province,city,users) {


    const response = await fetch(BaseUrl + "address/addAddress",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    postalCode:postalCode,
                    address:address,
                    no:no,
                    unit:unit,
                    area:area,
                    province:{id:province},
                    city:{id:city},
                    users:{id:users},

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
            insertAddress(postalCode,address,no,unit,area,province,city,users);
        }
    }
    return response;
}export async function editAddress(postalCode,address,no,unit,area,province,city,users,id) {


    const response = await fetch(BaseUrl + "address/addAddress",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    postalCode:postalCode,
                    address:address,
                    no:no,
                    unit:unit,
                    area:area,
                    province:{id:province},
                    city:{id:city},
                    users:{id:users},
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
            editAddress(postalCode,address,no,unit,area,province,city,users,id);
        }
    }
    return response;
}
export async function removeAddress(id) {
    const response = await fetch(BaseUrl + "address/deleteAddress/"+id,
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
            removeAddress(id);
        }
    }
    return response;
}


export async function getAddressListByMobile(mobile) {
    const response = await fetch(BaseUrl + "address/getAddressListByMobile/"+mobile,
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
            getAddressListByMobile(mobile);
        }
    }
    return response.json();
}


export async function getProvince() {
    const response = await fetch(BaseUrl + "province/all",
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
            getProvince();
        }
    }
    return response.json();
}


export async function getCity(province) {
    const response = await fetch(BaseUrl + "city/"+province+"/",
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
            getCity(province);
        }
    }
    return response.json();
}

export async function getUserByMobile(mobile) {
    const response = await fetch(BaseUrl + "auth/getUserByMobile",
        {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    name:mobile
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
            getUserByMobile(mobile);
        }
    }
    return response.json();
}
