import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import Uploader from "../Form/Uploader";
import {editCategory, getProductTypeByWords, getTagByWords} from "../../Api/Category";
import {toast} from "react-toastify";
import {getAttributeTypeByWords} from "../../Api/AttributeSelect";
import Select2 from "../Form/Select2";
import Select2AttributeSelect from "../Form/Select2AttributeSelect";

export function CategoryEditPanel({item , cancel ,reload}) {
    const [id,setId]=useState(item.id);
    const [name,setName]=useState(item.name);
    const [isMain,setIsMain]=useState(item.isMain);
    const [isActive,setIsActive]=useState(item.isActive);
    const [amount,setAmount]=useState(item.amount);
    const [url,setUrl]=useState(item.url);
    const [image,setImage]=useState("");
    const [productType,setProductType]=useState(item.productType);
    const [productTag,setProductTag]=useState(item.productTag);
    const [attributeOption,setAttributeOption]=useState(item.attributeOption);

    const [productTypeSearch,setProductTypeSearch]=useState("");
    const [productTagSearch,setProductTagSearch]=useState("");
    const [attributeOptionSearch,setAttributeOptionSearch]=useState("");

    async  function submit() {
        try {
            let response = await editCategory(name,isMain,image,url,isActive,amount,productType,productTag,attributeOption,id )
            reload();
            toast.success("عملیات با موفقیت انجام شد")
        }
        catch (e)
        {
            toast.error("متاسفانه عملیات با شکست روبرو شد")
        }
    }

    async function changeAttributeOptionSearchHandle(e) {
        let response = await getAttributeTypeByWords(e.target.value);
        setAttributeOptionSearch(response);

    }
    async function changeProductTypeSearchSearchHandle(e) {
        let response = await getProductTypeByWords(e.target.value);
        setProductTypeSearch(response);

    }
    async function changeTagSearchHandle(e) {
        let response = await getTagByWords(e.target.value);
        setProductTagSearch(response);

    }
    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ویرایش دسته بندی
                    </h2>
                </div>
                <hr/>
                <div className="space-y-12">
                    <div className=" ">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-full">
                                <Uploader change={setImage}/>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    نام دسته بندی
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"نام دسته بندی"} type={"text"} change={(e) => {
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
                                        setUrl(e.target.value)
                                    }} value={url}/>

                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    مقدار
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"مقدار"} type={"text"} change={(e) => {
                                        setAmount(e.target.value)
                                    }} value={amount}/>

                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    productType
                                </label>
                                <div className="mt-2">
                                    <Select2 value={productType?.name} change={changeProductTypeSearchSearchHandle}
                                             options={productTypeSearch} click={setProductType}/>


                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    productTag
                                </label>
                                <div className="mt-2">
                                    <Select2 value={productTag?.name} change={changeTagSearchHandle}
                                             options={productTagSearch} click={setProductTag}/>


                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    attributeOption
                                </label>
                                <div className="mt-2">
                                    <Select2AttributeSelect value={attributeOption?.name}
                                                            change={changeAttributeOptionSearchHandle}
                                                            options={attributeOptionSearch} click={setAttributeOption}/>


                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    اصلی
                                </label>
                                <div className="mt-2">
                                    <label className="inline-flex items-center me-5 cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer"
                                               checked={isMain} onChange={(e) => {
                                            setIsMain(e.target.checked)
                                        }}/>
                                        <div
                                            className="relative w-11 h-6 bg-gray-200 rounded-full peer   peer-focus:ring-4 peer-focus:ring-purple-300   peer-checked:after:-translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>

                                    </label>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    فعال
                                </label>
                                <div className="mt-2">
                                    <label className="inline-flex items-center me-5 cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer"
                                               checked={isActive} onChange={(e) => {
                                            setIsActive(e.target.checked)
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
                    <ConfirmButton title={"ویرایش"} click={submit}/>
                    <CancelButton title={"انصراف"} click={cancel}/>
                </div>
            </div>

        </>

    )
}
