import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../component/adminsidebar";
import TableHOC from "../component/tableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";


interface DataType{
    photo:ReactElement;
    name:string;
    price:number;
    stock: number;
    action: ReactElement;

}
const columns:Column<DataType>[] = [
    {
        Header: "Photo",
        accessor: "photo"
    },
    {
        Header: "Name",
        accessor: "name"
    },
    {
        Header: "Price",
        accessor: "price"
    },
    {
        Header: "Stock",
        accessor: "stock"
    },
    {
        Header: "Action",
        accessor: "action"
    }
]

const img1 = "https://images.unsplash.com/photo-1543508282-5c1f427f023f?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const arr:DataType[] = [
    {
        photo: <img src={img1}/>,
        name: "MEN'S RUNNING SHOES JOGFLOW",
        price:5000,
        stock:5,
        action:<Link to='/admin/products/sajknaskd'><button>Manage</button></Link>
    },
    {
        photo: <img src={img1}/>,
        name: "MEN'S RUNNING SHOES",
        price:10000,
        stock:10,
        action:<Link to="/admin/products"><button>Manage</button></Link>
    },

    {
        photo: <img src={img1}/>,
        name: "MEN'S RUNNING SHOES JOGFLOW",
        price:5000,
        stock:5,
        action:<Link to="/admin/products"><button>Manage</button></Link>
    },
    {
        photo: <img src={img1}/>,
        name: "MEN'S RUNNING SHOES",
        price:10000,
        stock:10,
        action:<Link to="/admin/products"><button>Manage</button></Link>
    },

    {
        photo: <img src={img1}/>,
        name: "MEN'S RUNNING SHOES JOGFLOW",
        price:5000,
        stock:5,
        action:<Link to="/admin/products"><button>Manage</button></Link>
    },
    {
        photo: <img src={img1}/>,
        name: "MEN'S RUNNING SHOES",
        price:10000,
        stock:10,
        action:<Link to="/admin/products"><button>Manage</button></Link>
    },

    {
        photo: <img src={img1}/>,
        name: "MEN'S RUNNING SHOES JOGFLOW",
        price:5000,
        stock:5,
        action:<Link to="/admin/products"><button>Manage</button></Link>
    },
    {
        photo: <img src={img1}/>,
        name: "MEN'S RUNNING SHOES",
        price:10000,
        stock:10,
        action:<Link to="/admin/products"><button>Manage</button></Link>
    },
]
const Products = () => {
    const [data] = useState<DataType[]>(arr)
    const table = useCallback(
        TableHOC<DataType>(columns, data, "dasBoardProductsBox", "Products", true)
        ,[]
        );
    return (
        <div className="adminContainer">
            <AdminSidebar/>
            <main>{table()}</main>
            <Link to='/admin/products/new' className="createProductsBtn"><FaPlus/></Link>
        </div>
    );
};

export default Products;