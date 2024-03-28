import Thead from "../Table/Thead";
import Table from "../Table/Table";
import {AttributeNameTableRow} from "./AttributeNameTableRow";

export const AttributeNameTablePanel = ({editMode , editItem , reload ,data}) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    {title:"نام ویژگی"},
                    {title:"ویرایش"},
                    {title:"حذف"},

                ]}/>
                <tbody>
                    {console.log(data)}
                {
                        data && data.map((item,index)=>(
                            <AttributeNameTableRow editMode={editMode} editItem={editItem} reload={reload} item={item}/>
                            ))
                    }
                </tbody>
            </Table>
        </>
    )
}
