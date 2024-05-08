import Thead from "../Table/Thead";
import Table from "../Table/Table";
import { SliderTableRow } from "./SliderTableRow";

export const SliderTablePanel = ({ editMode, editItem, reload, data }) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    { title: "شناسه" },
                    { title: "آدرس" },
                    { title: "قیمت" },
                    { title: "نوع محصول" },
                    { title: "تگ محصول" },
                    { title: "ویژگی محصول" },
                     { title: "حذف" },

                ]} />
                <tbody>
                    {
                        data && data.map((item, index) => (
                            <SliderTableRow editMode={editMode} editItem={editItem} reload={reload} item={item} />
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
