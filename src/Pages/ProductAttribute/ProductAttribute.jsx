import withAuth from "../../AuthMiddleware";
import AdminLayout from "../../Layout/AdminLayout";
import {SearchBox} from "../../Components/Form/SearchBox";
import Pagination from "../../Components/Pagination";
import {useEffect, useState} from "react";
import {ProductAttributeTablePanel} from "../../Components/ProductAttribute/ProductAttributeTablePanel";
import {ProductAttributeInsertPanel} from "../../Components/ProductAttribute/ProductAttributeInsertPanel";
import {ProductAttributeEditPanel} from "../../Components/ProductAttribute/ProductAttributeEditPanel";
import {getProductAttribute, searchAttributeOption} from "../../Api/ProductAttribute";

export const ProductAttribute =withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getProductAttribute(page);
        setData(data);
        setItem(data?.content)
    }
    async function searchProductHandler()
    {
            if(search=="")
            {
                getData();
            }
            else{
            let data =await  searchAttributeOption(search);
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
                    {edit ? <ProductAttributeEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <ProductAttributeInsertPanel  reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={searchProductHandler} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <ProductAttributeTablePanel
                        editMode={() => {
                            setEdit(true)
                        }}
                        editItem={setEditItem}
                        data={item}
                        reload={getData}

                    />
                </div>
                <div className={"mb-10"}>
                <Pagination currentPage={(data?.pageable?.pageNumber==0?1:data?.pageable?.pageNumber)} totalPage={data?.totalPages} click={getData} />
                </div>
            </AdminLayout>
        </>
    )
})
