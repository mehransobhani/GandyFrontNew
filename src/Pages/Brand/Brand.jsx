import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {BrandEditPanel} from "../../Components/Brand/BrandEditPanel";
import {BrandInsertPanel} from "../../Components/Brand/BrandInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {BrandTablePanel} from "../../Components/Brand/BrandTablePanel";
import Pagination from "../../Components/Pagination";
import {getBrand, getBrandByWords} from "../../Api/Brand";

export const Brand  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getBrand(page);
        setData(data);
        setItem(data?.content)
    }
    async function searchBrandHandler()
    {
        if(search=="")
        {
            getData();
        }
        else{
        let data =await  getBrandByWords(search);
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
                    {edit ? <BrandEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <BrandInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={searchBrandHandler} change={setSearch}/>
                </div>
                {
                    console.log("ITEM IS ",item)
                }
                <div className={"mb-10"}>
                    <BrandTablePanel
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
