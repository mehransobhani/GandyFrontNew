import Tr from "../Table/Tr";
import Td from "../Table/Td";
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/solid";
import Modal from "../Modal/Modal";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import {useState} from "react";

export function ProductInfoTableRow() {
    const [deleteModal, setDeleteModal] = useState(false);

    return (
        <>
            <tr className={"text-right"}>
                <Modal isOpen={deleteModal} title={"حذف"} onClose={() => setDeleteModal(false)}>
                    <strong className={"font-bold"}>آیا از حذف این تصویر اطمینان دارید ؟</strong>
                    <hr/>
                    <div className={"flex flex-row gap-2"}>
                        <ConfirmButton title={"حذف"}/>
                        <CancelButton title={" انصراف"} click={() => setDeleteModal(false)}/>
                    </div>
                </Modal>
            </tr>
            <Tr>
                <Td>A21s</Td>
                <Td>mobile samsung</Td>
                <Td>mobile</Td>
                <Td>samsung</Td>
                <Td>بله</Td>
                <Td>mobile samsung</Td>
                <Td>mobile</Td>
                <Td>بله</Td>
                <Td><PencilSquareIcon className="h-6 w-6 text-indigo-500 hover:text-indigo-600 mx-auto cursor-pointer"/></Td>
                <Td><TrashIcon onClick={()=>{setDeleteModal(true)}} className="h-6 w-6 text-indigo-500 hover:text-indigo-600 mx-auto cursor-pointer"/></Td>
            </Tr>
        </>
    )
}
