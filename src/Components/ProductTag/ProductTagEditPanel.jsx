import Input from "../Form/Input";
import { useEffect, useState } from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import {editProductTag, getProductByWords, getProductTagByWords} from "../../Api/ProductTag";
import { toast } from "react-toastify";
import { getTagByWords } from "../../Api/Category";
import { Select } from "../Form/Select";
import Select2 from "../Form/Select2";

export function ProductTagEditPanel({ item, cancel, reload }) {
    const [product, setProduct] = useState(item.product);
    const [tag, setTag] = useState(item.tag);
    const [id, setId] = useState(item.id);

    const [productSearch, setProductSearch] = useState("");
    const [tagSearch, setTagSearch] = useState("");

    async function submit() {
        try {
            let response = await editProductTag(product.id,tag.id,id);
            reload();
            toast.success("عملیات با موفقیت انجام شد")
        }
        catch (e) {
            toast.error("متاسفانه عملیات با شکست روبرو شد")
        }
    }
    async function changeProductSearchHandle(e) {
        let response = await getProductByWords(e.target.value);
        setProductSearch(response);
    }
    async function changeTagSearchHandle(e) {
        let response = await getProductTagByWords(e.target.value);
        setProductSearch(response);
    }


    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ویرایش مقاله
                    </h2>
                </div>
                <hr/>
                <div className="space-y-12">

                    <div className=" ">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    محصول
                                </label>
                                <div className="mt-2">
                                    <Select2 value={product?.name} change={changeProductSearchHandle()}
                                             options={productSearch} click={setProduct}/>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    تگ
                                </label>
                                <div className="mt-2">
                                    <Select2 value={tag?.name} change={changeTagSearchHandle}
                                             options={tagSearch} click={setTag}/>
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
