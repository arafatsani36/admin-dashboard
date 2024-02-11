import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../component/adminsidebar";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import TableHOC from "../component/tableHOC";
import { FaTrash } from "react-icons/fa";

interface DataType{
    avatar:ReactElement;
    name:string;
    email:string;
    gender:string;
    role:string;
    action: ReactElement;

}
const columns:Column<DataType>[] = [
    {
        Header: "Avatar",
        accessor: "avatar",
    },
    {
        Header: "Name",
        accessor: "name"
    },
    {
        Header: "Email",
        accessor: "email"
    },
    {
        Header: "Gender",
        accessor: "gender"
    },
    {
        Header: "Role",
        accessor: "role"
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
        name: "Benjamin C. Joyner",
        email:"BenjaminCJoyner@jourrapide.com",
        gender:"Male",
        role: "User",
        action:(
            <button>
                <FaTrash/>
            </button>
        )
    },

    {
        avatar:(
            <img src={img1}
                style={{
                    borderRadius: "50%",
                }}
            />
        ),
        name: "Michelle M. White",
        email:"MichelleMWhite@armyspy.com",
        gender:"Female",
        role: "User",
        action:(
            <button>
                <FaTrash/>
            </button>
        )
    },


    
]

// const arr: DataType[]= [] 

const Customers = () => {

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

export default Customers;