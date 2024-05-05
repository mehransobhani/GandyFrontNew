import Input from "../Form/Input";
import { useState } from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import { editMainWare , getProductTypeByWords} from "../../Api/MainWare";
import { toast } from "react-toastify";
import Select2 from "../Form/Select2";
import Uploader from "../Form/Uploader";

export function MainWareEditPanel({ item, cancel, reload }) {
    const [name, setName] = useState(item.name);
    const [image, setImage] = useState(item.image);
    const [url, setUrl] = useState(item.url);
    const [productType, setProductType] = useState(item.productType);
    const [id, setId] = useState(item.id);

    const [productTypeSearch,setProductTypeSearch]=useState("");


    async function submit() {
        try {
            let response = await editMainWare(name,image,url,productType.id);
            reload();
            toast.success("عملیات با موفقیت انجام شد")
        }
        catch (e) {
            toast.error("متاسفانه عملیات با شکست روبرو شد")
        }
    }

    async function changeProductTypeSearchSearchHandle(e) {
        let response = await getProductTypeByWords(e.target.value);
        setProductTypeSearch(response);

    }

    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ویرایش کالای اصلی
                    </h2>
                </div>
                <hr />
                <div className="space-y-12">

                    <div className=" ">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-full">
                                <Uploader change={setImage}/>
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
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    آدرس
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"آدرس"} type={"text"} change={(e) => {
                                        setUrl(e.target.value)
                                    }} value={setUrl}/>

                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    نوع کالا
                                </label>
                                <div className="mt-2">
                                    <Select2 value={productType?.name} change={changeProductTypeSearchSearchHandle}
                                             options={productTypeSearch} click={setProductType}/>
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
