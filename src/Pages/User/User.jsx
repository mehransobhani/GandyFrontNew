import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {SearchBox} from "../../Components/Form/SearchBox";
import {UserTablePanel} from "../../Components/User/UserTablePanel";
import Pagination from "../../Components/Pagination";
import {getUser, getUserByMobile} from "../../Api/User";
import {UserEditPanel} from "../../Components/User/UserEditPanel";
import {UserInsertPanel} from "../../Components/User/UserInsertPanel";

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
        let data =await  getUserByMobile(search);
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
                    }}/> : <div className="flex">
                        <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                              کاربران
                        </h2>
                    </div>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={searchUserHandler} change={setSearch}/>
                </div>
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
