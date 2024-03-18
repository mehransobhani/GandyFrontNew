import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import Textarea from "../Form/Textarea";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Uploader from "../Form/Uploader";

export function ArticleInsertPanel() {

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [content,setContent]=useState("");
    const [url,setUrl]=useState("");
    const [image,setImage]=useState("");

    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ثبت مقاله جدید
                    </h2>
                </div>
                <hr/>

                <form>
                    <div className="space-y-12">

                        <div className=" ">


                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-full">
                                    <Uploader/>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        عنوان مقاله
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"عنوان مقاله"} type={"text"} change={(e) => {
                                            setTitle(e.target.value)
                                        }} value={title}/>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        آدرس
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"آدرس"} type={"text"} change={(e) => {
                                            setUrl(e.target.value)
                                        }} value={url}/>

                                    </div>
                                </div>
                                <div className="sm:col-span-full">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        توضیحات
                                    </label>
                                    <div className="mt-2">
                                        <Textarea change={(e) => {
                                            setDescription(e.target.value)
                                        }}>
                                            {description}
                                        </Textarea>
                                    </div>
                                </div>

                                <div className="sm:col-span-full">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        محتوا
                                    </label>
                                    <div className="mt-2">
                                        <CKEditor
                                            editor={ClassicEditor}
                                            config={{
                                                extraPlugins: [],
                                                mediaEmbed: {
                                                    extraProviders: [
                                                        {
                                                            previewsInData: true,
                                                            name: "aparat",
                                                            url: "https://www.aparat.com",
                                                        },
                                                    ],
                                                },
                                            }}
                                            data={content}
                                            onChange={(event, editor) => {
                                                setContent(editor.getData());
                                            }}
                                        />
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-center gap-x-6">
                        <ConfirmButton title={"ثبت"}/>
                    </div>
                </form>
            </div>

        </>

    )
}
