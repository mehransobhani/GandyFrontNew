import withAuth from "../../AuthMiddleware";
import {useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {ArticleEditPanel} from "../../Components/Article/ArticleEditPanel";
import {ArticleInsertPanel} from "../../Components/Article/ArticleInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {ArticleTablePanel} from "../../Components/Article/ArticleTablePanel";
import Pagination from "../../Components/Pagination";
import {getArticle} from "../../Api/Article";

export const Article  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getProductImage(page);
        setData(data); 
        setItem(data?.content) 
    }
    async function searchProductHandler()
    {
    //     if(search=="")
    //     {
    //         getData();
    //     }
    //     else{
    //     let data =await  searchProduct(search);
    //     setProduct(data); 
    // }
}
 
    useEffect(()=>{
        getData();
    },[])
    return (
        <>
            <AdminLayout>
                <div className={"mb-10"}>
                    {edit ? <ArticleEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <ArticleInsertPanel reload={getData}/>}
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
                        reload={getData}
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
