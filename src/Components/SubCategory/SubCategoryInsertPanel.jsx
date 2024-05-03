import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import {getCategoryByWords, insertSubCategory} from "../../Api/SubCategory";
import {toast} from "react-toastify";
import Select2 from "../Form/Select2";

export function SubCategoryInsertPanel({reload}) {

    const [subId,setSubId]=useState("");
    const [parentId,setParentId]=useState("");


    const [subSearch,setSubSearch]=useState();
    const [parentSearch,setParentSearch]=useState();
    async function submit() {
       try {
        let response =await insertSubCategory(subId.id,parentId.id)
        reload();
        toast.success("عملیات با موفقیت انجام شد")
       }
       catch (e)
       {
           toast.error("متاسفانه عملیات با شکست روبرو شد")
       }
    }
    async function getParents(e){
        let response = await getCategoryByWords(e.target.value);
        setParentSearch(response);
    }
    async function getSubs(e){
        let response = await getCategoryByWords(e.target.value);
        setSubSearch(response);
    }
    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ثبت زیردسته جدید
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
                                    <Select2 value={subId?.name} change={getSubs} options={subSearch} click={setSubId} />

                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        دسته بندی والد
                                    </label>
                                    <div className="mt-2">
                                    <Select2 value={parentId?.name} change={getParents} options={parentSearch} click={setParentId} />

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
