import withAuth from "../../AuthMiddleware";
import {useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {ArticleEditPanel} from "../../Components/Article/ArticleEditPanel";
import {ArticleInsertPanel} from "../../Components/Article/ArticleInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {ArticleTablePanel} from "../../Components/Article/ArticleTablePanel";
import Pagination from "../../Components/Pagination";

export const Article  = withAuth( () => {
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
                    {edit ? <ArticleEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <ArticleInsertPanel/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={getData} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <ArticleTablePanel
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
