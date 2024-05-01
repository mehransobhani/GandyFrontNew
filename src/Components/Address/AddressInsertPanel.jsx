import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import {getCity, getProvince, getUserByMobile, insertAddress} from "../../Api/Address";
import {toast} from "react-toastify";

export function AddressInsertPanel({reload}) {

    const [postalCode, setPostalCode] = useState("");
    const [address, setAddress] = useState("");
    const [no, setNo] = useState("");
    const [unit, setUnit] = useState("");
    const [area, setArea] = useState("");
    const [province, setProvince] = useState("");
    const [city, setCity] = useState("");
    const [users, setUsers] = useState("");

    const [allProvince, setAllProvince] = useState([]);
    const [allCity, setAllCity] = useState([]);
    const [userSearch, setUserSearch] = useState("");

   async function submit() {
       try {
        let response =await insertAddress(postalCode, address, no, unit, area, province, city, users);
        reload();
        toast.success("عملیات با موفقیت انجام شد")
       }
       catch (e)
       {
           toast.error("متاسفانه عملیات با شکست روبرو شد")
       }
    }
    async function  getAllProvince(){
        let response = await getProvince();
        setAllProvince(response);
    }
    async function getCitys(){
        let response = await getCity(province);
        setAllCity(response);
    }
    async function changeUserSearchHandle(e) {
        let response = await getUserByMobile(e.target.value);
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
                                            setAddress(e.target.value)
                                        }} value={address}/>

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
