import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../component/adminsidebar";
import { FaRegBell } from "react-icons/fa";
import userImage from "../assets/user-image.webp"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const Dashboard = () => {
    return (
        <div className="adminContainer">
           <AdminSidebar/>
            <main className="dashboard">
                <div className="bar">
                    <BsSearch/>
                    <input type="text" placeholder="Search data, users, docs"/>
                    <FaRegBell/>
                    <img src={userImage} alt="User image" />
                </div>

                <section className="widgetContainer">
                   <WidgetItem heading="Revenue" value={200} percent={-10} color="rgb(100, 149, 237 )" amount={true}/>
                   <WidgetItem heading="User" value={400} percent={50} color="rgb(20, 151, 16  )" amount={true}/>
                   <WidgetItem heading="Transaction" value={50000} percent={80} color="rgb(255, 195, 0)" amount={true}/>
                   <WidgetItem heading="Products" value={2000} percent={60} color="rgb(176, 22, 34)" amount={true}/>
                </section>

                <section className="graphContainer">

                </section>
            </main>
        </div>
    );   
 }


 interface WidgetItemProps {
    heading: string;
    value: number;
    percent: number;
    color: string;
    amount?: boolean;
  }

const WidgetItem = ({heading, value, percent, color, amount} : WidgetItemProps) => 
(<article className="widget">
    <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {
            percent > 0 ? (<span className="green"><HiTrendingUp/> +{percent}%{" "}</span>) : 
            (<span className="red"> <HiTrendingDown/> {percent}%{" "}</span>)
        }
    </div>

    <div className="widgetCircle" style={
        {
            background: `conic-gradient(${color} ${(Math.abs(percent)/100) * 360}deg, rgb(255, 255, 255) 0)`
        }
    }>
        <span style={{
            color
        }} >{percent}%</span>
    </div>
</article>)

export default Dashboard;