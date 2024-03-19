import withAuth from "../../AuthMiddleware";
import AdminLayout from "../../Layout/AdminLayout";
import {SearchBox} from "../../Components/Form/SearchBox";
import Pagination from "../../Components/Pagination";
import {useState} from "react";
import {ProductTypeTablePanel} from "../../Components/ProductType/ProductTypeTablePanel";
import {ProductTypeInsertPanel} from "../../Components/ProductType/ProductTypeInsertPanel";
import {ProductTypeEditPanel} from "../../Components/ProductType/ProductTypeEditPanel";
import {getProductType} from "../../Api/ProductType";

export const ProductType =withAuth( () => {
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
                    {edit ? <ProductTypeEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <ProductTypeInsertPanel  reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={getData} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <ProductTypeTablePanel
                        editMode={() => {
                            setEdit(true)
                        }}
                        reload={getData}

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
