import AdminLayout from "../../Layout/AdminLayout";
import withAuth from "../../AuthMiddleware";
   import {SearchBox} from "../../Components/Form/SearchBox";
import Pagination from "../../Components/Pagination";
import { ProductInfoInsertPanel } from "../../Components/ProductInfo/ProductInfoInsertPanel";
import { ProductInfoTablePanel } from "../../Components/ProductInfo/ProductInfoTablePanel";
import { useState } from "react";
import { ProductInfoEditPanel } from "../../Components/ProductInfo/ProductInfoEditPanel";
import {getProductInfo} from "../../Api/ProductInfo";

export  const ProductInfo = withAuth(() => {
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
                    {
                        edit?<ProductInfoEditPanel item={editItem}  reload={getData} cancel={()=>{setEdit(false)}}/>
                            :<ProductInfoInsertPanel  reload={getData}/>
                    }

                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={getData} change={setSearch} />
                </div>
                <div className={"mb-10"}>
                    <ProductInfoTablePanel
                        editMode={()=>{setEdit(true)}}
                        editItem={setEditItem}
                        reload={getData}

                        data={data}/>

                </div>
                <div className={"mb-10"}>
                    <Pagination currentPage={1} totalPage={10}/>
                </div>

            </AdminLayout>
        </>
    )
})
