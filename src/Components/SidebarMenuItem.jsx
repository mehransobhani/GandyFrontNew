import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {MinusIcon, PlusIcon} from "@heroicons/react/20/solid";

export function SidebarMenuItem({item}) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        item.children && item.children.map((sub) => (
            sub?.current && setOpen(true)
        ))
    }, []);
    return (
        <>
            {item.children ? <>
                    <div onClick={() => {
                        setOpen(!open)
                    }}
                         className={["text-gray-300 cursor-pointer hover:bg-gray-700", " flex items-center px-4 py-4 border-b border-b-gray-800"].join(" ")}>
                        <div className={"flex justify-between w-full"}>
                            <div className={"flex"}>
                                <span className={"ml-2"}>
                                {item?.icon}
                                    </span>

                                {item?.title}
                            </div>
                            <div>
                                {open?<MinusIcon className="h-6 w-6 text-gray-500" />:<PlusIcon className="h-6 w-6 text-gray-500"/>}
                            </div>
                        </div>
                    </div>

                    {open && item.children.map((sub) => (<>

                        <Link to={sub.href}

                              className={[sub?.current ? " bg-gray-800 text-white font-bold" : "text-gray-300 hover:bg-gray-700   ", " pr-10 flex items-center px-4 py-4 "].join(" ")}>
                                <span className={"ml-2"}>
                                {sub?.icon}
                                    </span>
                            {sub?.title}
                        </Link>

                    </>))}
                </>
                : <Link to={item.href}
                        className={[item?.current ? "bg-gray-700 text-white font-bold" : "text-gray-300 hover:bg-gray-700", " border-b border-b-gray-800 flex items-center px-4 py-4 "].join(" ")}>
                                <span className={"ml-2"}>
                                {item?.icon}
                                    </span>
                    {item?.title}
                </Link>}
        </>
    )
}
