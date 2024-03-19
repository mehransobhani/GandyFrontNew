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
                {
                        data && data.map((item,index)=>(
                            <ProductSuggestTableRow editMode={editMode} editItem={editItem} reload={reload} item={item}/>
                            ))
                    }
                </tbody>
            </Table>
        </>
    )
}
