import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {ProductBoxEditPanel} from "../../Components/ProductBox/ProductBoxEditPanel";
import {ProductBoxInsertPanel} from "../../Components/ProductBox/ProductBoxInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {ProductBoxTablePanel} from "../../Components/ProductBox/ProductBoxTablePanel";
import Pagination from "../../Components/Pagination";
import {getProductBox, getProductBoxByWords} from "../../Api/ProductBox";

export const ProductBox  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getProductBox(page);
        setData(data);
        setItem(data?.content)
    }
    async function searchProductBoxHandler()
    {
        if(search=="")
        {
            getData();
        }
        else{
            let data =await  getProductBox(1);
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
                    {edit ? <ProductBoxEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <ProductBoxInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={searchProductBoxHandler} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <ProductBoxTablePanel
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
