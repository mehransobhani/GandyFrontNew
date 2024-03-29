import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import {toast} from "react-toastify";
import {getProductTypeByWords, insertProductType} from "../../Api/ProductType";
import Select2 from "../Form/Select2";

export function ProductTypeInsertPanel({reload}) {

    const [name,setName]=useState("");
    const [parent,setParent]=useState("");

    const [parentSearch,setParentSearch]=useState("");

    async function submit() {
        let response =await insertProductType(name,parent.id)
        reload();
        toast.success("عملیات با موفقیت انجام شد")
    }

    async function changeParentSearchHandle(e) {
        let response = await getProductTypeByWords(e.target.value);
        setParentSearch(response);
    }
    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        افزودن نوع کالا
                    </h2>
                </div>
                <hr/>

                <div className="space-y-12">
                    <div className=" ">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    نام
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"نام "} type={"text"} change={(e) => {
                                        setName(e.target.value)
                                    }} value={name}/>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    والد
                                </label>
                                <div className="mt-2">
                                <Select2 change={changeParentSearchHandle} options={parentSearch} click={setParent} />

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
