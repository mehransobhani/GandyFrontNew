import {Link} from "react-router-dom";
import {useState} from "react";

export function SidebarMenuItem({item}) {
    const [open,setOpen]=useState(false);
    return (
        <>
            {item.children ? <>
                    <div onClick={()=>{setOpen(!open)}}
                          className={["text-gray-300 cursor-pointer hover:bg-gray-700", " flex items-center px-4 py-4 "].join(" ")}>
                                <span className={"ml-2"}>
                                {item?.icon}
                                    </span>
                        {item?.title}
                    </div>
                    {open && item.children.map((sub)=>(<>
                        <Link to={sub.href}
                              className={[sub?.current ? "bg-gray-700 text-white font-bold" : "text-gray-300 hover:bg-gray-700 bg-gray-800 ",   " flex items-center px-4 py-4 "].join(" ")}>
                                <span className={"ml-2"}>
                                {sub?.icon}
                                    </span>
                            {sub?.title}
                        </Link>

                    </>))}
                </>
                : <Link to={item.href}
                        className={[item?.current ? "bg-gray-700 text-white font-bold" : "text-gray-300 hover:bg-gray-700",  " flex items-center px-4 py-4 "].join(" ")}>
                                <span className={"ml-2"}>
                                {item?.icon}
                                    </span>
                    {item?.title}
                </Link>}
        </>
    )
}
