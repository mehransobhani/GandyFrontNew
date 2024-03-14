import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import AdminLayout from './Layout/AdminLayout';
function App() {
  return (
    <>
    <Router>
      <div className={["App", "container-fluid", "p-0"].join(" ")}>
 
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

 

      </div>
      </Router>
    </>
  );
}

export default App;
