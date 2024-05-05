import Thead from "../Table/Thead";
import Table from "../Table/Table";
import { CoverTableRow } from "./CoverTableRow";

export const CoverTablePanel = ({ editMode, editItem, reload, data }) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    { title: "شناسه" },
                    { title: "موقعیت" },
                    { title: "ستون" },
                    { title: "ادرس" },
                    { title: "قیمت" },
                    { title: "نوع محصول" },
                    { title: "تگ محصول" },
                    { title: "ویژگی محصول" },
                    { title: "ویرایش" },
                    { title: "حذف" },

                ]} />
                <tbody>
                    {
                        data && data.map((item, index) => (
                            <CoverTableRow editMode={editMode} editItem={editItem} reload={reload} item={item} />
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
