import { Link } from "react-router-dom";
import ConfirmButton from "./Button/ConfirmButton";

export default function PermissionDenied(){
    return(<>
    <div className="fixed bg-indigo-800 w-full h-screen right-0 top-0 z-50 flex flex-col justify-center items-center">
        <h1 className="font-bold text-7xl text-white">
            403
        </h1>
        <p className="font-bold text-5xl text-white">
            متاسفانه شما دسترسی به این صفحه ندارید
        </p>
        <Link to={"/login"} className="mt-10">
            <ConfirmButton title={"بازگشت به صفحه ورود"}/>

        </Link>
    </div>
    </>)

}