import withAuth from "../../AuthMiddleware";
import AdminLayout from "../../Layout/AdminLayout";
import {ProductEditPanel} from "../../Components/Product/ProductEditPanel";
import {ProductInsertPanel} from "../../Components/Product/ProductInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {ProductTablePanel} from "../../Components/Product/ProductTablePanel";
import Pagination from "../../Components/Pagination";
import {useState} from "react";
import {AttributeNameTablePanel} from "../../Components/AttributeName/AttributeNameTablePanel";
import {AttributeNameInsertPanel} from "../../Components/AttributeName/AttributeNameInsertPanel";
import {AttributeNameEditPanel} from "../../Components/AttributeName/AttributeNameEditPanel";

export const AttributeName =withAuth( () => {
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
                    {edit ? <AttributeNameEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <AttributeNameInsertPanel/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={getData} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <AttributeNameTablePanel
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
