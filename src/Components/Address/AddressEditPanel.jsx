import Input from "../Form/Input";
import { useState } from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import { editAddress, getCity, getProvince, getUserByMobile } from "../../Api/Address";
import { toast } from "react-toastify";
import { getTagByWords } from "../../Api/Category";
import { Select } from "../Form/Select";
import Select2 from "../Form/Select2";

export function AddressEditPanel({ item, cancel, reload }) {
    const [postalCode, setPostalCode] = useState(item.postalCode);
    const [address, setAddress] = useState(item.address);
    const [no, setNo] = useState(item.no);
    const [unit, setUnit] = useState(item.unit);
    const [area, setArea] = useState(item.area);
    const [province, setProvince] = useState(item.province);
    const [city, setCity] = useState(item.city);
    const [users, setUsers] = useState(item.users);
    const [id, setId] = useState(item.id);

    const [allProvince, setAllProvince] = useState([]);
    const [allCity, setAllCity] = useState([]);
    const [userSearch, setUserSearch] = useState("");

    async function submit() {
        try {
            let response = await editAddress(postalCode, address, no, unit, area, province, city, users, id);
            reload();
            toast.success("عملیات با موفقیت انجام شد")
        }
        catch (e) {
            toast.error("متاسفانه عملیات با شکست روبرو شد")
        }
    }


    async function getAllProvince() {
        let response = await getProvince();
        setAllProvince(response);
    }
    async function getCitys(e) {
        setProvince(e.target.value)
        let response = await getCity(e.target.value);
        setAllCity(response);
    }

    async function changeUserSearchHandle(e) {
        let response = await getUserByMobile(e.target.value);
        setUserSearch(response);

    }

    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ویرایش مقاله
                    </h2>
                </div>
                <hr />
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
                                    }} value={postalCode} />
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
                                    }} value={address} />

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
                                    }} value={unit} />
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
                                    }} value={no} />
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
                                    }} value={area} />
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
                                            allProvince.map((item) => (<>
                                                <option value={item.id}>{item.name}</option>
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
                                    <Select>
                                        <option value={null}>انتخاب کنید</option>
                                        {
                                            allCity && allCity.map((item) => (<>
                                                <option>{item.name}</option>
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
                    <ConfirmButton title={"ویرایش"} click={submit} />
                    <CancelButton title={"انصراف"} click={cancel} />
                </div>
            </div>

        </>

    )
}
