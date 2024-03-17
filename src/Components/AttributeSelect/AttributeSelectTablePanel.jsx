import Thead from "../Table/Thead";
import Table from "../Table/Table";
import {AttributeSelectTableRow} from "./AttributeSelectTableRow";

export const AttributeSelectTablePanel = ({editMode , editItem}) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    {title:"نام ویژگی"},
                    {title:"مقدار ویژگی"},
                    {title:"ویرایش"},
                    {title:"حذف"},

                ]}/>
                <tbody>
                <AttributeSelectTableRow editMode={editMode} editItem={editItem} />
                </tbody>
            </Table>
        </>
    )
}
