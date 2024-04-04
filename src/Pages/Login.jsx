import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { signin, signup } from '../Api/Auth';
import { useNavigate} from "react-router-dom";

export default function Login() {
     const [mobile, setMobile] = useState("");
    const [code, setCode] = useState("");
    const [step, setStep] = useState(1);
    const [error, setError] = useState(undefined);

    const navigate = useNavigate();
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
            let response = await signup(mobile, code);
            navigate("/product/create")
         }
    }
    return (<>
        <div className="flex h-screen w-full items-center justify-center bg-slate-100 bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('../../public/icon/login_bg.jpg')" }}>

            <div
                className="rounded-xl bg-white px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">

                <div className="text-white">

                    <div className="mb-8 flex flex-col items-center">
                        <div className={"w-12 "}>
                            <UserCircleIcon className='text-gray-600' />
                        </div>
                        <h1 className="mb-2 text-2xl text-gray-600">پنل مدیریت</h1>
                        {step==1 && <span className="text-gray-500">برای ورود شماره موبایل  خود را وارد کنید</span>}
                        {step==2 && <span className="text-gray-500">برای ورود کد پیامک شده را وارد کنید</span>}
                        {error &&
                            <div
                                className="font-regular relative   block w-full rounded-lg p-4 text-red-500 text-base leading-5   opacity-100">
                               کد وارد شده نا معتبر است
                            </div>
                        }
                    </div>

                { step==1 &&   <div className="mb-4 text-lg">
                        <input
                            disabled={step==2?true:false}
                            value={mobile}
                            onChange={changeMobile}
                            className="rounded border-none bg-slate-50 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-gray-600 text-gray-600 shadow border outline-none backdrop-blur-md"
                            type="text" name="phone" placeholder="شماره موبایل" />
                    </div>}
                    {step == 2 &&
                        <div className="mb-4 text-lg">

                            <input
                                onChange={changeCode}
                                value={code}
                                className="rounded border-none bg-slate-50 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-gray-600 text-gray-600 shadow border outline-none backdrop-blur-md"
                                type="Password" name="password" placeholder="کد تایید" />
                        </div>
                    }

                    <div className="mt-8 flex justify-center text-lg text-black">
                        <button type="submit"
                            onClick={SubmitHandle}
                            className="w-full rounded border-none bg-indigo-900 bg-opacity-50 px-6 py-2 text-center text-inherit   text-white shadow border outline-none backdrop-blur-md">ورود
                        </button>
                    </div>
                </div>

            </div>

        </div>

    </>)

}
