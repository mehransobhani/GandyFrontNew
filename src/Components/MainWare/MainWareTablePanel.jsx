import Thead from "../Table/Thead";
import Table from "../Table/Table";
import { MainWareTableRow } from "./MainWareTableRow";

export const MainWareTablePanel = ({ editMode, editItem, reload, data }) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    { title: "شناسه" },
                    { title: "کاربر" },
                    { title: "کد پسیتی" },
                    { title: "ادرس" },
                    { title: "محله" },
                    { title: "طبقه" },
                    { title: "پلاک" },
                    { title: "استان" },
                    { title: "شهر" },
                    { title: "ویرایش" },
                    { title: "حذف" },

                ]} />
                <tbody>
                    {
                        data && data.map((item, index) => (
                            <MainWareTableRow editMode={editMode} editItem={editItem} reload={reload} item={item} />
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
