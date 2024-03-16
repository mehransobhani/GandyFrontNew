import AdminLayout from "../../Layout/AdminLayout";
import withAuth from "../../AuthMiddleware";
import {SearchBox} from "../../Components/Form/SearchBox";
import Pagination from "../../Components/Pagination";
import { useState } from "react";
import { ProductSuggestInsertPanel } from "../../Components/ProductSuggest/ProductSuggestInsertPanel";
import { ProductSuggestTablePanel } from "../../Components/ProductSuggest/ProductSuggestTablePanel";

export const ProductSuggest = withAuth(() => {
    const [search, setSearch] = useState("");
    function getData()
    {
        console.log(search);
    }
    return (
        <>
            <AdminLayout>
                <div className={"mb-10"}>
                    <ProductSuggestInsertPanel/>
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                <SearchBox searchSubmit={getData} change={setSearch} />
                </div>
                <div className={"mb-10"}>
                    <ProductSuggestTablePanel/>
                </div>
                <div className={"mb-10"}>
                    <Pagination currentPage={1} totalPage={10}/>
                </div>

            </AdminLayout>
        </>
    )
})
