import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../component/adminsidebar";
import { FaRegBell } from "react-icons/fa";
import userImage from "../assets/user-image.webp"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from '../assets/data.json';
import { BarChat } from "../component/chats";

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
                    <div className="revenueChart">
                        <h2>Revenue & Transaction</h2>
                        <BarChat 
                        data_2={[300, 144, 433, 655, 237, 755, 190]} 
                        data_1={[200, 444, 300, 555, 637, 255, 590]}
                        title_1="Revenue"
                        title_2="Transaction"
                        bgColor_1="rgb(0, 155, 255)"
                        bgColor_2="rgba(53, 162, 235, 0.8)"
                        
                        />
                    </div>
                    <div className="dashboardCategory">
                        <h2>Inventory</h2>
                        <div>
                            {
                                data.categories.map(item => (
                                    <CategoryItem key={item.heading} heading={item.heading} color={`hsl(${item.value * 4},${item.value}%,50%)`} value={item.value}/>
                                ))
                            }
                            
                            
                        </div>
                    </div>
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

interface CategoryItemProps{
    color: string;
    value: number;
    heading: string;

} 
 const CategoryItem = ({color, value, heading}: CategoryItemProps) => 
 <div className="categoryItem">
    <h5>{heading}</h5>
    <div>
        <div style={
            {
                backgroundColor: color,
                width: `${value}%`
            }
        }></div>
    </div>
    <span>{value}%</span>
    
 </div>
 

export default Dashboard;