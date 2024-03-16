import axios from 'axios';
import {BaseUrl} from '../env';
export async function signin(mobile) {
    const response = await fetch(BaseUrl + "auth/signin",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    mobile: mobile,
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}


export const setAuth = async (mobile, otp) => {
    const url = BaseUrl + "auth/signup";
    return axios.post(url, {
        "mobile": mobile,
        "otp": otp,
    },
        {  withCredentials: true}
    )
}

export async function signup(mobile, code) {
     const response = await fetch(BaseUrl + "auth/signup",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    mobile: mobile,
                    otp:code
                }
            ),
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            }
        }
     )
    return response;
}
export async function refreshToken(refreshtoken) {
     const response = await fetch(BaseUrl + "auth/refreshtoken",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    refreshtoken: refreshtoken
                }
            ),
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            }
        }
     )
    return response;
}
