import Thead from "../Table/Thead";
import Table from "../Table/Table";
import {ProductImageTableRow} from "./ProductImageTableRow";


export const ProductImageTablePanel = ({editMode , editItem}) => {
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
                <ProductImageTableRow editMode={editMode} editItem={editItem}/>
                </tbody>
            </Table>
        </>
    )
}
