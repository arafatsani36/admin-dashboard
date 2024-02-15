import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./component/loading";

const Dashboard = lazy(() => import("./pages/dashboard")) ;
const Products = lazy(() => import("./pages/products")) ;
const Customers = lazy(() => import("./pages/customers")) ;
const Transaction = lazy(() => import("./pages/transaction")) ;
const NewProduct = lazy(() => import("./pages/management/newProduct")) ;
const ProductManagement = lazy(() => import("./pages/management/productManagement")) ;
const TransactionManagement = lazy(() => import("./pages/management/transactionManagement")) ;
const BarCharts = lazy(() => import("./pages/charts/barCharts")) ;
const PieCharts = lazy(() => import("./pages/charts/pieCharts")) ;
const LineCharts = lazy(() => import("./pages/charts/lineCharts")) ;

const StopWatch= lazy(() => import("./pages/apps/stopWatch")) ;
const Coupon = lazy(() => import("./pages/apps/coupon")) ;
const Toss = lazy(() => import("./pages/apps/toss")) ;

const App = () => {
  return(
  <Router>
    <Suspense fallback = {<Loading/>}>
      <Routes>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/products" element={<Products/>}/>
          <Route path="/admin/customers" element={<Customers/>}/>
          <Route path="/admin/transaction" element={<Transaction/>}/>

          {/* chats */}
          <Route path="/admin/chart/bar" element={<BarCharts />}/>
          <Route path="/admin/chart/pie" element={<PieCharts />}/>  
          <Route path="/admin/chart/line" element={<LineCharts />}/> 

          {/* apps */}
          <Route path="/admin/app/stopWatch" element={<StopWatch />}/>
          <Route path="/admin/app/coupon" element={<Coupon/>}/>  
          <Route path="/admin/app/toss" element={<Toss/>}/> 

          {/*management  */}
          <Route path="/admin/products/new" element={<NewProduct/>}/>
          <Route path="/admin/products/:id" element={<ProductManagement/>}/>
          <Route path="/admin/transaction/:id" element={<TransactionManagement/>}/>
      </Routes>
    </Suspense>
  </Router>
  ) 
};

export default App;