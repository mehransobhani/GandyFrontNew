import {useState} from "react";

export  default  function Uploader({change})
{ 
    const[file,setFile]=useState(undefined)
    return(<>
        <div className="flex flex-col gap-4 items-center justify-center w-full">
            <label htmlFor="dropzone-file"
                   className="flex flex-col items-center justify-center  rounded h-40 w-40 border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-xs text-gray-500 text-center">
                        <span className="font-semibold">برای آپلود عکس کلیک کنید</span></p>

                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={(e) => {
                    change(e.target.files[0]);
                    setFile(e.target.files[0]);
                }}/>
            </label>
            <p className={"text-xs text-gray-500"}>
                {file && file.name}
            </p>
        </div>

    </>)
}
