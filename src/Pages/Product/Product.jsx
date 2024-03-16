import AdminLayout from "../../Layout/AdminLayout";
import withAuth from "../../AuthMiddleware";
   import {SearchBox} from "../../Components/Form/SearchBox";
import {ProductTablePanel} from "../../Components/Product/ProductTablePanel";
import {ProductInsertPanel} from "../../Components/Product/ProductInsertPanel";
import Pagination from "../../Components/Pagination";
import { useState } from "react";

export const Product = withAuth(() => {
    const [search, setSearch] = useState("");
    function getData()
    {
        console.log(search);
    }
    return (
        <>
            <AdminLayout>
                <div className={"mb-10"}>
                    <ProductInsertPanel/>
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                <SearchBox searchSubmit={getData} change={setSearch} />
                </div>
                <div className={"mb-10"}>
                    <ProductTablePanel/>
                </div>
                <div className={"mb-10"}>
                    <Pagination currentPage={1} totalPage={10}/>
                </div>

            </AdminLayout>
        </>
    )
})
