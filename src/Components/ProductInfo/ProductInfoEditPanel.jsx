import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";

export function ProductInfoEditPanel({item}) {

    const [count,setCount]=useState(item?.count);
    const [price,setPrice]=useState(item?.price);
    const [color,setColor]=useState(item?.color);
    const [hexColor,setHexColor]=useState(item?.hexColor);
    const [main,setMain]=useState(item?.main);
    const [discount,setDiscount]=useState(item?.discount);
    const [product,setProduct]=useState(item?.product);
    const [productImage,setProductImage]=useState(item?.productImage);

    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ثبت اطلاعات محصول  
                    </h2>
                </div>
                <hr/>

                <form>
                    <div className="space-y-12">

                        <div className=" ">


                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        تعداد محصول
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"تعداد محصول"} type={"text"} change={(e) => {
                                            setCount(e.target.value)
                                        }} value={count}/>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        قیمت محصول
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"قیمت محصول"} type={"text"} change={(e) => {
                                            setPrice(e.target.value)
                                        }} value={price}/>

                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        رنگ محصول
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"رنگ محصول"} type={"text"} change={(e) => {
                                            setColor(e.target.value)
                                        }} value={color}/>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        کد رنگ محصول
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"کد رنگ محصول"} type={"color"} change={(e) => {
                                            setHexColor(e.target.value)
                                        }} value={hexColor}/>

                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        تخفیف محصول
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"تخفیف محصول"} type={"text"} change={(e) => {
                                            setDiscount(e.target.value)
                                        }} value={discount}/>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        محصول
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
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        تصویر محصول
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            className={["block w-full bg-white rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-indigo-500   sm:text-sm sm:leading-6 "].join(" ")}
                                        >
                                            <option>انتخاب کنید</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="col-span-full">
                                    <label htmlFor="street-address"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        اصلی
                                    </label>
                                    <div className="mt-2">
                                    <label className="inline-flex items-center me-5 cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer"
                                                   checked={main} onChange={(e) => {
                                                setMain(e.target.checked)
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
                    <ConfirmButton title={"ویرایش"}/>
                    <CancelButton title={"انصراف"}/>
                    </div>
                </form>
            </div>

        </>
    )
}
