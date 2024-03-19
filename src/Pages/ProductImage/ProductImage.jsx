import withAuth from "../../AuthMiddleware";
import AdminLayout from "../../Layout/AdminLayout";
import {ProductImageInsertPanel} from "../../Components/ProductImage/ProductImageInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {ProductImageTablePanel} from "../../Components/ProductImage/ProductImageTablePanel";
import {useEffect, useState} from "react";
import Pagination from "../../Components/Pagination";
import {ProductInfoEditPanel} from "../../Components/ProductInfo/ProductInfoEditPanel";
import {getProductImage} from "../../Api/ProductImage";
import {ProductImageEditPanel} from "../../Components/ProductImage/ProductImageEditPanel";

export const ProductImage = withAuth(() => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);
    async function getData(page=0)
    {
        let data =await  getProductImage(page);
        setData(data); 
        setItem(data?.content) 
    }
    async function searchProductHandler()
    {
    //     if(search=="")
    //     {
    //         getData();
    //     }
    //     else{
    //     let data =await  searchProduct(search);
    //     setProduct(data); 
    // }
}
 
    useEffect(()=>{
        getData();
    },[])
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
                        data={item}
                        reload={getData}

                    />
                </div>
                <div className={"mb-10"}>
                <Pagination currentPage={(data?.pageable?.pageNumber)+1} totalPage={data?.totalPages} click={getData} />
                </div>
            </AdminLayout>
        </>
    )
})
