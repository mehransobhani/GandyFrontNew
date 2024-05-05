import {BaseUrl} from '../env';
import {refreshToken, signout} from "./Auth";

export async function getWebInfo() {
    const response = await fetch(BaseUrl + "webInfo/getAll" ,
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
            getWebInfo();
        }
    }

    return response.json();
}

export async function insertWebInfo(name, logo, tell, mobile, instagram, whatsApp, telegram, email, workTime, address, aboutUs) {

    let body = JSON.stringify(
        {
            name: name,
            logo: logo.name,
            tell: tell,
            mobile: mobile,
            instagram: instagram,
            whatsApp: whatsApp,
            telegram: telegram,
            email: email,
            workTime: workTime,
            address: address,
            aboutUs: aboutUs

        }
    );
    const formdata = new FormData();
    formdata.append("file", logo);
    formdata.append("model", body);
    const response = await fetch(BaseUrl + "webInfo/add",
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
            insertWebInfo(name, logo, tell, mobile, instagram, whatsApp, telegram, email, workTime, address, aboutUs);
        }
    }
    return response;
}


export async function editWebInfo(name, logo, tell, mobile, instagram, whatsApp, telegram, email, workTime, address, aboutUs ,id) {

    let body = JSON.stringify(
        {
            name: name,
            logo: logo.name,
            tell: tell,
            mobile: mobile,
            instagram: instagram,
            whatsApp: whatsApp,
            telegram: telegram,
            email: email,
            workTime: workTime,
            address: address,
            aboutUs: aboutUs,
            id: id
        }
    );
    const formdata = new FormData();
    formdata.append("file", logo);
    formdata.append("model", body);
    const response = await fetch(BaseUrl + "webInfo/add",
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
            editWebInfo(name, logo, tell, mobile, instagram, whatsApp, telegram, email, workTime, address, aboutUs ,id);
        }
    }
    return response;
}
export async function removeWebInfo(id) {
    const response = await fetch(BaseUrl + "webInfo/deleteById/" + id,
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
            removeWebInfo(id);
        }
    }
    return response;
}
 
