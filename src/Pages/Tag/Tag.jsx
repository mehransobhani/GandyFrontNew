import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {TagEditPanel} from "../../Components/Tag/TagEditPanel";
import {TagInsertPanel} from "../../Components/Tag/TagInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {TagTablePanel} from "../../Components/Tag/TagTablePanel";
import Pagination from "../../Components/Pagination";
import {getTag, getTagByWords} from "../../Api/Tag";

export const Tag  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getTag(page);
        setData(data);
        setItem(data?.content)
    }
    async function searchTagHandler()
    {
        if(search=="")
        {
            getData();
        }
        else{
            let data =await  getTagByWords(search);
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
                    {edit ? <TagEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <TagInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={searchTagHandler} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <TagTablePanel
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
