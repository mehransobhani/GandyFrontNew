import AdminLayout from "../../Layout/AdminLayout";
import withAuth from "../../AuthMiddleware";
import {SearchBox} from "../../Components/Form/SearchBox";
import Pagination from "../../Components/Pagination";
import {useState} from "react";
import {ProductSuggestInsertPanel} from "../../Components/ProductSuggest/ProductSuggestInsertPanel";
import {ProductSuggestTablePanel} from "../../Components/ProductSuggest/ProductSuggestTablePanel";
import {ProductSuggestEditPanel} from "../../Components/ProductSuggest/ProductSuggestEditPanel";
import {getProductImage} from "../../Api/ProductImage";

export const ProductSuggest = withAuth(() => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(true);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);

    async function getData()
    {
        let data =await  getProductImage();
    }
    return (
        <>
            <AdminLayout>
                <div className={"mb-10"}>
                    {edit ? <ProductSuggestEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <ProductSuggestInsertPanel  reload={getData}/>}
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
                        reload={getData}

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
