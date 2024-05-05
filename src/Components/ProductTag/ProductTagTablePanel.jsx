import Thead from "../Table/Thead";
import Table from "../Table/Table";
import { ProductTagTableRow } from "./ProductTagTableRow";

export const ProductTagTablePanel = ({ editMode, editItem, reload, data }) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    { title: "شناسه" },
                    { title: "محصول" },
                    { title: "تگ" },
                    { title: "ویرایش" },
                    { title: "حذف" },

                ]} />
                <tbody>
                    {
                        data && data.map((item, index) => (
                            <ProductTagTableRow editMode={editMode} editItem={editItem} reload={reload} item={item} />
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
