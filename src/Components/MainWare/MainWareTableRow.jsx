import Tr from "../Table/Tr";
import Td from "../Table/Td";
import {PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import Modal from "../Modal/Modal";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import { useState } from "react";
import { removeMainWare } from "../../Api/MainWare";
import { toast } from "react-toastify";

export function MainWareTableRow({ editMode, editItem, reload, item }) {
    const [deleteModal, setDeleteModal] = useState(false);


    function setEditMode() {
        console.log("EDit")
        editItem(item);
        editMode();
    }

    async function removeHandle() {
        let response = await removeMainWare(item.id);
        reload();
        toast.success("عملیات با موفقیت انجام شد")
        setDeleteModal(false);
    }
    return (
        <>
            <tr className={"text-right"}>
                <Modal isOpen={deleteModal} title={"حذف"} onClose={() => setDeleteModal(false)}>
                    <strong className={"font-bold"}>آیا از حذف این محصول اطمینان دارید ؟</strong>
                    <hr />
                    <div className={"flex flex-row gap-2"}>
                        <ConfirmButton title={"حذف"} click={removeHandle} />
                        <CancelButton title={" انصراف"} click={() => setDeleteModal(false)} />
                    </div>
                </Modal>
            </tr>

            <Tr>
                <Td>{item.id}</Td>


                <Td><PencilSquareIcon
                    onClick={setEditMode}
                    className="h-6 w-6 text-indigo-500 hover:text-indigo-600 mx-auto cursor-pointer" /></Td>
                <Td><TrashIcon onClick={() => {
                    setDeleteModal(true)
                }} className="h-6 w-6 text-indigo-500 hover:text-indigo-600 mx-auto cursor-pointer" /></Td>
            </Tr>
        </>
    )
}
