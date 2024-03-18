import Thead from "../Table/Thead";
import Table from "../Table/Table";
import {ProductTableRow} from "./ProductTableRow";

export const ProductTablePanel = ({editMode , editItem,reload}) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    {title:"نام محصول"},
                    {title:"توضیحات"},
                    {title:" نوع کالا"},
                    {title:"برند"},
                    {title:"پیشنهاد ویژه"},
                    {title:"ویرایش"},
                    {title:"حذف"},

                ]}/>
                <tbody>
                <ProductTableRow editMode={editMode} editItem={editItem}  reload={reload}/>
                </tbody>
            </Table>
        </>
    )
}
