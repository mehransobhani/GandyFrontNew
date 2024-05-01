import Thead from "../Table/Thead";
import Table from "../Table/Table";
import { DiscountTableRow } from "./DiscountTableRow";

export const DiscountTablePanel = ({ editMode, editItem, reload, data }) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    { title: "شناسه" },
                    { title: "تخفیف" },
                    { title: "تاریخ ایجاد" },
                    { title: "تاریخ انقضا" },
                    { title: "ویرایش" },
                    { title: "حذف" },

                ]} />
                <tbody>
                    {
                        data && data.map((item, index) => (
                            <DiscountTableRow editMode={editMode} editItem={editItem} reload={reload} item={item} />
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
