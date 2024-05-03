import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout"; 
import {SearchBox} from "../../Components/Form/SearchBox";
import {SubCategoryTablePanel} from "../../Components/SubCategory/SubCategoryTablePanel";
import Pagination from "../../Components/Pagination";
import {getCategoryByWords, getSubCategory} from "../../Api/SubCategory";
import { SubCategoryEditPanel } from "../../Components/SubCategory/SubCategoryEditPanel";
import { SubCategoryInsertPanel } from "../../Components/SubCategory/SubCategoryInsertPanel";

export const SubCategory  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getSubCategory(page);
        setData(data);
        setItem(data?.content)
    }
    async function searchSubCategoryHandler()
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
                    {edit ? <SubCategoryEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <SubCategoryInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={searchSubCategoryHandler} change={setSearch}/>
                </div>
                {
                    console.log("ITEM IS ",item)
                }
                <div className={"mb-10"}>
                    <SubCategoryTablePanel
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
