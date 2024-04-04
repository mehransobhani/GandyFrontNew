import withAuth from "../../AuthMiddleware";
import AdminLayout from "../../Layout/AdminLayout";
import {SearchBox} from "../../Components/Form/SearchBox";
import Pagination from "../../Components/Pagination";
import {useEffect, useState} from "react";
import {ProductTypeTablePanel} from "../../Components/ProductType/ProductTypeTablePanel";
import {ProductTypeInsertPanel} from "../../Components/ProductType/ProductTypeInsertPanel";
import {ProductTypeEditPanel} from "../../Components/ProductType/ProductTypeEditPanel";
import {getProductType, getProductTypeByWords} from "../../Api/ProductType";

export const ProductType =withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getProductType(page);
        setData(data); 
        setItem(data?.content) 
    }
    async function searchProductHandler()
    {
        if(search=="")
        {
            getData();
        }
        else{
        let data =await  getProductTypeByWords(search);
        setItem(data); 
    }
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
                    <SearchBox searchSubmit={searchProductHandler} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <ProductTypeTablePanel
                        editMode={() => {
                            setEdit(true)
                        }}
                        reload={getData}

                        editItem={setEditItem}
                        data={item}
                    />
                </div>
                <div className={"mb-10"}>
                                <Pagination currentPage={(data?.pageable?.pageNumber==0?1:data?.pageable?.pageNumber)} totalPage={data?.totalPages} click={getData} />

                </div>
            </AdminLayout>
        </>
    )
})
