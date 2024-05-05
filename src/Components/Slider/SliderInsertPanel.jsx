import Input from "../Form/Input";
import {useEffect, useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import {getCity, getProvince, getUserByMobile, insertSlider} from "../../Api/Slider";
import {toast} from "react-toastify";
import { Select } from "../Form/Select";
import Select2 from "../Form/Select2";
import {getAttributeTypeByWords, getProductTypeByWords, getTagByWords} from "../../Api/Cover";

export function SliderInsertPanel({reload}) {
    const [image,setImage]=useState("");
    const [amount,setAmount]=useState("");
    const [url,setUrl]=useState("");
    const [productType,setProductType]=useState("");
    const [productTag,setProductTag]=useState("");
    const [attributeOption,setAttributeOption]=useState("");

    const [productTypeSearch,setProductTypeSearch]=useState("");
    const [productTagSearch,setProductTagSearch]=useState("");
    const [attributeOptionSearch,setAttributeOptionSearch]=useState("");


   async function submit() {
       try {
        let response =await insertSlider(image,url,productType.id,productTag.id,attributeOption.id);
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
                        ثبت مقاله جدید
                    </h2>
                </div>
                <hr/>
                    <div className="space-y-12">

                        <div className=" ">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        کد پستی
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"کد پستی"} type={"text"} change={(e) => {
                                            setPostalCode(e.target.value)
                                        }} value={postalCode}/>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        آدرس
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"آدرس"} type={"text"} change={(e) => {
                                            setSlider(e.target.value)
                                        }} value={Slider}/>

                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        طبقه
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"طبقه"} type={"text"} change={(e) => {
                                            setUnit(e.target.value)
                                        }} value={unit}/>
                                    </div>
                                </div>


                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        پلاک
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"پلاک"} type={"text"} change={(e) => {
                                            setNo(e.target.value)
                                        }} value={no}/>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        محله
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"محله"} type={"text"} change={(e) => {
                                            setArea(e.target.value)
                                        }} value={area}/>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    استان
                                </label>
                                <div className="mt-2">
                                    <Select change={getCitys}>
                                        <option value={null}>انتخاب کنید</option>
                                        {
                                            allProvince.map((list) => (<>
                                                <option onClick={()=>{setProvince(list)}}  value={list.id}>{list.name}</option>
                                            </>))
                                        }
                                    </Select>
                                </div>
                            </div>


                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    شهر
                                </label>
                                <div className="mt-2">
                                       <Select >
                                        <option value={null}>انتخاب کنید</option>
                                        {
                                            allCity && allCity.map((list) => (<>
                                                <option value={list.id}  onClick={()=>{setCity(list)}}>{list.name}</option>
                                            </>))
                                        }
                                    </Select>
                                </div>
                            </div>

                                <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    کاربر
                                </label>
                                <div className="mt-2">
                                <Select2 value={users?.name} change={changeUserSearchHandle} options={userSearch} click={setUsers} />
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
