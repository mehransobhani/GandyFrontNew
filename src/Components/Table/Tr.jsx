
export default function Tr({children , cssClass}) {
    return (<>
         <tr
            className={["border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-indigo-50 text-center",cssClass].join(" ")}>
            {children}
        </tr>
    </>)
}
