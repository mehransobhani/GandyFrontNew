import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import Textarea from "../Form/Textarea";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Uploader from "../Form/Uploader";
import {insertUser} from "../../Api/User";
import {toast} from "react-toastify";
import {editUser} from "../../Api/User";
import DatePicker from "react-datepicker2";

export function UserInsertPanel({reload}) {

    const [name, setName] = useState("");
    const [family, setFamily] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [create_at, setCreate_at] = useState("");
    const [roles, setRoles] = useState("");
    const [active,setActive]=useState(true);

   async function submit() {
       try {
        let response =await editUser( name, family, mobile, password, nationalCode, create_at, roles.id,roles.name,active )
        reload();
        toast.success("عملیات با موفقیت انجام شد")
       }
       catch (e)
       {
           toast.error("متاسفانه عملیات با شکست روبرو شد")
       }
    }
    function changeCreateDate(e){
        setCreate_at(e.format('YYYY-MM-DD HH:mm'));
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
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    فعال
                                </label>
                                <div className="mt-2">
                                    <label className="inline-flex items-center me-5 cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer"
                                               checked={active} onChange={(e) => {
                                            setActive(e.target.checked)
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
                    <ConfirmButton title={"ثبت"} click={submit}/>
                </div>

            </div>

        </>

    )
}
