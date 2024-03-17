export function Select({name ,cssClass ,value ,change ,children}) {
    return (
        <>
            <select
                name={name}
                value={value}
                onChange={change}
                className={["block w-full bg-white rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-indigo-500   sm:text-sm sm:leading-6 ",cssClass].join(" ")}
            >
                {children}
            </select>
        </>
    )
}
