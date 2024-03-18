import withAuth from "../../AuthMiddleware";
import AdminLayout from "../../Layout/AdminLayout";
import {ProductImageInsertPanel} from "../../Components/ProductImage/ProductImageInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {ProductImageTablePanel} from "../../Components/ProductImage/ProductImageTablePanel";
import {useState} from "react";
import Pagination from "../../Components/Pagination";
import {ProductInfoEditPanel} from "../../Components/ProductInfo/ProductInfoEditPanel";
import {getProductImage} from "../../Api/ProductImage";
import {ProductImageEditPanel} from "../../Components/ProductImage/ProductImageEditPanel";

export const ProductImage = withAuth(() => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    async function getData()
    {
        let data =await  getProductImage();
    }
    return (
        <>


            <AdminLayout>
                <div className={"mb-10"}>
                    {edit?<ProductImageEditPanel  item={editItem}  reload={getData} cancel={()=>{setEdit(false)}}/>:
                        <ProductImageInsertPanel  reload={getData}/>}
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
