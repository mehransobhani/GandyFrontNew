import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import Uploader from "../Form/Uploader";
import {toast} from "react-toastify";
import {editProductImage} from "../../Api/ProductImage";
import Select2 from "../Form/Select2";
import {searchProduct} from "../../Api/Product";

export function ProductImageEditPanel({item , cancel ,reload}) {

     const [file,setFile]=useState(item.file);
     const [id,setId]=useState(item.id);
    const [product,setProduct]=useState(item.product);
    const [productSearch,setProductSearch]=useState("");

    async function changeProductSearchHandle(e) {
        let response = await searchProduct(e.target.value);
        setProductSearch(response);
    }
    async function submit() {
        try {
            let response = await editProductImage(product.id, file, id)
            toast.success("عملیات با موفقیت انجام شد")
            reload();

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
                        ویرایش تصویر محصول
                    </h2>
                </div>
                <hr/>

                    <div className="space-y-12">

                        <div className=" ">


                            <div className="mt-10 flex flex-col gap-x-6 gap-y-8 sm:grid-cols-3">
                                <div className="sm:col-span-3">

                                    <div className="mt-2">
                                        <Uploader change={setFile}/>
                                    </div>
                                </div>

                                <div className="sm:col-span-2 justify-center">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        محصول
                                    </label>
                                    <div className="mt-2">
                                        <Select2 value={product.name} change={changeProductSearchHandle} options={productSearch} click={setProduct} />

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
