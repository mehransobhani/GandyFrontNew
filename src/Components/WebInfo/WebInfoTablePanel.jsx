import Thead from "../Table/Thead";
import Table from "../Table/Table";
import { WebInfoTableRow } from "./WebInfoTableRow";

export const WebInfoTablePanel = ({ editMode, editItem, reload, data }) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    { title: "شناسه" },
                    { title: "نام" },
                    { title: "تلفن" },
                    { title: "موبایل" },
                    { title: "اینستاگرام" },
                    { title: "واتساپ" },
                    { title: "تلگرام" },
                    { title: "ایمیل" },
                    { title: "ساعت کاری" },
                    { title: "آدرس" },
                    { title: "درباره ما" },
                    { title: "ویرایش" },
                    { title: "حذف" },

                ]} />
                <tbody>
                    {
                        data && data.map((item, index) => (
                            <WebInfoTableRow editMode={editMode} editItem={editItem} reload={reload} item={item} />
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
