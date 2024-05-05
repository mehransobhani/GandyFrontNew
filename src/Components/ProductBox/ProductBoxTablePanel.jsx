import Thead from "../Table/Thead";
import Table from "../Table/Table";
import { ProductBoxTableRow } from "./ProductBoxTableRow";

export const ProductBoxTablePanel = ({ editMode, editItem, reload, data }) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    { title: "شناسه" },
                    { title: "boxNum" },
                    { title: "محصول" },

                    { title: "ویرایش" },
                    { title: "حذف" },

                ]} />
                <tbody>
                    {
                        data && data.map((item, index) => (
                            <ProductBoxTableRow editMode={editMode} editItem={editItem} reload={reload} item={item} />
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
