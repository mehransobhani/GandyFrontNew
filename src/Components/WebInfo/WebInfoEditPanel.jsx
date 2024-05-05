import Input from "../Form/Input";
import {  useState } from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import { editWebInfo  } from "../../Api/WebInfo";
import { toast } from "react-toastify";
import Uploader from "../Form/Uploader";

export function WebInfoEditPanel({ item, cancel, reload }) {
    const [id, setId] = useState(item.id);
    const [name, setName] = useState(item.name);
    const [logo, setLogo] = useState(item.logo);
    const [tell, setTell] = useState(item.tell);
    const [mobile, setMobile] = useState(item.mobile);
    const [instagram, setInstagram] = useState(item.instagram);
    const [whatsApp, setWhatsApp] = useState(item.whatsApp);
    const [telegram, setTelegram] = useState(item.telegram);
    const [email, setEmail] = useState(item.email);
    const [workTime, setWorkTime] = useState(item.workTime);
    const [address, setAddress] = useState(item.address);
    const [aboutUs, setAboutUs] = useState(item.aboutUs);


    async function submit() {
        try {
            let response = await editWebInfo( name, logo, tell, mobile, instagram, whatsApp, telegram, email, workTime, address, aboutUs, id);
            reload();
            toast.success("عملیات با موفقیت انجام شد")
        }
        catch (e) {
            toast.error("متاسفانه عملیات با شکست روبرو شد")
        }
    }

    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ویرایش معرفی وبسایت
                    </h2>
                </div>
                <hr />
                <div className="space-y-12">
                    <div className=" ">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-full">
                                <Uploader change={setLogo()}/>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    نام
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"نام"} type={"text"} change={(e) => {
                                        setName(e.target.value)
                                    }} value={name}/>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    تلفن
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"تلفن"} type={"text"} change={(e) => {
                                        setTell(e.target.value)
                                    }} value={tell}/>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    موبایل
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"موبایل"} type={"text"} change={(e) => {
                                        setMobile(e.target.value)
                                    }} value={mobile}/>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    اینستاگرام
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"اینستاگرام"} type={"text"} change={(e) => {
                                        setInstagram(e.target.value)
                                    }} value={instagram}/>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    واتساپ
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"واتساپ"} type={"text"} change={(e) => {
                                        setWhatsApp(e.target.value)
                                    }} value={whatsApp}/>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    تلگرام
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"تلگرام"} type={"text"} change={(e) => {
                                        setTelegram(e.target.value)
                                    }} value={telegram}/>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    ایمیل
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"ایمیل"} type={"text"} change={(e) => {
                                        setEmail(e.target.value)
                                    }} value={email}/>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    ساعت کاری
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"ساعت کاری"} type={"text"} change={(e) => {
                                        setWorkTime(e.target.value)
                                    }} value={workTime}/>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    آدرس
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"آدرس "} type={"text"} change={(e) => {
                                        setAddress(e.target.value)
                                    }} value={address}/>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    درباره ما
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"درباره ما "} type={"text"} change={(e) => {
                                        setAboutUs(e.target.value)
                                    }} value={aboutUs}/>
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
