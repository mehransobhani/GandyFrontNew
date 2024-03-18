import Thead from "../Table/Thead";
import Table from "../Table/Table";
import {ProductSuggestTableRow} from "./ProductSuggestTableRow";

export const ProductSuggestTablePanel = ({editMode , editItem,reload}) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    {title:"محصول"},
                    {title:"تاریخ انقضا"},
                    {title:"تاریخ ایجاد"},
                    {title:"ویرایش"},
                    {title:"حذف"},

                ]}/>
                <tbody>
                <ProductSuggestTableRow editMode={editMode} editItem={editItem} reload={reload}/>
                </tbody>
            </Table>
        </>
    )
}
