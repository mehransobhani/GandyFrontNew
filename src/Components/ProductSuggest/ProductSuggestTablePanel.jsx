import Thead from "../Table/Thead";
import Table from "../Table/Table";
import {ProductSuggestTableRow} from "./ProductSuggestTableRow";

export const ProductSuggestTablePanel = () => {
    return (
        <>
            <Table>
                <Thead heads={[ 
                    {title:"محصول"},
                    {title:"تاریخ انقضا"}, 
                    {title:"ویرایش"},
                    {title:"حذف"},

                ]}/>
                <tbody>
                <ProductSuggestTableRow />
                </tbody>
            </Table>
        </>
    )
}
