import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {ProductTagEditPanel} from "../../Components/ProductTag/ProductTagEditPanel";
import {ProductTagInsertPanel} from "../../Components/ProductTag/ProductTagInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {ProductTagTablePanel} from "../../Components/ProductTag/ProductTagTablePanel";
import Pagination from "../../Components/Pagination";
import {getProductTag, getProductTagByWords} from "../../Api/ProductTag";

export const ProductTag  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getProductTag(page);
        setData(data);
        setItem(data?.content)
    }
    async function searchProductTagHandler()
    {
        if(search=="")
        {
            getData();
        }
        else{
            let data =await  getProductTagByWords(search);
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
                    {edit ? <ProductTagEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <ProductTagInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={searchProductTagHandler} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <ProductTagTablePanel
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
