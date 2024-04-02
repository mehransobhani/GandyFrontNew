import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import {Select} from "../Form/Select";
import {toast} from "react-toastify";
import {editProductAttribute, searchAttributeOption} from "../../Api/ProductAttribute";
import {searchProduct} from "../../Api/Product";
import Select2 from "../Form/Select2";
import Select2AttributeOption from "../Form/Select2AttributeOption";

export function ProductAttributeEditPanel({item , cancel ,reload}) {

    const [id,setId]=useState(item.id);
    const [product,setProduct]=useState(item.product);
    const [productSearch,setProductSearch]=useState("");

    const [option,setOption]=useState(item.attributeOption);
    const [optionSearch,setOptionSearch]=useState("");
    async function changeProductSearchHandle(e) {
        let response = await searchProduct(e.target.value);
        setProductSearch(response);
    }
    async function changeOptionSearchHandle(e) {
        let response = await searchAttributeOption(e.target.value);
        setOptionSearch(response);
    }

    async function submit() {
        try {
        let response =await editProductAttribute(option.id,product.id,id)
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
                        ویرایش ویژگی محصول
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
                                    <Select2 value={product?.name} change={changeProductSearchHandle} options={productSearch} click={setProduct} />
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        ویژگی
                                    </label>
                                    <Select2AttributeOption value={option?.attributeOption} change={changeOptionSearchHandle} options={optionSearch} click={setOption} />
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
