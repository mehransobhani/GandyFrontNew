import AdminLayout from "../../Layout/AdminLayout";
import withAuth from "../../AuthMiddleware";
import {SearchBox} from "../../Components/Form/SearchBox";
import Pagination from "../../Components/Pagination";
import {useState} from "react";
import {ProductSuggestInsertPanel} from "../../Components/ProductSuggest/ProductSuggestInsertPanel";
import {ProductSuggestTablePanel} from "../../Components/ProductSuggest/ProductSuggestTablePanel";
import {ProductSuggestEditPanel} from "../../Components/ProductSuggest/ProductSuggestEditPanel";

export const ProductSuggest = withAuth(() => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(true);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);

    function getData() {
        console.log(search);
    }

    return (
        <>
            <AdminLayout>
                <div className={"mb-10"}>
                    {edit ? <ProductSuggestEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <ProductSuggestInsertPanel/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={getData} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <ProductSuggestTablePanel
                        editMode={() => {
                            setEdit(true)
                        }}
                        editItem={setEditItem}
                        data={data}/>
                </div>
                <div className={"mb-10"}>
                    <Pagination currentPage={1} totalPage={10}/>
                </div>

            </AdminLayout>
        </>
    )
})
