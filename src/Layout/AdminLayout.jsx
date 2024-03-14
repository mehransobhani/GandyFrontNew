import Panel from "../Components/Panel";
import Sidebar from "../Components/Sidebar";

export default function AdminLayout({children}){
return(<>

            <div className="flex h-screen bg-slate-100">
                <Sidebar/>
                <div className="flex flex-col flex-1 overflow-y-auto mt-16">
                    <Panel>
                     {children}
                     </Panel>
                </div>
            </div> 
</>)
}