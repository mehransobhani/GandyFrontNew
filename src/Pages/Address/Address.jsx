import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {AddressEditPanel} from "../../Components/Address/AddressEditPanel";
import {AddressInsertPanel} from "../../Components/Address/AddressInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {AddressTablePanel} from "../../Components/Address/AddressTablePanel";
import Pagination from "../../Components/Pagination";
import {getAddress, getAddressByWords, getAddressListByMobile, getUserByMobile} from "../../Api/Address";

export const Address  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getAddress(page);
        setData(data);
        setItem(data?.content)
    }
    async function searchAddressHandler()
    {
        if(search=="")
        {
            getData();
        }
        else{
        let data =await  getAddressListByMobile(search);
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
                    {edit ? <AddressEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <AddressInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={searchAddressHandler} change={setSearch}/>
                </div>
                {
                    console.log("ITEM IS ",item)
                }
                <div className={"mb-10"}>
                    <AddressTablePanel
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
