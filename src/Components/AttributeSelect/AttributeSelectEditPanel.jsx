import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import {AttributeSelectInsertPanel} from "./AttributeSelectInsertPanel";

export function AttributeSelectEditPanel({item , cancel ,reload}) {

    const [name,setName]=useState(item.name);
    const [value,setValue]=useState(item.value);

    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ویرایش ویژگی محصول
                    </h2>
                </div>
                <hr/>

                    <div className="space-y-12">

                        <div className=" ">


                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        انتخاب ویژگی
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            className={["block w-full bg-white rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-indigo-500   sm:text-sm sm:leading-6 "].join(" ")}
                                        >
                                            <option>انتخاب کنید</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        مقدار ویژگی
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
                        <ConfirmButton title={"ویرایش"}/>
                        <CancelButton title={"انصراف"}  click={cancel}/>
                    </div>
            </div>

        </>
    )
}
