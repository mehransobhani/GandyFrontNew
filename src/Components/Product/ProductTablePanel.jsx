import Thead from "../Table/Thead";
import Table from "../Table/Table";
import {ProductTableRow} from "./ProductTableRow";

export const ProductTablePanel = ({editMode , editItem,reload , data}) => {
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
                    {
                        data && data.map((item , index)=>(<>
                               <ProductTableRow editMode={editMode} editItem={editItem}  reload={reload} item={item}/>
                        </>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
