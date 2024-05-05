import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {WebInfoEditPanel} from "../../Components/WebInfo/WebInfoEditPanel";
import {WebInfoInsertPanel} from "../../Components/WebInfo/WebInfoInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {WebInfoTablePanel} from "../../Components/WebInfo/WebInfoTablePanel";
import Pagination from "../../Components/Pagination";
import {getWebInfo, getWebInfoByWords} from "../../Api/WebInfo";

export const WebInfo  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getWebInfo(page);
        setData(data);
        setItem(data?.content)
    }
    async function searchWebInfoHandler()
    {
        if(search=="")
        {
            getData();
        }
        else{
            let data =await  getWebInfoByWords(search);
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
                    {edit ? <WebInfoEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <WebInfoInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={searchWebInfoHandler} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <WebInfoTablePanel
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
