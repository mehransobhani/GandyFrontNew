import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import {toast} from "react-toastify";
import {editProduct, getBrandByWords, getProductTypeByWords} from "../../Api/Product";
import Select2 from "../Form/Select2";

export function ProductEditPanel({item , cancel ,reload}) {

    const [name,setName]=useState(item.name);
    const [id,setId]=useState(item.id);
    const [description,setDescription]=useState(item.description);
    const [amazingOffer,setAmazingOffer]=useState(item.amazingOffer);
    const [productType,setProductType]=useState(item.productType);
    const [brand,setBrand]=useState(item.brand);
    const [intro,setIntro]=useState(item.intro);

    const [productTypeSearch,setProductTypeSearch]=useState(undefined);
    const [brandSearch,setBrandSearch]=useState(undefined);

    async function submit() {
        try {
        let response =await editProduct(name,
            description,
            amazingOffer?1:0,
            productType,
            brand,
            intro
            ,id)
        reload();
        toast.success("عملیات با موفقیت انجام شد")
        }
        catch (e)
        {
            toast.error("متاسفانه عملیات با شکست روبرو شد")
        }
    }

    async function changeBrandSearchHandle(e) {
        let response =await getBrandByWords(e.target.value);
        setBrandSearch(response);

    }

    async function changeProductTypeSearchHandle(e) {
        let response =await getProductTypeByWords(e.target.value);
        setProductTypeSearch(response);
    }
    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ویرایش محصول
                    </h2>
                </div>
                <hr/>

                    <div className="space-y-12">

                        <div className=" ">


                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        نام محصول
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"نام محصول"} type={"text"} change={(e) => {
                                            setName(e.target.value)
                                        }} value={name}/>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        توضیحات
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"توضیحات"} type={"text"} change={(e) => {
                                            setDescription(e.target.value)
                                        }} value={description}/>

                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        معرفی
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"معرفی"} type={"text"} change={(e) => {
                                            setIntro(e.target.value)
                                        }} value={intro}/>

                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        برند
                                    </label>
                                    <div className="mt-2">
                                    <Select2 value={brand.name} change={changeBrandSearchHandle} options={brandSearch} click={setBrand} />

                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        نوع کالا
                                    </label>
                                    <div className="mt-2">
                                        <Select2 value={productType.name} change={changeProductTypeSearchHandle} options={productTypeSearch} click={setProductType} />

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
                        <ConfirmButton title={"ویرایش"} click={submit}/>
                        <CancelButton title={"انصراف"}  click={cancel}/>
                    </div>
            </div>

        </>
    )
}
