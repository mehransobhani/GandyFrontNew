import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {WarrantyEditPanel} from "../../Components/Warranty/WarrantyEditPanel";
import {WarrantyInsertPanel} from "../../Components/Warranty/WarrantyInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {WarrantyTablePanel} from "../../Components/Warranty/WarrantyTablePanel";
import Pagination from "../../Components/Pagination";
import {getWarranty, findWarrantyByproductName} from "../../Api/Warranty";

export const Warranty  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getWarranty(page);
        setData(data);
        setItem(data?.content)
    }
    async function searchWarrantyHandler()
    {
        if(search=="")
        {
            getData();
        }
        else{
            let data =await  findWarrantyByproductName(search);
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
                    {edit ? <WarrantyEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <WarrantyInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={searchWarrantyHandler} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <WarrantyTablePanel
                        editMode={() => {
                            setEdit(true)
                        }}
                        editItem={setEditItem}
                        reload={getData}
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
