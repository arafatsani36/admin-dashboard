import { Column } from "react-table";
import AdminSidebar from "../component/adminsidebar";
import { ReactElement } from "react";

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

const Transaction = () => {
    return (
        <div className="adminContainer">
            <AdminSidebar/>
            <main>main</main>
        </div>
    );
};

export default Transaction;