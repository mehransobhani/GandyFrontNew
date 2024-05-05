import Input from "../Form/Input";
import { useEffect, useState } from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import { editCover, getCity, getProvince, getUserByMobile } from "../../Api/Cover";
import { toast } from "react-toastify";
import { getTagByWords } from "../../Api/Category";
import { Select } from "../Form/Select";
import Select2 from "../Form/Select2";

export function CoverEditPanel({ item, cancel, reload }) {
    const [postalCode, setPostalCode] = useState(item.postalCode);
    const [Cover, setCover] = useState(item.Cover);
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
            let response = await editCover(postalCode, Cover, no, unit, area, province.id, city.id, users.id, id);
            reload();
            toast.success("عملیات با موفقیت انجام شد")
        }
        catch (e) {
            toast.error("متاسفانه عملیات با شکست روبرو شد")
        }
    }

    useEffect(()=>{
        getAllProvince();
        getDefualtCity();

    },[])
    async function getDefualtCity(){
        let response = await  getCity(item.province.id);
        setAllCity(response);
    }

    async function getAllProvince() {
        let response = await getProvince();
        setAllProvince(response);
    }
    async function getCitys(e) {
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
                                        setCover(e.target.value)
                                    }} value={Cover} />

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
                                            allProvince.map((list) => (<>
                                                <option onClick={()=>{setProvince(list)}} selected={list.id==item.province.id} value={list.id}>{list.name}</option>
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
                                                <option value={list.id} selected={list.id==item.city.id} onClick={()=>{setCity(list)}}>{list.name}</option>
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
