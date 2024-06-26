import Input from "../Form/Input";
import {useEffect, useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import {
    insertCover,
    getAttributeTypeByWords,
    getProductTypeByWords,
    getTagByWords,
    getAttributeOptionByAT
} from "../../Api/Cover";
import { toast } from "react-toastify";
import Select2 from "../Form/Select2";
import Uploader from "../Form/Uploader";
import Select2AttributeSelect from "../Form/Select2AttributeSelect";
import Select2Tag from "../Form/Select2Tag";
import {Select} from "../Form/Select";

export function CoverInsertPanel({reload}) {

    const [position,setPosition]=useState("");
    const [col,setCol]=useState("");
    const [image,setImage]=useState("");
    const [amount,setAmount]=useState("");
    const [url,setUrl]=useState("");
    const [productType,setProductType]=useState("");
    const [productTag,setProductTag]=useState("");
    const [attributeOption,setAttributeOption]=useState("");
    const [attributeType,setAttributeType]=useState("");

    const [attributeTypeSearch,setAttributeTypeSearch]=useState("");

    const [productTypeSearch,setProductTypeSearch]=useState("");
    const [productTagSearch,setProductTagSearch]=useState("");
    const [attributeOptionSearch,setAttributeOptionSearch]=useState("");

   async function submit() {
       try {
          let response =await insertCover(position,col,image,url,amount,productType?.id,productTag?.id,attributeType?.id);
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
        setAttributeTypeSearch(response);

    }
    async function changeProductTypeSearchSearchHandle(e) {
        let response = await getProductTypeByWords(e.target.value);
        setProductTypeSearch(response);

    }
    async function changeTagSearchHandle(e) {
        let response = await getTagByWords(e.target.value);
        setProductTagSearch(response);

    }
    async function changeAttributeSearchHandle(id) {
        if(!id)
        return;
        let response = await getAttributeOptionByAT(id);
        setAttributeOptionSearch(response);

    }
    useEffect(() => {
        changeAttributeSearchHandle(attributeType.id)
    }, [attributeType]);

    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ثبت کاور جدید
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
                                    موقعیت
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"موقعیت"} type={"text"} change={(e) => {
                                        setPosition(e.target.value)
                                    }} value={position}/>
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
                                    قیمت
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"قیمت"} type={"text"} change={(e) => {
                                        setAmount(e.target.value)
                                    }} value={amount}/>

                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    ستون
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"ستون"} type={"text"} change={(e) => {
                                        setCol(e.target.value)
                                    }} value={col}/>

                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    نوع کالا
                                </label>
                                <div className="mt-2">
                                    <Select2 value={productType?.name} change={changeProductTypeSearchSearchHandle}
                                             options={productTypeSearch} click={setProductType}/>


                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    تگ
                                </label>
                                <div className="mt-2">
                                    <Select2Tag value={productTag?.tag} change={changeTagSearchHandle}
                                                options={productTagSearch} click={setProductTag}/>


                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    کلید ویژگی
                                </label>
                                <div className="mt-2">
                                    <Select2AttributeSelect value={attributeType?.name}
                                                            change={changeAttributeOptionSearchHandle}
                                                            options={attributeTypeSearch} click={setAttributeType}/>


                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    ویژگی کالا
                                </label>
                                <div className="mt-2">
                                    <Select change={setAttributeOption}>
                                        {
                                            attributeOptionSearch && attributeOptionSearch.map((item) => (<>
                                                <option value={attributeOption.id}>
                                                    {
                                                        attributeOption?.attributeOption
                                                    }
                                                </option>
                                            </>))
                                        }
                                    </Select>


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
