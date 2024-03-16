import {XMarkIcon} from "@heroicons/react/24/solid";
 import React, {ReactNode} from "react";

export  default  function Modal({ isOpen, onClose, children , title })
{
    if(!isOpen)
        return ;
    return(<>
         <div className="bg-neutral-950 bg-opacity-70 flex z-50 overflow-y-auto overflow-x-hidden fixed top-0 bottom-0 right-0 left-0  justify-center items-center w-full md:inset-0 h-screen max-h-full backdrop-blur-sm" onClick={onClose}>
            <div className="relative p-4 w-full max-w-2xl max-h-full "
                 onClick={(e)=>{ e.stopPropagation()}}>
                 <div className="relative bg-white rounded-lg shadow">
                     <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            {title}
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={onClose}>
                            <XMarkIcon className="h-6 w-6 text-gray-500" />
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    </>)
}
