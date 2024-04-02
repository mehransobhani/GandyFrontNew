import withAuth from "../AuthMiddleware";
import AdminLayout from "../Layout/AdminLayout";


const Dashboard = withAuth(() => {

    return(<AdminLayout>
        <div>
           داشبورد
        </div>
    </AdminLayout> );
  });

  export default Dashboard;
