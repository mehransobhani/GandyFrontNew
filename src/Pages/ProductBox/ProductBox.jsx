import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {ProductBoxEditPanel} from "../../Components/ProductBox/ProductBoxEditPanel";
import {ProductBoxInsertPanel} from "../../Components/ProductBox/ProductBoxInsertPanel";
import {ProductBoxTablePanel} from "../../Components/ProductBox/ProductBoxTablePanel";
import Pagination from "../../Components/Pagination";
import {getProductBox} from "../../Api/ProductBox";

export const ProductBox  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData()
    {
        let data =await  getProductBox();
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
                    {edit ? <ProductBoxEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <ProductBoxInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
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

            </AdminLayout>
        </>
    )
})
