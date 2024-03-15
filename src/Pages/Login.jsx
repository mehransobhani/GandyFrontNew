import Cookies from 'js-cookie';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Input from '../Components/Form/Input';
import { setAuth, signin, signup } from '../Api/Auth';

export default function Login() {
    Cookies.set('myCat', 'Pacman', { path: '/' });
    const [mobile, setMobile] = useState("");
    const [code, setCode] = useState("");
    const [step, setStep] = useState(1);

    function ConfirmNumber(e) {
        e.preventDefault();
    }

    function changeMobile(e) {
        setMobile(e.target.value);
    }

    function changeCode(e) {
        setCode(e.target.value);
    }

    async function SubmitHandle() {
        if (step == 1) {
            await signin(mobile);
            setStep(2)
        }
        else if (step == 2) {

            const {data: response} = await setAuth(mobile, code);
            console.log("SS");

            console.log(response);            
            console.log("l",JSON.stringify(response.token));
            console.log("data",data);
            
            // let response = await signup(mobile, code);
            //  const setCookieHeader = response.headers.get('Set-Cookie');
            // for (let entry of response.headers.entries()) {
            //     console.log('header', entry);
            // }
            // console.log(setCookieHeader);
        }
    }
    return (<>
        <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('../../public/icon/login_bg.jpg')" }}>

            <div
                className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">

                <div className="text-white">

                    <div className="mb-8 flex flex-col items-center">
                        <div className={"w-12 "}>
                            <UserCircleIcon />
                        </div>
                        <h1 className="mb-2 text-2xl">پنل مدیریت</h1>
                        <span className="text-gray-300">برای ورود نام و کلمه عبور خود را وارد کنید</span>
                        {
                            <div
                                className="font-regular relative   block w-full rounded-lg p-4 text-red-500 text-base leading-5   opacity-100">
                                نام کاربری یا کلمه عبور اشتباه است
                            </div>
                        }
                    </div>

                    <div className="mb-4 text-lg">
                        <input
                            value={mobile}
                            onChange={changeMobile}
                            className="rounded-3xl border-none bg-indigo-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                            type="text" name="phone" placeholder="شماره موبایل" />
                    </div>
                    {step == 2 &&
                        <div className="mb-4 text-lg">

                            <input
                                onChange={changeCode}
                                value={code}
                                className="rounded-3xl border-none bg-indigo-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                type="Password" name="password" placeholder="کد تایید" />
                        </div>
                    }

                    <div className="mt-8 flex justify-center text-lg text-black">
                        <button type="submit"
                            onClick={SubmitHandle}
                            className="rounded-3xl bg-indigo-700 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-indigo-600">ورود
                        </button>
                    </div>
                </div>

            </div>

        </div>

    </>)

}