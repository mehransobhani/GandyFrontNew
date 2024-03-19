import withAuth from "../../AuthMiddleware";
import AdminLayout from "../../Layout/AdminLayout";
import {SearchBox} from "../../Components/Form/SearchBox";
import Pagination from "../../Components/Pagination";
import {useState} from "react";
import {AttributeSelectTablePanel} from "../../Components/AttributeSelect/AttributeSelectTablePanel";
import {AttributeSelectInsertPanel} from "../../Components/AttributeSelect/AttributeSelectInsertPanel";
import {AttributeSelectEditPanel} from "../../Components/AttributeSelect/AttributeSelectEditPanel";
import {getAttributeSelect} from "../../Api/AttributeSelect";

export const AttributeSelect =withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);

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
                    {edit ? <AttributeSelectEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <AttributeSelectInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={getData} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <AttributeSelectTablePanel
                        editMode={() => {
                            setEdit(true)
                        }}
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
