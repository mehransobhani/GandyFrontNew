import Input from "../Form/Input";
import { useState } from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import { editTag } from "../../Api/Tag";
import { toast } from "react-toastify";

export function TagEditPanel({ item, cancel, reload }) {
    const [tag, setTag] = useState(item.tag);
    const [id, setId] = useState(item.id);

    async function submit() {
        try {
            let response = await editTag(tag, id);
            reload();
            toast.success("عملیات با موفقیت انجام شد")
        }
        catch (e) {
            toast.error("متاسفانه عملیات با شکست روبرو شد")
        }
    }


    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ویرایش تگ
                    </h2>
                </div>
                <hr />
                <div className="space-y-12">

                    <div className=" ">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                 تگ
                                </label>
                                <div className="mt-2">
                                    <Input placeHolder={"تگ"} type={"text"} change={(e) => {
                                        setTag(e.target.value)
                                    }} value={tag} />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <ConfirmButton title={"ویرایش"} click={submit} />
                    <CancelButton title={"انصراف"} click={cancel} />
                </div>
            </div>

        </>

    )
}
