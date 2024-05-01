import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {CategoryEditPanel} from "../../Components/Category/CategoryEditPanel";
import {CategoryInsertPanel} from "../../Components/Category/CategoryInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {CategoryTablePanel} from "../../Components/Category/CategoryTablePanel";
import Pagination from "../../Components/Pagination";
import {getCategory, getCategoryByWords} from "../../Api/Category";

export const Category  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getCategory(page);
        setData(data);
        setItem(data?.content)
    }
    async function searchCategoryHandler()
    {
        if(search=="")
        {
            getData();
        }
        else{
        let data =await  getCategoryByWords(search);
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
                    {edit ? <CategoryEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <CategoryInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={searchCategoryHandler} change={setSearch}/>
                </div>
                {
                    console.log("ITEM IS ",item)
                }
                <div className={"mb-10"}>
                    <CategoryTablePanel
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
