import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {UserEditPanel} from "../../Components/User/UserEditPanel";
import {UserInsertPanel} from "../../Components/User/UserInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {UserTablePanel} from "../../Components/User/UserTablePanel";
import Pagination from "../../Components/Pagination";
import {getUser, getUserByWords} from "../../Api/User";

export const User  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getUser(page);
        setData(data);
        setItem(data?.content)
    }
    async function searchUserHandler()
    {
        if(search=="")
        {
            getData();
        }
        else{
        let data =await  getUserByWords(search);
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
                    {edit ? <UserEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <UserInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={searchUserHandler} change={setSearch}/>
                </div>
                {
                    console.log("ITEM IS ",item)
                }
                <div className={"mb-10"}>
                    <UserTablePanel
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
