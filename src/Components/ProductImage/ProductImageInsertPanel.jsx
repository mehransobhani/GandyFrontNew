import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import Uploader from "../Form/Uploader";
import {toast} from "react-toastify";
import {insertProductImage} from "../../Api/ProductImage";
import {searchProduct} from "../../Api/Product";
import Select2 from "../Form/Select2";

export function ProductImageInsertPanel({reload}) {

    const [file,setFile]=useState("");
    const [product,setProduct]=useState("");
    const [productSearch,setProductSearch]=useState("");

    async function changeProductSearchHandle(e) {
        let response = await searchProduct(e.target.value);
        setProductSearch(response);
    }

    async function submit() {
        let response =await insertProductImage(product.id,file)
        reload();
        toast.success("عملیات با موفقیت انجام شد")

    }
    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ثبت تصویر محصول
                    </h2>
                </div>
                <hr/>

                    <div className="space-y-12">

                        <div className=" ">


                            <div className="mt-10 flex flex-col gap-x-6 gap-y-8 sm:grid-cols-3">
                                <div className="sm:col-span-3">

                                    <div className="mt-2">
                                        {console.log("File is ",file)}
                                        <Uploader change={setFile}/>

                                    </div>
                                </div>

                                <div className="sm:col-span-2 justify-center">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                         محصول
                                    </label>
                                    <div className="mt-2">
                                        <Select2 change={changeProductSearchHandle} options={productSearch} click={setProduct} />
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
