import withAuth from "../AuthMiddleware";
import AdminLayout from "../Layout/AdminLayout";


const Dashboard = withAuth(() => {
    return(<AdminLayout>
        <div></div>
    </AdminLayout> );
  });

  export default Dashboard;
