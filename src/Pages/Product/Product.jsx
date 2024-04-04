import AdminLayout from "../../Layout/AdminLayout";
import withAuth from "../../AuthMiddleware";
   import {SearchBox} from "../../Components/Form/SearchBox";
import {ProductTablePanel} from "../../Components/Product/ProductTablePanel";
import {ProductInsertPanel} from "../../Components/Product/ProductInsertPanel";
import Pagination from "../../Components/Pagination";
import { useEffect, useState } from "react";
import {ProductEditPanel} from "../../Components/Product/ProductEditPanel";
import {getProduct, searchProduct} from "../../Api/Product";
import { async } from "q";

export const Product = withAuth(() => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [product, setProduct] = useState(undefined);
    async function getData(page=0)
    {
        let data =await  getProduct(page);
        setData(data); 
        setProduct(data?.content)
    }
    async function searchProductHandler()
    {
        if(search=="")
        {
            getData();
        }
        else{
        let data =await  searchProduct(search);
        setProduct(data); 
    }
}
 
    useEffect(()=>{
        getData();
    },[])
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
                <SearchBox searchSubmit={searchProductHandler} change={setSearch} />
                </div>
                <div className={"mb-10"}>
                    
                    <ProductTablePanel
                        editMode={()=>{setEdit(true)}}
                        editItem={setEditItem}
                        data={product}
                        reload={getData}

                    />
                </div>
                <div className={"mb-10"}>
                                    <Pagination currentPage={(data?.pageable?.pageNumber==0?1:data?.pageable?.pageNumber)} totalPage={data?.totalPages} click={getData} />

                </div>

            </AdminLayout>
        </>
    )
})
