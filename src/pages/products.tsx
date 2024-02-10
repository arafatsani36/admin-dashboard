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

const img1 = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp2393847%2F4d2cc2c91fbaeec4a0a3a00af395c64a%2Fp2393847.jpg&tbnid=zWAhKF8_h5U14M&vet=12ahUKEwie1aSmqZ-EAxXpe2wGHRprD8cQMygiegUIARDBAQ..i&imgrefurl=https%3A%2F%2Fwww.decathlon.in%2Fp%2F8733470%2Fjogging-shoes%2Fmen-s-running-shoes-jogflow-1001-grey-orange%3Fid%3D8733470%26type%3Dp&docid=jRB29xfI34YyqM&w=2500&h=2500&q=shoes&ved=2ahUKEwie1aSmqZ-EAxXpe2wGHRprD8cQMygiegUIARDBAQ"

const arr:DataType[] = [
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