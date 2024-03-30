import { useState } from "react"

export default function Select2ProductType({  placeHolder, cssClass, value, change, options , click   }) {
    const [open,setOpen]=useState(false);
    const [input,setInput]=useState(value);

    function changeInputHandle(e){
        setInput(e.target.value);
        change(e)
    }
    return (<>
        <div className="relative">
            <input
                type={"text"} 
                onClick={()=>{setOpen(!open)}}
                value={input}
                placeholder={placeHolder}
                defaultValue={value}
                onChange={changeInputHandle}
                className={["block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-indigo-500   sm:text-sm sm:leading-6 ", cssClass].join(" ")}
            />
           {open && <div className="absolute top-10 left-0 w-full h-52 bg-white border">
                <ul>
                    {options && options.map((item) => (<>
                        <li className="bg-white cursor-pointer text-center border-b py-2" value={item.id} onClick={()=>{click(item) ; setInput(item.name)}}>{item.name}</li>
                    </>))}
                </ul>
            </div>}
        </div>
    </>)
}