import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./component/loading";

const Dashboard = lazy(() => import("./pages/dashboard")) ;
const Products = lazy(() => import("./pages/products")) ;
const Customers = lazy(() => import("./pages/customers")) ;
const Transaction = lazy(() => import("./pages/transaction")) ;

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

          {/* apps */}
      </Routes>
    </Suspense>
  </Router>
  ) 
};

export default App;