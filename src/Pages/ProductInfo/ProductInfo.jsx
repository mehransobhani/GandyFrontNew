import AdminLayout from "../../Layout/AdminLayout";
import withAuth from "../../AuthMiddleware";
   import {SearchBox} from "../../Components/Form/SearchBox";
import Pagination from "../../Components/Pagination";
import { ProductInfoInsertPanel } from "../../Components/ProductInfo/ProductInfoInsertPanel";
import { ProductInfoTablePanel } from "../../Components/ProductInfo/ProductInfoTablePanel";
import { useState } from "react";
import { ProductInfoEditPanel } from "../../Components/ProductInfo/ProductInfoEditPanel";

export  const ProductInfo = withAuth(() => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(true);
    const [editItem, setEditItem] = useState(undefined);

    function getData()
    {
        console.log(search);
    }
    return (
        <>
            <AdminLayout>
                <div className={"mb-10"}>
                    {
                        edit?<ProductInfoEditPanel item={editItem}/>:<ProductInfoInsertPanel/>
                    }
                    
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={getData} change={setSearch} />
                </div>
                <div className={"mb-10"}>
                    <ProductInfoTablePanel edit={()=>{setEdit(true)}}/>
                </div>
                <div className={"mb-10"}>
                    <Pagination currentPage={1} totalPage={10}/>
                </div>

            </AdminLayout>
        </>
    )
})
