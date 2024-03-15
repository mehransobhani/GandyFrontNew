import withAuth from "../AuthMiddleware";
import AdminLayout from "../Layout/AdminLayout";


const Dashboard = withAuth(() => {
    return(<AdminLayout><div>This is a protected route. Match: </div></AdminLayout> );
  });
  
  export default Dashboard;
  