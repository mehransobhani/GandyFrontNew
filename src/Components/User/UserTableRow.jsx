import Tr from "../Table/Tr";
import Td from "../Table/Td";
import { EyeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import Modal from "../Modal/Modal";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import { useState } from "react";
import { removeUser } from "../../Api/User";
import { toast } from "react-toastify";

export function UserTableRow({ editMode, editItem, reload, item }) {
    const [deleteModal, setDeleteModal] = useState(false);
    const [previewModal, setPreviewModal] = useState(false);


    function setEditMode() {
        console.log("EDit")
        editItem(item);
        editMode();
    }

    async function removeHandle() {
        let response = await removeUser(item.id);
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
                <Td>{item.name}</Td>
                <Td>{item.family}</Td>
                <Td>{item.mobile}</Td>
                <Td>{item.nationalCode}</Td>
                 <Td>{item.create_at}</Td>
                <Td>{item.roles[0]?.name}</Td>
                <Td>{item.active?"بله":"خیر"}</Td>
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
