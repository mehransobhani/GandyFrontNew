import withAuth from "../../AuthMiddleware";
import AdminLayout from "../../Layout/AdminLayout";
import {SearchBox} from "../../Components/Form/SearchBox";
import Pagination from "../../Components/Pagination";
import {useEffect, useState} from "react";
import {AttributeNameTablePanel} from "../../Components/AttributeName/AttributeNameTablePanel";
import {AttributeNameInsertPanel} from "../../Components/AttributeName/AttributeNameInsertPanel";
import {AttributeNameEditPanel} from "../../Components/AttributeName/AttributeNameEditPanel";
import {getAttributeName, getAttributeTypeByWords} from "../../Api/AttributeName";
import { getProductImage } from "../../Api/ProductImage";
import { searchProduct } from "../../Api/Product";

export const AttributeName =withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getAttributeName(page);
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
        let data =await  getAttributeTypeByWords(search);
        console.log("Data Is",data);
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
                    {edit ? <AttributeNameEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <AttributeNameInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={searchProductHandler} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                   {data && <AttributeNameTablePanel
                        editMode={() => {
                            setEdit(true)
                        }}
                        editItem={setEditItem}
                        data={item}
                        reload={getData}
                    />}
                </div>
                <div className={"mb-10"}>
                                <Pagination currentPage={(data?.pageable?.pageNumber==0?1:data?.pageable?.pageNumber)} totalPage={data?.totalPages} click={getData} />

                </div>
            </AdminLayout>
        </>
    )
})
