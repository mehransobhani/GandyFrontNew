import {useState} from "react";
import {
    Bars3Icon,
    Cog6ToothIcon,
    CogIcon,
    CubeIcon,
    DevicePhoneMobileIcon,
    InformationCircleIcon, PencilIcon,
    PencilSquareIcon,
    PhotoIcon,
    QueueListIcon,
} from "@heroicons/react/24/solid";
import {Squares2X2Icon} from "@heroicons/react/20/solid";
import {Link, useLocation} from 'react-router-dom';
import {SidebarMenuItem} from "./SidebarMenuItem";
import { signout } from "../Api/Auth";

export default function Sidebar() {

    const location = useLocation();
    const pathName = location.pathname;

    async function signOut(){
       await signout();
       window.location.href="/login";
    }
    const menu = [
        {
            title: "داشبورد",
            href: "/dashboard",
            icon: <Squares2X2Icon
                className={["h-6 w-6 ", pathName == "/dashboard" ? "text-indigo-500" : "text-gray-500"].join(" ")}/>,
            current: pathName == "/dashboard"
        },  {
            title: "مقاله",
            href: "/article",
            icon: <PencilIcon
                className={["h-6 w-6 ", pathName == "/article" ? "text-indigo-500" : "text-gray-500"].join(" ")}/>,
            current: pathName == "/article"
        }, {
            title: "کالا ها",
            href: "/admin/team",
            icon: <DevicePhoneMobileIcon className={["h-6 w-6 text-gray-500"].join(" ")}/>,
            children: [{
                title: "ثبت کالا",
                href: "/product/create",
                current: pathName == "/product/create",
                icon: <PencilSquareIcon
                    className={["h-6 w-6 ", pathName == "/product/create" ? "text-indigo-500" : "text-gray-500"].join(" ")}/>,
            },
                {
                    title: "آپلود تصویر",
                    href: "/product/image",
                    current: pathName == "/product/image",
                    icon: <PhotoIcon
                        className={["h-6 w-6 ", pathName == "/product/image" ? "text-indigo-500" : "text-gray-500"].join(" ")}/>,
                },
                {
                    title: "اطلاعات کالا",
                    href: "/product/info",
                    current: pathName == "/product/info",
                    icon: <InformationCircleIcon
                        className={["h-6 w-6 ", pathName == "/product/info" ? "text-indigo-500" : "text-gray-500"].join(" ")}/>,
                },
                {
                    title: " کالا پیشنهادی",
                    href: "/product/suggest",
                    current: pathName == "/product/suggest",
                    icon: <CubeIcon
                        className={["h-6 w-6 ", pathName == "/product/suggest" ? "text-indigo-500" : "text-gray-500"].join(" ")}/>,

                },  {
                    title: "نوع کالا",
                    href: "/product/type",
                    current: pathName == "/product/type",
                    icon: <QueueListIcon
                        className={["h-6 w-6 ", pathName == "/product/type" ? "text-indigo-500" : "text-gray-500"].join(" ")}/>,

                },
                {
                    title: "ثبت ویژگی",
                    icon: <Cog6ToothIcon
                        className={["h-6 w-6 text-gray-500"].join(" ")}/>,
                    children: [{
                        title: "نام ویژگی",
                        href: "/product/attribute/name",
                        current: pathName == "/product/attribute/name",
                        icon: <CogIcon
                            className={["h-6 w-6 ", pathName == "/product/attribute/name" ? "text-indigo-500" : "text-gray-500"].join(" ")}/>,

                    },
                        {
                            title: "انتخاب ویژگی",
                            href: "/product/attribute/select",
                            current: pathName == "/product/attribute/select",
                            icon: <CogIcon
                                className={["h-6 w-6 ", pathName == "/product/attribute/select" ? "text-indigo-500" : "text-gray-500"].join(" ")}/>,

                        },
                        {
                            title: "افزودن ویژگی",
                            href: "/product/attribute/",
                            current: pathName == "/product/attribute/",
                            icon: <CogIcon
                                className={["h-6 w-6 ", pathName == "/product/attribute/" ? "text-indigo-500" : "text-gray-500"].join(" ")}/>,

                        }
                    ]
                },
            ]
        }
    ]
    const [openSidebar, setOpenSidebar] = useState(true);
    return (<>
        {openSidebar &&
            <div className="  mt-16 absolute md:static w-full  md:flex flex-col md:w-56 bg-gray-800 z-40">

                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className="flex-1 px-2 py-4 bg-gray-900">
                        {
                            menu.map((item, index) => (<>
                                <SidebarMenuItem item={item}/>
                            </>))
                        }
                    </nav>
                </div>
            </div>
        }
        <div className={" absolute top-0 left-0  w-full bg-white flex "}>

            {openSidebar &&
                <div className="hidden md:flex w-56   items-center justify-between h-16  border-b border-gray-200">
                    <div className="flex w-56  items-center justify-center h-16 bg-indigo-500">
                        <h1 className="text-xl font-bold text-white">
                            پنل مدیریت <br/>{" "}
                        </h1>

                    </div>
                </div>
            }
            <div className="flex  w-full   items-center justify-between h-16  border-b border-gray-200">
                <div className="flex items-center px-4">
                    <button className="text-gray-500 focus:outline-none focus:text-gray-700" onClick={() => {
                        setOpenSidebar(!openSidebar)
                    }} aria-label={"button"}>
                        <Bars3Icon className="h-6 w-6 text-gray-800"/>

                    </button>
                </div>

                <div className="flex items-center px-4">
                    <button className="text-gray-500 focus:outline-none focus:text-gray-700" onClick={() => {
                        signOut();
                    }} aria-label={"button"}>
                        خروج از حساب کاربری

                    </button>
                </div>
            </div>

        </div>
    </>)
}
