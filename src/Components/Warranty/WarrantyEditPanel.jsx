import { useState } from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import { editWarranty } from "../../Api/Warranty";
import { toast } from "react-toastify";
import { getTagByWords } from "../../Api/Category";
import Select2 from "../Form/Select2";

export function WarrantyEditPanel({ item, cancel, reload }) {
    const [regWarranty, setRegWarranty] = useState(item.regWarranty);
    const [product, setProduct] = useState(item.product);
    const [id, setId] = useState(item.id);

    const [regWarrantySearch, setRegWarrantySearch] = useState("");
    const [productSearch, setProductSearch] = useState("");

    async function changeProductSearchHandle(e) {
        let response = await getTagByWords(e.target.value);
        setProductSearch(response);

    }
    async function changeRegWarrantySearchHandle(e) {
        let response = await getTagByWords(e.target.value);
        setRegWarrantySearch(response);

    }
    async function submit() {
        try {
            let response = await editWarranty(product.id,regWarranty.id, id);
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
                        ویرایش گارانتی
                    </h2>
                </div>
                <hr/>
                <div className="space-y-12">

                    <div className=" ">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    product
                                </label>
                                <div className="mt-2">
                                    <Select2 value={product?.name} change={changeProductSearchHandle}
                                             options={productSearch} click={setProduct}/>


                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    regWarranty
                                </label>
                                <div className="mt-2">
                                    <Select2 value={regWarranty?.name} change={changeRegWarrantySearchHandle}
                                             options={regWarrantySearch} click={setRegWarranty}/>


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