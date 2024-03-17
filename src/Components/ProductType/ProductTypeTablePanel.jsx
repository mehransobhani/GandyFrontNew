import Thead from "../Table/Thead";
import Table from "../Table/Table";
import {ProductTypeTableRow} from "./ProductTypeTableRow";

export const ProductTypeTablePanel = ({editMode , editItem}) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    {title:"تصویر"},
                    {title:"نام"},
                    {title:"والد"},
                     {title:"ویرایش"},
                    {title:"حذف"},

                ]}/>
                <tbody>
                <ProductTypeTableRow editMode={editMode} editItem={editItem} />
                </tbody>
            </Table>
        </>
    )
}
