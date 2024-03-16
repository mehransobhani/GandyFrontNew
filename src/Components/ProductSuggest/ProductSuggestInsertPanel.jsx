import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";

export function ProductSuggestInsertPanel() {

    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [amazingOffer,setAmazingOffer]=useState("");
    const [productType,setProductType]=useState("");
    const [brand,setBrand]=useState("");

    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ثبت کالای پیشنهادی
                    </h2>
                </div>
                <hr/>

                <form>
                    <div className="space-y-12">

                        <div className=" ">


                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        نام محصول
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"نام محصول"} type={"text"} change={(e) => {
                                            setName(e.target.value)
                                        }} value={name}/>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        توضیحات
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"توضیحات"} type={"text"} change={(e) => {
                                            setDescription(e.target.value)
                                        }} value={description}/>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-center gap-x-6">
                        <ConfirmButton title={"ثبت"}/>
                    </div>
                </form>
            </div>

        </>
    )
}
