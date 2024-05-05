import Thead from "../Table/Thead";
import Table from "../Table/Table";
import { CategoryTableRow } from "./CategoryTableRow";

export const CategoryTablePanel = ({ editMode, editItem, reload, data }) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    { title: "شناسه" },
                    { title: "نام" },
                    { title: "آدرس" },
                    { title: "قیمت" },
                    { title: "فعال" },
                    { title: "اصلی" },
                    { title: "نوع محصول" },
                    { title: "تگ محصول" },
                    { title: "ویژگی محصول" },
                    { title: "ویرایش" },
                    { title: "حذف" },

                ]} />
                <tbody>
                {
                    data && data.map((item, index) => (
                        <CategoryTableRow editMode={editMode} editItem={editItem} reload={reload} item={item} />
                    ))
                }
                </tbody>
            </Table>
        </>
    )
}
