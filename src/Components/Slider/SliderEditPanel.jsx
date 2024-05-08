import Input from "../Form/Input";
import { useEffect, useState } from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import {editSlider, getAttributeOptionByAT, getAttributeTypeByWords, getProductTypeByWords} from "../../Api/Slider";
import { toast } from "react-toastify";
import { getTagByWords } from "../../Api/Category";
import Select2 from "../Form/Select2";
import Uploader from "../Form/Uploader";
import Select2AttributeSelect from "../Form/Select2AttributeSelect";
import Select2Tag from "../Form/Select2Tag";

export function SliderEditPanel({ item, cancel, reload }) {
    const [image,setImage]=useState(item.image);
    const [url,setUrl]=useState(item.url);
    const [productType,setProductType]=useState(item.productType);
    const [productTag,setProductTag]=useState(item.productTag);
    const [attributeOption,setAttributeOption]=useState(item.attributeOption);
    const [id,setId]=useState("");

    const [productTypeSearch,setProductTypeSearch]=useState("");
    const [productTagSearch,setProductTagSearch]=useState("");
    const [attributeOptionSearch,setAttributeOptionSearch]=useState("");

    async function submit() {
        try {
            let getAttributeOptionBy = await getAttributeOptionByAT(attributeOption?.id);
            let response = await editSlider(image,url,productType.id,productTag.id,getAttributeOptionBy?.id, id);
            reload();
            toast.success("عملیات با موفقیت انجام شد")
        }
        catch (e) {
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
                        ویرایش اسلایدر
                    </h2>
                </div>
                <hr />
                <div className="space-y-12">
                    <div className=" ">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-full">
                                <Uploader change={setImage}/>
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
                                    ویژگی کالا
                                </label>
                                <div className="mt-2">
                                    <Select2AttributeSelect value={attributeOption?.name}
                                                            change={changeAttributeOptionSearchHandle}
                                                            options={attributeOptionSearch} click={setAttributeOption}/>


                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <ConfirmButton title={"ویرایش"} click={submit} />
                    <CancelButton title={"انصراف"} click={cancel} />
                </div>
            </div>

        </>

    )
}
