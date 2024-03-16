import { useState } from 'react';
import {QuestionMarkCircleIcon} from "@heroicons/react/24/solid";
import {MinusIcon, PlusIcon} from "@heroicons/react/20/solid";

export default function  Accordion ({ title, content , index})   {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={"w-full"}>
            <div className={"w-full"}>
                <button type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className={["flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border   border-gray-200    gap-3",isOpen?"bg-slate-50":"", index == 0 ? "rounded-t-xl" : "border-t-0"].join(" ")}
                >

                    <span className="flex  items-center text-black">
                        <QuestionMarkCircleIcon className="h-4 mx-2 w-4 text-indigo-500" />
                       {title}
                    </span>
                    <div>

                        {isOpen ? <MinusIcon className="h-6 w-6 text-indigo-500"/> :
                            <PlusIcon className="h-6 w-6 text-indigo-500 "/>}
                    </div>
                </button>
            </div>

                {isOpen &&<div className={"block"}>
                    <div className="p-5 border border-t-0 border-gray-200 ">
                        <p className="mb-2 text-gray-500 ">{content}</p>
                    </div>
                </div>}
             </div>


        </>
    )
        ;
};
