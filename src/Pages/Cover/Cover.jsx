import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {CoverEditPanel} from "../../Components/Cover/CoverEditPanel";
import {CoverInsertPanel} from "../../Components/Cover/CoverInsertPanel";
import {CoverTablePanel} from "../../Components/Cover/CoverTablePanel";
import Pagination from "../../Components/Pagination";
import {getCover} from "../../Api/Cover";

export const Cover  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getCover(page);
        setData(data);
        setItem(data?.content)
    }

    useEffect(()=>{
        getData();
    },[])
    return (
        <>
            <AdminLayout>
                <div className={"mb-10"}>
                    {edit ? <CoverEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <CoverInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <CoverTablePanel
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
