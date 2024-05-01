import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import {editSubCategory} from "../../Api/SubCategory";
import {toast} from "react-toastify";

export function SubCategoryEditPanel({item , cancel ,reload}) {
    const [subId,setSubId]=useState(item.subId);
    const [id,setId]=useState(item.id);
    const [parentId,setParentId]=useState(item.parentId);

    async  function submit() {
        try {
            let response = await editSubCategory(subId,parentId, id)
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
                        ویرایش زیردسته
                    </h2>
                </div>
                <hr/>
                <div className="space-y-12">
                    <div className=" ">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    دسته بندی
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"دسته بندی"} type={"text"} change={(e) => {
                                        setSubId(e.target.value)
                                    }} value={subId}/>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    دسته بندی والد
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"دسته بندی والد"} type={"text"} change={(e) => {
                                        setParentId(e.target.value)
                                    }} value={parentId}/>
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
