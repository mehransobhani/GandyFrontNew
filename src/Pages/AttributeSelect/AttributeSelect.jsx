import withAuth from "../../AuthMiddleware";
import AdminLayout from "../../Layout/AdminLayout";
import {SearchBox} from "../../Components/Form/SearchBox";
import Pagination from "../../Components/Pagination";
import {useEffect, useState} from "react";
import {AttributeSelectTablePanel} from "../../Components/AttributeSelect/AttributeSelectTablePanel";
import {AttributeSelectInsertPanel} from "../../Components/AttributeSelect/AttributeSelectInsertPanel";
import {AttributeSelectEditPanel} from "../../Components/AttributeSelect/AttributeSelectEditPanel";
import { getAttributeSelect, searchAttributeOption } from "../../Api/AttributeSelect";

export const AttributeSelect =withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getAttributeSelect(page);
        setData(data); 
        setItem(data?.content) 
    }
    async function searchHandler()
    {
        if(search=="")
        {
            getData();
        }
        else{
        let data =await  searchAttributeOption(search);
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
                    {edit ? <AttributeSelectEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <AttributeSelectInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={searchHandler} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <AttributeSelectTablePanel
                        editMode={() => {
                            setEdit(true)
                        }}
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
