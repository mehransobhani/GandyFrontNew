import withAuth from "../../AuthMiddleware";
import AdminLayout from "../../Layout/AdminLayout";
import {ProductEditPanel} from "../../Components/Product/ProductEditPanel";
import {ProductInsertPanel} from "../../Components/Product/ProductInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {ProductTablePanel} from "../../Components/Product/ProductTablePanel";
import Pagination from "../../Components/Pagination";
import {useState} from "react";
import {AttributeSelectTablePanel} from "../../Components/AttributeSelect/AttributeSelectTablePanel";
import {AttributeSelectInsertPanel} from "../../Components/AttributeSelect/AttributeSelectInsertPanel";
import {AttributeSelectEditPanel} from "../../Components/AttributeSelect/AttributeSelectEditPanel";

export const AttributeSelect =withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);

    function getData()
    {
        console.log(search);
    }
    return (
        <>
            <AdminLayout>
                <div className={"mb-10"}>
                    {edit ? <AttributeSelectEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <AttributeSelectInsertPanel/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={getData} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <AttributeSelectTablePanel
                        editMode={() => {
                            setEdit(true)
                        }}
                        editItem={setEditItem}
                        data={data}
                    />
                </div>
                <div className={"mb-10"}>
                    <Pagination currentPage={1} totalPage={10}/>
                </div>
            </AdminLayout>
        </>
    )
})
