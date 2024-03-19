import Thead from "../Table/Thead";
import Table from "../Table/Table";
import {ProductImageTableRow} from "./ProductImageTableRow";


export const ProductImageTablePanel = ({editMode , editItem,reload,data}) => {
    return (
        <>
        {console.log("DT",data)}

            <Table>
                <Thead heads={[
                    {title:"نام محصول"},
                    {title:"تصویر"},
                    {title:"ویرایش"},
                    {title:"حذف"},

                ]}/>
                <tbody>
                    {
                        data && data.map((item,index)=>(
                            <ProductImageTableRow editMode={editMode} editItem={editItem} reload={reload} item={item}/>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
