import withAuth from "../../AuthMiddleware";
import AdminLayout from "../../Layout/AdminLayout";
import {ProductImageInsertPanel} from "../../Components/ProductImage/ProductImageInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {ProductImageTablePanel} from "../../Components/ProductImage/ProductImageTablePanel";
import Modal from "../../Components/Modal/Modal";
import ConfirmButton from "../../Components/Button/ConfirmButton";
import CancelButton from "../../Components/Button/CancelButton";
import {useState} from "react";
import Pagination from "../../Components/Pagination";

export const ProductImage = withAuth(() => {

    return (
        <>


            <AdminLayout>
                <div className={"mb-10"}>
                    <ProductImageInsertPanel/>
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox/>
                </div>
                <div className={"mb-10"}>
                    <ProductImageTablePanel/>
                </div>
                <div className={"mb-10"}>
                    <Pagination currentPage={1} totalPage={10}/>
                </div>
            </AdminLayout>
        </>
    )
})
