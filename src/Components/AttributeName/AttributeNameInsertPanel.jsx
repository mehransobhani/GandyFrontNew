import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import {toast} from "react-toastify";
import {insertAttributeName} from "../../Api/AttributeName";

export function AttributeNameInsertPanel({reload}) {

    const [name,setName]=useState("");
   async function submit() {
       try {
        let response =await insertAttributeName(name)
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
                        افزودن ویژگی محصول
                    </h2>
                </div>
                <hr/>

                <div className="space-y-12">

                    <div className=" ">


                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-full">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    نام ویژگی
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"نام ویژگی"} type={"text"} change={(e) => {
                                        setName(e.target.value)
                                    }} value={name}/>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <ConfirmButton title={"ثبت"} click={submit}/>
                </div>
            </div>

        </>
    )
}
