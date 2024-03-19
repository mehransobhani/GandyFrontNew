import Thead from "../Table/Thead";
import Table from "../Table/Table";
import {ArticleTableRow} from "./ArticleTableRow";

export const ArticleTablePanel = ({editMode , editItem , reload}) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    {title:"تصویر"},
                    {title:"عنوان"},
                    {title:"توضیحات"},
                    {title:"ادرس"},
                    {title:"محتوا"},
                    {title:"پیش نمایش محتوا"},
                    {title:"ویرایش"},
                    {title:"حذف"},

                ]}/>
                <tbody>
                {
                        data && data.map((item,index)=>(
                            <ArticleTableRow editMode={editMode} editItem={editItem} reload={reload} item={item}/>
                            ))
                    }
                </tbody>
            </Table>
        </>
    )
}
