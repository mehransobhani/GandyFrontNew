import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import Textarea from "../Form/Textarea";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Uploader from "../Form/Uploader";
import {insertAddress} from "../../Api/Address";
import {toast} from "react-toastify";
import {editUser} from "../../Api/User";

export function AddressInsertPanel({reload}) {

    const [name, setName] = useState("");
    const [family, setFamily] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [create_at, setCreate_at] = useState("");
    const [roles, setRoles] = useState("");

   async function submit() {
       try {
        let response =await editUser( name, family, mobile, password, nationalCode, create_at, roles )
        reload();
        toast.success("عملیات با موفقیت انجام شد")
       }
       catch (e)
       {
           toast.error("متاسفانه عملیات با شکست روبرو شد")
       }
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
                    <div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                                    نام خانوادگی
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"نام خانوادگی "} type={"text"} change={(e) => {
                                        setFamily(e.target.value)
                                    }} value={family}/>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    شماره موبایل
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"شماره موبایل"} type={"text"} change={(e) => {
                                        setMobile(e.target.value)
                                    }} value={mobile}/>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    کد ملی
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"کد ملی"} type={"text"} change={(e) => {
                                        setNationalCode(e.target.value)
                                    }} value={nationalCode}/>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    پسورد
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"پسورد"} type={"text"} change={(e) => {
                                        setPassword(e.target.value)
                                    }} value={password}/>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    تاریخ ایجاد
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"تاریخ ایجاد"} type={"text"} change={(e) => {
                                        setCreate_at(e.target.value)
                                    }} value={create_at}/>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    نقش
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"نقش"} type={"text"} change={(e) => {
                                        setRoles(e.target.value)
                                    }} value={roles}/>
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
