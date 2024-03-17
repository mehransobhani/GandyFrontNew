import Thead from "../Table/Thead";
import Table from "../Table/Table";
import {ProductAttributeTableRow} from "./ProductAttributeTableRow";

export const ProductAttributeTablePanel = ({editMode , editItem}) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    {title:"محصول"},
                    {title:"نام ویژگی"},
                    {title:"ویرایش"},
                    {title:"حذف"},

                ]}/>
                <tbody>
                <ProductAttributeTableRow editMode={editMode} editItem={editItem} />
                </tbody>
            </Table>
        </>
    )
}
