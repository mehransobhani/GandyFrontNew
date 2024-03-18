import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import AdminLayout from './Layout/AdminLayout';
import Dashboard from './Pages/Dashboard';
import AuthMiddleware from './AuthMiddleware';
import {Product} from "./Pages/Product/Product";
import {ProductImage} from "./Pages/ProductImage/ProductImage";
import { ProductInfo } from './Pages/ProductInfo/ProductInfo';
import { ProductSuggest } from './Pages/ProductSuggest/ProductSuggest';
import {AttributeName} from "./Pages/AttributeName/AttributeName";
import {AttributeSelect} from "./Pages/AttributeSelect/AttributeSelect";
import {ProductAttribute} from "./Pages/ProductAttribute/ProductAttribute";
import {ProductType} from "./Pages/ProductType/ProductType";
import {Article} from "./Pages/Article/Article";

function App() {
    return (
        <>
            <Router>
                <div className={["App", "container-fluid", "p-0"].join(" ")}>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/article" element={<Article/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/Product/create" element={<Product/>}/>
                        <Route path="/Product/image" element={<ProductImage/>}/>
                        <Route path="/Product/info" element={<ProductInfo/>}/>
                        <Route path="/Product/suggest" element={<ProductSuggest/>}/>
                        <Route path="/Product/attribute" element={<ProductAttribute/>}/>
                        <Route path="/Product/type" element={<ProductType/>}/>
                        <Route path="/Product/attribute/name" element={<AttributeName/>}/>
                        <Route path="/Product/attribute/select" element={<AttributeSelect/>}/>
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
