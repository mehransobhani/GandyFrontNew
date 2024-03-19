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
                {
                        data && data.map((item,index)=>(
                            <ProductTypeTableRow editMode={editMode} editItem={editItem} reload={reload} item={item} />
                            ))
                    }
                </tbody>
            </Table>
        </>
    )
}
