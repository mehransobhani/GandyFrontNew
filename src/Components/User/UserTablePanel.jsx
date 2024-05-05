import Thead from "../Table/Thead";
import Table from "../Table/Table";
import { UserTableRow } from "./UserTableRow";

export const UserTablePanel = ({ editMode, editItem, reload, data }) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    { title: "شناسه" },
                    { title: "نام" },
                    { title: "  نام خانوادگی" },
                    { title: "  شماره موبایل" },
                    { title: " کد ملی" },
                    { title: "پسورد" },
                    { title: "تاریخ ایجاد" },
                    { title: "نقش" },
                    { title: "فعال" },
                    { title: "ویرایش" },
                    { title: "حذف" },

                ]} />
                <tbody>
                    {
                        data && data.map((item, index) => (
                            <UserTableRow editMode={editMode} editItem={editItem} reload={reload} item={item} />
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
