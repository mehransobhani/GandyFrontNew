import withAuth from "../../AuthMiddleware";
import {useEffect, useState} from "react";
import AdminLayout from "../../Layout/AdminLayout";
import {SliderEditPanel} from "../../Components/Slider/SliderEditPanel";
import {SliderInsertPanel} from "../../Components/Slider/SliderInsertPanel";
import {SearchBox} from "../../Components/Form/SearchBox";
import {SliderTablePanel} from "../../Components/Slider/SliderTablePanel";
import Pagination from "../../Components/Pagination";
import {getSlider, getSliderByWords} from "../../Api/Slider";

export const Slider  = withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(undefined);

    async function getData(page=0)
    {
        let data =await  getSlider(page);
        setData(data);
        setItem(data?.content)
    }
    async function searchSliderHandler()
    {
        if(search=="")
        {
            getData();
        }
        else{
            let data =await  getSliderByWords(search);
            setItem(data);
        }
    }

    useEffect(()=>{
        getData();
    },[])
    return (
        <>
            <AdminLayout>
                <div className={"mb-10"}>
                    {edit ? <SliderEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <SliderInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={searchSliderHandler} change={setSearch}/>
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
                <div className={"mb-10"}>
                    <Pagination currentPage={(data?.pageable?.pageNumber==0?1:data?.pageable?.pageNumber)} totalPage={data?.totalPages} click={getData} />

                </div>
            </AdminLayout>
        </>
    )
})
