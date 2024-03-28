import Tr from "../Table/Tr";
import Td from "../Table/Td";
import {EyeIcon, PencilSquareIcon, TrashIcon} from "@heroicons/react/24/solid";
import Modal from "../Modal/Modal";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import {useState} from "react";
import {removeArticle} from "../../Api/Article";
import {toast} from "react-toastify";

export function ArticleTableRow({editMode ,editItem , reload , item}) {
    const [deleteModal, setDeleteModal] = useState(false);
    const [previewModal, setPreviewModal] = useState(false);


    function setEditMode(){
        console.log("EDit")
        editItem(item);
        editMode();
    }

    async function removeHandle(){
        let response=await removeArticle(item.id);
        reload();
        toast.success("عملیات با موفقیت انجام شد")
        setDeleteModal(false);
    }
    return (
        <>
            <tr className={"text-right"}>
                <Modal isOpen={deleteModal} title={"حذف"} onClose={() => setDeleteModal(false)}>
                    <strong className={"font-bold"}>آیا از حذف این محصول اطمینان دارید ؟</strong>
                    <hr/>
                    <div className={"flex flex-row gap-2"}>
                        <ConfirmButton title={"حذف"}  click={removeHandle}/>
                        <CancelButton title={" انصراف"} click={() => setDeleteModal(false)}/>
                    </div>
                </Modal>
            </tr>
            <tr className={"text-right"}>
                <Modal isOpen={previewModal} title={"پیش نمایش"} onClose={() => setPreviewModal(false)}>
                    <strong className={"font-bold"}>آیا از حذف این محصول اطمینان دارید ؟</strong>
                    <hr/>
                    <div className={"flex flex-row gap-2"}>
                        <CancelButton title={" بستن"} click={() => setPreviewModal(false)}/>
                    </div>
                </Modal>
            </tr>
            <Tr>
                <Td>
                    <img src={""} className={"w-24 h-24 mx-auto"}/>
                </Td>
                <Td>A21s</Td>
                <Td>mobile samsung</Td>
                <Td>mobile</Td>
                <Td>
                    <div className={"  whitespace-normal overflow-hidden line-clamp-1"}>
                        آیا از حذف این محصول اطمینان دارید ؟آیا از حذف این محصول اطمینان دارید ؟آیا از حذف این محصول اطمینان دارید ؟آیا از حذف این محصول اطمینان دارید ؟آیا از حذف این محصول اطمینان دارید ؟آیا از حذف این محصول اطمینان دارید ؟آیا از حذف این محصول اطمینان دارید ؟آیا از حذف این محصول اطمینان دارید ؟آیا از حذف این محصول اطمینان آیا از حذف این محصول اطمینان دارید ؟آیا از حذف این محصول اطمینان دارید ؟آیا از حذف این محصول اطمینان دارید ؟دارید ؟آیا از حذف این محصول اطمینان دارید ؟
                </div>
                </Td>
                 <Td><EyeIcon onClick={() => {
                    setPreviewModal(true)
                }}
                             className="h-6 w-6 text-indigo-500 hover:text-indigo-600 mx-auto cursor-pointer"/></Td>
                <Td><PencilSquareIcon
                    onClick={setEditMode}
                    className="h-6 w-6 text-indigo-500 hover:text-indigo-600 mx-auto cursor-pointer"/></Td>
                <Td><TrashIcon onClick={() => {
                    setDeleteModal(true)
                }} className="h-6 w-6 text-indigo-500 hover:text-indigo-600 mx-auto cursor-pointer"/></Td>
            </Tr>
        </>
    )
}
