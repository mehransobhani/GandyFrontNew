import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import Uploader from "../Form/Uploader";
import {insertBrand} from "../../Api/Brand";
import {toast} from "react-toastify";
import CancelButton from "../Button/CancelButton";

export function BrandInsertPanel({reload}) {
    const [name,setName]=useState("");

   async function submit() {
       try {
        let response =await insertBrand(name)
        reload();
        toast.success("عملیات با موفقیت انجام شد")
       }
       catch (e)
       {
           toast.error("متاسفانه عملیات با شکست روبرو شد")
       }
    }

    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        افزودن برند
                    </h2>
                </div>
                <hr/>
                <div className="space-y-12">
                    <div className=" ">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    نام برند
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"نام برند"} type={"text"} change={(e) => {
                                        setName(e.target.value)
                                    }} value={name}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <ConfirmButton title={"افزودن"} click={submit}/>
                 </div>
            </div>

        </>

    )
}
