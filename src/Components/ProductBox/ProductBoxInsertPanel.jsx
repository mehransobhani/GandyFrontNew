import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import {getProductByWords , insertProductBox} from "../../Api/ProductBox";
import {toast} from "react-toastify";
import Select2 from "../Form/Select2";

export function ProductBoxInsertPanel({reload}) {
    const [boxNum, setBoxNum] = useState("");
    const [productCount, setProductCount] = useState("");

    const [productCountSearch, setProductCountSearch] = useState("");

   async function submit() {
       try {
        let response =await insertProductBox(boxNum,productCount.id);
        reload();
        toast.success("عملیات با موفقیت انجام شد")
       }
       catch (e)
       {
           toast.error("متاسفانه عملیات با شکست روبرو شد")
       }
    }
    async function changeProductCountSearchHandle(e) {
        let response = await getProductByWords(e.target.value);
        setProductCountSearch(response);

    }
    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ثبت باکس کالا جدید
                    </h2>
                </div>
                <hr/>
                    <div className="space-y-12">
                        <div className=" ">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        شماره باکس
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={" شماره باکس"} type={"text"} change={(e) => {
                                            setBoxNum(e.target.value)
                                        }} value={boxNum}/>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        انتخاب کالا
                                    </label>
                                    <div className="mt-2">
                                        <Select2 value={productCount?.name} change={changeProductCountSearchHandle}
                                                 options={productCountSearch} click={setProductCount}/>
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
