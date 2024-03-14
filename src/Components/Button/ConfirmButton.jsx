
export default  function ConfirmButton({title,click,cssClass})
{
    return (
        <button
            type="submit"
            onClick={click}
            className={["rounded-md bg-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400  focus:border-0  focus-visible:outline-0 focus-visible:ring-0 focus-visible:border-0" , cssClass ].join(" ")}
        >
            {title}
        </button>
    )
}
