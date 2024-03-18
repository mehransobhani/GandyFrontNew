import Thead from "../Table/Thead";
import Table from "../Table/Table";
import {ProductTypeTableRow} from "./ProductTypeTableRow";

export const ProductTypeTablePanel = ({editMode , editItem,reload}) => {
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
                <ProductTypeTableRow editMode={editMode} editItem={editItem} reload={reload} />
                </tbody>
            </Table>
        </>
    )
}
