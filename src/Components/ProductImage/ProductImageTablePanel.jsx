import Thead from "../Table/Thead";
import Table from "../Table/Table";
import {ProductImageTableRow} from "./ProductImageTableRow";


export const ProductImageTablePanel = () => {
    return (
        <>

            <Table>
                <Thead heads={[
                    {title:"نام محصول"},
                    {title:"تصویر"},
                    {title:"ویرایش"},
                    {title:"حذف"},

                ]}/>
                <tbody>
                <ProductImageTableRow />
                </tbody>
            </Table>
        </>
    )
}
