import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import Textarea from "../Form/Textarea";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {toast} from "react-toastify";
import {insertProduct} from "../../Api/Product";
export function ProductInsertPanel({reload}) {

    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [amazingOffer,setAmazingOffer]=useState("");
    const [productType,setProductType]=useState("");
    const [brand,setBrand]=useState("");
    async function submit() {
        let response =await insertProduct()
        reload();
        toast.success("عملیات با موفقیت انجام شد")

    }
    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ثبت مقاله جدید
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
                                        عنوان مقاله
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"عنوان مقاله"} type={"text"} change={(e) => {
                                            setName(e.target.value)
                                        }} value={name}/>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        آدرس
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"آدرس"} type={"text"} change={(e) => {
                                            setDescription(e.target.value)
                                        }} value={description}/>

                                    </div>
                                </div>
                                <div className="sm:col-span-full">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        توضیحات
                                    </label>
                                    <div className="mt-2">
                                        <Textarea>

                                        </Textarea>
                                    </div>
                                </div>

                                <div className="sm:col-span-full">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                         محتوا
                                    </label>
                                    <div className="mt-2">
                                       <CKEditor
                                           editor={ ClassicEditor }/>
                                    </div>
                                </div>


                                <div className="col-span-full">
                                    <label htmlFor="street-address"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        پیشنهاد ویژه
                                    </label>
                                    <div className="mt-2">
                                    <label className="inline-flex items-center me-5 cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer"
                                                   checked={amazingOffer} onChange={(e) => {
                                                setAmazingOffer(e.target.checked)
                                            }}/>
                                            <div
                                                className="relative w-11 h-6 bg-gray-200 rounded-full peer   peer-focus:ring-4 peer-focus:ring-purple-300   peer-checked:after:-translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>

                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-center gap-x-6">
                        <ConfirmButton title={"ثبت"} click={submit}/>
                    </div>
                </form>
            </div>

        </>
    )
}
