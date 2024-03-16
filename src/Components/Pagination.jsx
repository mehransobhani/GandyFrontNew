export  default function Pagination({totalPage , currentPage}){
    function pageBuilder(){
        let items = [];
        let upExtra=0;
        let downExtra=0;
        if(currentPage-2<1)
        {
            upExtra=(currentPage-2)*-1+1;
        }
        if(currentPage+2>totalPage)
        {
            downExtra=currentPage+2-totalPage;
        }
        for (let i = currentPage-2-downExtra ; i<=currentPage+2+upExtra;i++) {
            if (i > totalPage || i < 1) {
                continue;
            }
            items.push(
                <li key={i}>
                    <a href="#" className={["flex  items-center justify-center px-3 h-8 leading-tight ", i==currentPage ?" text-indigo-600 border border-l border-indigo-300 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700":"text-slate-500 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-700"].join(" ")}>
                        {i}
                    </a>
                </li>
            );

        }
        return items;
    }

    return (<>
            <nav aria-label="Page navigation example" className={"grid justify-center"}>

                <ul className="flex items-center   h-8 text-sm">

                        <li>
                            <a href="#"
                               className={[currentPage <= 1 && "bg-slate-200 cursor-not-allowed opacity-50","flex items-center justify-center px-3 h-8 ms-0 leading-tight text-slate-500 bg-white border border-e-0 border-slate-300 rounded-s-lg hover:bg-slate-100 hover:text-slate-700 "].join(" ")}>
                                <span className="sr-only">Previous</span>
                                <svg className="w-2.5 h-2.5  rotate-180" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M5 1 1 5l4 4"/>
                                </svg>
                            </a>
                        </li>

                    {pageBuilder()}

                   <li>
                            <a href="#"
                               className={[ totalPage < currentPage+1 && "bg-slate-200 cursor-not-allowed opacity-50","flex items-center justify-center px-3 h-8 leading-tight text-slate-500 bg-white border border-slate-300 rounded-e-lg hover:bg-slate-100 hover:text-slate-700 "].join(" ")}>
                                <span className="sr-only">Next</span>
                                <svg className="w-2.5 h-2.5 rotate-180" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="m1 9 4-4-4-4"/>
                                </svg>
                            </a>
                        </li>

                </ul>
                <div className={"grid justify-center my-1 text-slate-500"}>
                    <small className={"text-center"}> صفحه {currentPage} از {totalPage} </small>
                </div>
            </nav>
        </>
    )
}
