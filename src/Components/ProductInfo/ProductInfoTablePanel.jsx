import Thead from "../Table/Thead";
import Table from "../Table/Table";
import { ProductInfoTableRow } from "./ProductInfoTableRow";

export const ProductInfoTablePanel = ({editMode , editItem,reload ,data}) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    {title:"تعداد"},
                    {title:"قیمت"},
                    {title:"رنگ"},
                    {title:"کد رنگ"},
                    {title:"تخفیف"},
                    {title:"محصول"},
                    {title:"تصویر"},
                    {title:"اصلی"},
                    {title:"ویرایش"},
                    {title:"حذف"},

                ]}/>
                <tbody>
                {
                        data && data.map((item,index)=>(
                            <ProductInfoTableRow editMode={editMode} editItem={editItem} reload={reload} item={item}/>
                            ))
                    }
                </tbody>
            </Table>
        </>
    )
}
