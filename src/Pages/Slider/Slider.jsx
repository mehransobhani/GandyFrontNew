import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {SliderEditPanel} from "../../Components/Slider/SliderEditPanel";
import {SliderInsertPanel} from "../../Components/Slider/SliderInsertPanel";
import {SliderTablePanel} from "../../Components/Slider/SliderTablePanel";
import Pagination from "../../Components/Pagination";
import {getSlider} from "../../Api/Slider";

export const Slider  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData()
    {
        let data =await  getSlider();
        setData(data);
        setItem(data)
    }


    useEffect(()=>{
        getData();
    },[])
    return (
        <>
            <AdminLayout>
                <div className={"mb-10"}>
                    {/*{edit ? <SliderEditPanel item={editItem} reload={getData} cancel={() => {*/}
                    {/*    setEdit(false)*/}
                    {/*}}/> : <SliderInsertPanel reload={getData}/>}*/}
                    {<SliderInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>

                <div className={"mb-10"}>
                    <SliderTablePanel
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
