import AdminLayout from "../../Layout/AdminLayout";
import withAuth from "../../AuthMiddleware";
import { SearchBox } from "../../Components/Form/SearchBox";
import Pagination from "../../Components/Pagination";
import { useEffect, useState } from "react";
import { ProductSuggestInsertPanel } from "../../Components/ProductSuggest/ProductSuggestInsertPanel";
import { ProductSuggestTablePanel } from "../../Components/ProductSuggest/ProductSuggestTablePanel";
import { ProductSuggestEditPanel } from "../../Components/ProductSuggest/ProductSuggestEditPanel";
import { getProductSuggest, searchProductSuggest } from "../../Api/ProductSuggest";

export const ProductSuggest = withAuth(() => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page = 0) {
        let data = await getProductSuggest(page);
        setData(data);
        setItem(data?.content)
    }
    async function searchProductHandler() {
        if (search == "") {
            getData();
        }
        else {
            let data = await searchProductSuggest(search);

            console.log("DATA AS" ,data)
            setItem(data);
        }
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <AdminLayout>
                <div className={"mb-10"}>
                    {edit ? <ProductSuggestEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }} /> : <ProductSuggestInsertPanel reload={getData} />}
                </div>
                <div className={"mb-10"}>
                    <hr />
                </div>
                {/*<div className={"mb-10"}>*/}
                {/*    <SearchBox searchSubmit={searchProductHandler} change={setSearch} />*/}
                {/*</div>*/}
                <div className={"mb-10"}>
                  { item && <ProductSuggestTablePanel
                        editMode={() => {
                            setEdit(true)
                        }}
                        reload={getData}
                        editItem={setEditItem}
                        data={item} />}
                </div>
                <div className={"mb-10"}>
                                <Pagination currentPage={(data?.pageable?.pageNumber==0?1:data?.pageable?.pageNumber)} totalPage={data?.totalPages} click={getData} />

                </div>

            </AdminLayout>
        </>
    )
})
