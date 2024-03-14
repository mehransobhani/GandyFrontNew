import {useState} from "react";
import {
    BanknotesIcon,
    Bars3Icon,
    BellIcon,
    CalendarDaysIcon,
    ChatBubbleBottomCenterTextIcon,
    HandRaisedIcon, MusicalNoteIcon, UserCircleIcon, UserGroupIcon
} from "@heroicons/react/24/solid";
import {Squares2X2Icon} from "@heroicons/react/20/solid";
import { Link, useLocation } from 'react-router-dom';
export default function Sidebar() {

    const location = useLocation();
    const pathName=location.pathname;

    const menu=[
        {
            title:"داشبورد",
            href:"/admin/dashboard",
            icon:<Squares2X2Icon className={["h-6 w-6 " ,pathName=="/admin/dashboard"?"text-indigo-500":"text-gray-500" ].join(" ")} />,
            current:pathName=="/admin/dashboard"
        },  {
            title:"تیم",
            href:"/admin/team",
            icon:<UserGroupIcon className={["h-6 w-6 " ,pathName=="/admin/team"?"text-indigo-500":"text-gray-500" ].join(" ")} />,
            current:pathName=="/admin/team"
        },  {
            title:"حساب کاربری",
            href:"/admin/profile",
            icon:<UserCircleIcon className={["h-6 w-6 " ,pathName=="/admin/profile"?"text-indigo-500":"text-gray-500" ].join(" ")} />,
            current:pathName=="/admin/profile"
        }, {
            title:"نمونه کار ها",
            href:"/admin/samples",
            icon:<MusicalNoteIcon className={["h-6 w-6 " ,pathName=="/admin/samples"?"text-indigo-500":"text-gray-500" ].join(" ")} />,
            current:pathName=="/admin/samples"
        }, {
            title:"درخواست ها",
            href:"/admin/requests",
            icon:<HandRaisedIcon className={["h-6 w-6 " ,pathName=="/admin/requests"?"text-indigo-500":"text-gray-500" ].join(" ")} />,
            current:pathName=="/admin/requests"
        }, {
            title:"تقویم",
            href:"/admin/calendar",
            icon:<CalendarDaysIcon className={["h-6 w-6 " ,pathName=="/admin/calendar"?"text-indigo-500":"text-gray-500" ].join(" ")} />,
            current:pathName=="/admin/calendar"
        }, {
            title:"تیکت ها",
            href:"/admin/ticket",
            icon:<ChatBubbleBottomCenterTextIcon className={["h-6 w-6 " ,pathName=="/admin/ticket"?"text-indigo-500":"text-gray-500" ].join(" ")} />,
            current:pathName=="/admin/ticket"
        }, {
            title:" حسابداری",
            href:"/admin/accounting",
            icon:<BanknotesIcon className={["h-6 w-6 " ,pathName=="/admin/accounting"?"text-indigo-500":"text-gray-500" ].join(" ")} />,
            current:pathName=="/admin/accounting"
        },
    ]
    const [openSidebar,setOpenSidebar]=useState(true);
    return (<>
        {openSidebar &&
        <div className="  mt-16 absolute md:static w-full  md:flex flex-col md:w-56 bg-gray-800 z-50">

            <div className="flex flex-col flex-1 overflow-y-auto">
                <nav className="flex-1 px-2 py-4 bg-gray-800">
                    {
                        menu.map((item,index)=>(<>
                            <Link href={item.href} className={[item?.current ? "bg-gray-700 text-white font-bold":"text-gray-300 hover:bg-gray-700" ,index!=0 && "border-t  border-gray-900" ," flex items-center px-4 py-4 "].join(" ")}>
                                <span className={"ml-2"}>
                                {item?.icon}
                                    </span>
                                {item?.title}
                            </Link>
                        </>))
                    }
                </nav>
            </div>
        </div>
        }
        <div className={" absolute top-0 left-0  w-full bg-white flex "}>

            {openSidebar &&    <div className="hidden md:flex w-56   items-center justify-between h-16  border-b border-gray-200">
                <div className="flex w-56  items-center justify-center h-16 bg-indigo-500">
                    <h1 className="text-xl font-bold text-white">
                        پنل مدیریت <br/>{" "}
                    </h1>

                 </div>
            </div>
            }
            <div className="flex  w-full   items-center justify-between h-16  border-b border-gray-200">
                <div className="flex items-center px-4">
                    <button className="text-gray-500 focus:outline-none focus:text-gray-700" onClick={()=>{setOpenSidebar(!openSidebar)}}  aria-label={"button"}>
                        <Bars3Icon className="h-6 w-6 text-gray-800" />

                    </button>
                 </div>
               
            </div>

        </div>
    </>)
}