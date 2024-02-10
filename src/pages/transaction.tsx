import { Column } from "react-table";
import AdminSidebar from "../component/adminsidebar";
import { ReactElement, useCallback, useState } from "react";
import TableHOC from "../component/tableHOC";
import { Link } from "react-router-dom";

interface DataType{
    avatar:ReactElement;
    amount:number;
    discount:number;
    quantity:number;
    status:ReactElement;
    action: ReactElement;

}
const columns:Column<DataType>[] = [
    {
        Header: "Avatar",
        accessor: "avatar",
    },
    {
        Header: "Amount",
        accessor: "amount"
    },
    {
        Header: "Discount",
        accessor: "discount"
    },
    {
        Header: "Quantity",
        accessor: "quantity"
    },
    {
        Header: "Status",
        accessor: "status"
    },
    {
        Header: "Action",
        accessor: "action"
    }
    
]

const img1 = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp2393847%2F4d2cc2c91fbaeec4a0a3a00af395c64a%2Fp2393847.jpg&tbnid=zWAhKF8_h5U14M&vet=12ahUKEwie1aSmqZ-EAxXpe2wGHRprD8cQMygiegUIARDBAQ..i&imgrefurl=https%3A%2F%2Fwww.decathlon.in%2Fp%2F8733470%2Fjogging-shoes%2Fmen-s-running-shoes-jogflow-1001-grey-orange%3Fid%3D8733470%26type%3Dp&docid=jRB29xfI34YyqM&w=2500&h=2500&q=shoes&ved=2ahUKEwie1aSmqZ-EAxXpe2wGHRprD8cQMygiegUIARDBAQ"

const arr:DataType[] = [
    {
        avatar:(
            <img src={img1}
                style={{
                    borderRadius: "50%",
                }}
            />
        ),
        amount: 5000,
        discount: 500,
        quantity: 6,
        status: <span className="red">Processing</span>,
        action:<Link to="/admin/products"><button>Manage</button></Link>
    },

    {
        avatar:(
            <img src={img1}
                style={{
                    borderRadius: "50%",
                }}
            />
        ),
        amount: 8000,
        discount: 400,
        quantity: 5,
        status: <span className="green">Shipped</span>,
        action:<Link to="/admin/products"><button>Manage</button></Link>
    },
    
]

const Transaction = () => {
 const [data] = useState<DataType[]>(arr)
    const Table = useCallback(
        TableHOC<DataType>(columns, data, "dasBoardProductsBox", "Customers", true)
        ,[]
        );

    return (
        <div className="adminContainer">
            <AdminSidebar/>
            <main>{Table()}</main>
        </div>
    );
};

export default Transaction;