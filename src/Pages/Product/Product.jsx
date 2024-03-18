import AdminLayout from "../../Layout/AdminLayout";
import withAuth from "../../AuthMiddleware";
   import {SearchBox} from "../../Components/Form/SearchBox";
import {ProductTablePanel} from "../../Components/Product/ProductTablePanel";
import {ProductInsertPanel} from "../../Components/Product/ProductInsertPanel";
import Pagination from "../../Components/Pagination";
import { useState } from "react";
import {ProductEditPanel} from "../../Components/Product/ProductEditPanel";
import {getProduct} from "../../Api/Product";

export const Product = withAuth(() => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);

    async function getData()
    {
        let data =await  getProduct();
    }
    return (
        <>
            <AdminLayout>
                <div className={"mb-10"}>
                    {edit?<ProductEditPanel item={editItem}  reload={getData} cancel={()=>{setEdit(false)}} />
                        :<ProductInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                <SearchBox searchSubmit={getData} change={setSearch} />
                </div>
                <div className={"mb-10"}>
                    <ProductTablePanel
                        editMode={()=>{setEdit(true)}}
                        editItem={setEditItem}
                        data={data}
                        reload={getData}

                    />
                </div>
                <div className={"mb-10"}>
                    <Pagination currentPage={1} totalPage={10}/>
                </div>

            </AdminLayout>
        </>
    )
})
