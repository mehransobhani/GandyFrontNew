import axios from 'axios';
import * as env from '../env';
export async function signin(mobile) {
    const response = await fetch(env.api + "auth/signin",
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
    const url = env.api + "auth/signup";
    return axios.post(url, {
        "mobile": mobile,
        "otp": otp,
    })
}

export async function signup(mobile, code) {
    axios.post
    const response = await fetch(env.api + "auth/signup",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    mobile: mobile,
                }
            ),
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            }
        }
    )


    return response.json();
}