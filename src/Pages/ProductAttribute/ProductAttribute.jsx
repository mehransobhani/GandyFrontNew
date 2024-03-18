import withAuth from "../../AuthMiddleware";
import AdminLayout from "../../Layout/AdminLayout";
import {SearchBox} from "../../Components/Form/SearchBox";
import Pagination from "../../Components/Pagination";
import {useState} from "react";
import {ProductAttributeTablePanel} from "../../Components/ProductAttribute/ProductAttributeTablePanel";
import {ProductAttributeInsertPanel} from "../../Components/ProductAttribute/ProductAttributeInsertPanel";
import {ProductAttributeEditPanel} from "../../Components/ProductAttribute/ProductAttributeEditPanel";
import {getProductAttribute} from "../../Api/ProductAttribute";

export const ProductAttribute =withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);

    async function getData()
    {
        let data =await  getProductAttribute();
    }
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
                    <SearchBox searchSubmit={getData} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <ProductAttributeTablePanel
                        editMode={() => {
                            setEdit(true)
                        }}
                        editItem={setEditItem}
                        data={data}
                        reload={getData}

                    />
                </div>
                <div className={"mb-10"}>
                    <Pagination currentPage={1} totalPage={10}/>
                </div>
            </AdminLayout>
        </>
    )
})
