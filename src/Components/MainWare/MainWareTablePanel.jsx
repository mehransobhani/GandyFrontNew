import Thead from "../Table/Thead";
import Table from "../Table/Table";
import { MainWareTableRow } from "./MainWareTableRow";

export const MainWareTablePanel = ({ editMode, editItem, reload, data }) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    { title: "شناسه" },
                    { title: "نام" },
                    { title: "آدرس" },
                    { title: "نوع محصول" },
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
