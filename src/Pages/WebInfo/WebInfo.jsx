import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {WebInfoEditPanel} from "../../Components/WebInfo/WebInfoEditPanel";
import {WebInfoInsertPanel} from "../../Components/WebInfo/WebInfoInsertPanel";
import {WebInfoTablePanel} from "../../Components/WebInfo/WebInfoTablePanel";
import {getWebInfo} from "../../Api/WebInfo";

export const WebInfo  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getWebInfo(page);
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
                    {edit ? <WebInfoEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <WebInfoInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div> 
                <div className={"mb-10"}>
                    <WebInfoTablePanel
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
