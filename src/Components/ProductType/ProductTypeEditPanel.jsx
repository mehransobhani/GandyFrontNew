import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import Select2 from "../Form/Select2";
import {toast} from "react-toastify";
import {editProductType, getProductTypeByWords} from "../../Api/ProductType";

export function ProductTypeEditPanel({item , cancel ,reload}) {

    const [name,setName]=useState(item.name);
    const [parent,setParent]=useState(item.parentProductType);
    const [id,setId]=useState(item.id);

    const [parentSearch,setParentSearch]=useState("");

    async function submit() {
        let response =await editProductType(name,parent.id,id)
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
                        ویرایش نوع کالا
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
                                <Select2 value={parent.name} change={changeParentSearchHandle} options={parentSearch} click={setParent} />

                                </div>
                            </div>

                        </div>
                    </div>

                </div>


                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <ConfirmButton title={"ویرایش"} click={submit}/>
                    <CancelButton title={"انصراف"} click={cancel}/>
                </div>
            </div>

        </>
    )
}
