import {useEffect, useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import {Select} from "../Form/Select";
import {toast} from "react-toastify";
import {editProductAttribute, searchAttributeOption} from "../../Api/ProductAttribute";
import {searchProduct} from "../../Api/Product";
import Select2 from "../Form/Select2";
import Select2AttributeOption from "../Form/Select2AttributeOption";
import Select2AttributeSelect from "../Form/Select2AttributeSelect";
import {getAttributeOptionByAT, getAttributeTypeByWords} from "../../Api/Cover";

export function ProductAttributeEditPanel({item , cancel ,reload}) {

    const [id,setId]=useState(item.id);
    const [product,setProduct]=useState(item.product);
    const [productSearch,setProductSearch]=useState("");

    const [attributeOption,setAttributeOption]=useState(item.attributeOption);

    const [attributeType,setAttributeType]=useState("");

    const [attributeTypeSearch,setAttributeTypeSearch]=useState("");

    const [attributeOptionSearch,setAttributeOptionSearch]=useState("");


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
        let response =await editProductAttribute(attributeOption?.id,product.id,id)
        reload();
        toast.success("عملیات با موفقیت انجام شد")
        }
        catch (e)
        {
            toast.error("متاسفانه عملیات با شکست روبرو شد")
        }
    }
    async function changeAttributeOptionSearchHandle(e) {
        let response = await getAttributeTypeByWords(e.target.value);
        setAttributeTypeSearch(response);

    }
    async function changeAttributeSearchHandle(id) {
        if(!id)
        return;
        let response = await getAttributeOptionByAT(id);
        setAttributeOptionSearch(response);

    }
    useEffect(() => {
        changeAttributeSearchHandle(attributeType.id)
    }, [attributeType]);
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
                                    <Select2 value={product?.name} change={changeProductSearchHandle}
                                             options={productSearch} click={setProduct}/>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        کلید ویژگی
                                    </label>
                                    <div className="mt-2">
                                        <Select2AttributeSelect value={attributeType?.name}
                                                                change={changeAttributeOptionSearchHandle}
                                                                options={attributeTypeSearch} click={setAttributeType}/>


                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        ویژگی کالا
                                    </label>
                                    <div className="mt-2">
                                        <Select change={setAttributeOption}>
                                            {
                                                attributeOptionSearch && attributeOptionSearch.map((item) => (<>
                                                    <option value={attributeOption.id}>
                                                        {
                                                            attributeOption?.attributeOption
                                                        }
                                                    </option>
                                                </>))
                                            }
                                        </Select>


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
