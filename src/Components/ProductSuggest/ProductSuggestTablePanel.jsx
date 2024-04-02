import Thead from "../Table/Thead";
import Table from "../Table/Table";
import { ProductSuggestTableRow } from "./ProductSuggestTableRow";

export const ProductSuggestTablePanel = ({ editMode, editItem, reload, data }) => {
    return (
        <>

            {console.log("DATA ",data)}
            <Table>
                <Thead heads={[
                    { title: "محصول" },
                    { title: "تاریخ انقضا" },
                    { title: "تاریخ ایجاد" },
                    { title: "ویرایش" },
                    { title: "حذف" },

                ]} />
                <tbody>
                    {console.log("DS", data)}
                    {
                        data && data.map((item, index) => (
                            <ProductSuggestTableRow editMode={editMode} editItem={editItem} reload={reload} item={item} />
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
