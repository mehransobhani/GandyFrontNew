import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {MainWareEditPanel} from "../../Components/MainWare/MainWareEditPanel";
import {MainWareInsertPanel} from "../../Components/MainWare/MainWareInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {MainWareTablePanel} from "../../Components/MainWare/MainWareTablePanel";
import Pagination from "../../Components/Pagination";
import {getMainWare, getMainWareByWords} from "../../Api/MainWare";

export const MainWare  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getMainWare(page);
        setData(data);
        setItem(data?.content)
    }
    async function searchMainWareHandler()
    {
        if(search=="")
        {
            getData();
        }
        else{
            let data =await  getMainWareByWords(search);
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
                    {edit ? <MainWareEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <MainWareInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={searchMainWareHandler} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <MainWareTablePanel
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
