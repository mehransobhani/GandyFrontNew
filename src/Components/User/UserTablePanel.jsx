import Thead from "../Table/Thead";
import Table from "../Table/Table";
import { AddressTableRow } from "./AddressTableRow";

export const AddressTablePanel = ({ editMode, editItem, reload, data }) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    { title: "شناسه" },
                    { title: "تصویر" },
                    { title: "عنوان" },
                    { title: "توضیحات" },
                    { title: "ادرس" },
                    { title: "محتوا" },
                    { title: "پیش نمایش محتوا" },
                    { title: "ویرایش" },
                    { title: "حذف" },

                ]} />
                <tbody>
                    {
                        data && data.map((item, index) => (
                            <AddressTableRow editMode={editMode} editItem={editItem} reload={reload} item={item} />
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}