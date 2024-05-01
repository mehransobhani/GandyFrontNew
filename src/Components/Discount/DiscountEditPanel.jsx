import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import {editDiscount} from "../../Api/Discount";
import {toast} from "react-toastify";
import DatePicker from "react-datepicker2";

export function DiscountEditPanel({item , cancel ,reload}) {
    const [discount, setDiscount] = useState(item.discount);
    const [createdAt, setCreatedAt] = useState(item.create_at);
    const [expireAt, setExpireAt] = useState(item.expire_at);
    const [id, setId] = useState(item.id);

    async  function submit() {
        try {
            let response = await editDiscount(discount,createdAt,expireAt,id)
            reload();
            toast.success("عملیات با موفقیت انجام شد")
        }
        catch (e)
        {
            toast.error("متاسفانه عملیات با شکست روبرو شد")
        }
    }

    function changeCreateDate(e){
        setCreatedAt(e.format('YYYY-MM-DD HH:mm'));
    }
    function changeExpireDate(e){
        setExpireAt(e.format('YYYY-MM-DD HH:mm'));
    }

    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ویرایش تخفیف
                    </h2>
                </div>
                <hr/>

                    <div className="space-y-12">

                        <div className=" ">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        تخفیف
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"تخفیف"} type={"text"} change={(e) => {
                                            setDiscount(e.target.value)
                                        }} value={discount}/>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        تاریخ ایجاد
                                    </label>
                                    <div className="mt-2">
                                        <div>
                                            <DatePicker
                                                onChange={changeCreateDate}
                                                persianDigits={true}
                                                timePicker={true}
                                                inputFormat={"Y-m-d"}
                                                className={"text-center block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base   focus:border-indigo-500 focus:outline-0"}
                                                isGregorian={false}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        تاریخ انقضا
                                    </label>
                                    <div className="mt-2">
                                        <div>
                                            <DatePicker

                                                onChange={changeExpireDate}
                                                persianDigits={true}
                                                timePicker={true}
                                                inputFormat={"Y-m-d"}
                                                className={"text-center block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base   focus:border-indigo-500 focus:outline-0"}
                                                isGregorian={false}
                                            />
                                        </div>
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
