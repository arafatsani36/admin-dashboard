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

const img1 = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

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
        action:<Link to="/admin/transaction/sadda"><button>Manage</button></Link>
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
        action:<Link to="/admin/transaction"><button>Manage</button></Link>
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