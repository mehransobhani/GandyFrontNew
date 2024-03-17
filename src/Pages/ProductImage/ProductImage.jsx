import withAuth from "../../AuthMiddleware";
import AdminLayout from "../../Layout/AdminLayout";
import {ProductImageInsertPanel} from "../../Components/ProductImage/ProductImageInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {ProductImageTablePanel} from "../../Components/ProductImage/ProductImageTablePanel";
import {useState} from "react";
import Pagination from "../../Components/Pagination";
import {ProductInfoEditPanel} from "../../Components/ProductInfo/ProductInfoEditPanel";

export const ProductImage = withAuth(() => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    function getData()
    {
        console.log(search);
    }
    return (
        <>


            <AdminLayout>
                <div className={"mb-10"}>
                    {edit?<ProductInfoEditPanel  item={editItem}  reload={getData} cancel={()=>{setEdit(false)}}/>:<ProductImageInsertPanel/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                <SearchBox searchSubmit={getData} change={setSearch} />
                </div>
                <div className={"mb-10"}>
                    <ProductImageTablePanel
                        editMode={()=>{setEdit(true)}}
                        editItem={setEditItem}
                        data={data}
                    />
                </div>
                <div className={"mb-10"}>
                    <Pagination currentPage={1} totalPage={10}/>
                </div>
            </AdminLayout>
        </>
    )
})
