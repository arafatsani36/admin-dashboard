import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";

import {  IoIosPeople, IoMdClose } from "react-icons/io";
import { RiCoupon3Fill, RiDashboardFill, RiMenu2Line, RiShoppingBag3Fill } from "react-icons/ri";
import {  Link, Location, useLocation} from "react-router-dom";

const AdminSidebar = () => {
    const location = useLocation();
    const [showModel, setShowModel] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(window.innerWidth < 1100);

    const resizeHandler = () => {
        setIsActive(window.innerWidth < 1100)
    }

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler)
        }
    },[])

    return (
        <>
        {isActive &&
            <button id="hamburger" onClick={() => setShowModel(true)}>
                <RiMenu2Line />
            </button>
            
        }
          <aside style={isActive ? {
            width:"20rem",
            height: "100vh",
            position: "fixed",
            top: "0",
            left:showModel ? "0" : "-20rem",
            transition: "all 0.5s"

          } :{}}>
                <h2>logo</h2>

                {isActive && <button id="close" onClick={() => setShowModel(false)}><IoMdClose /></button>}

                {/* Dashboard start  */}
                <div>
                    <h5>Dashboard</h5>
                    <ul>
                        <Li url="/admin/dashboard" text="Dashboard" location={location} Icon={RiDashboardFill} />
                        <Li url="/admin/products" text="Products" location={location} Icon={RiShoppingBag3Fill} />
                        <Li url="/admin/customers" text="Customers" location={location} Icon={AiFillFileText} />
                        <Li url="/admin/transaction" text="Transaction" location={location} Icon={IoIosPeople} /> 
                    </ul>
                </div>
                {/* Dashboard end  */}

                {/* Charts start  */}
                <div>
                    <h5>Charts</h5>
                    <ul>
                        <Li url="/admin/chart/bar" text="Bar" location={location} Icon={FaChartBar} />
                        <Li url="/admin/chart/pie" text="Pie" location={location} Icon={FaChartPie} />
                        <Li url="/admin/chart/line" text="Line" location={location} Icon={FaChartLine} />
                    </ul>
                </div>
                {/* Charts end */}

                {/* Apps start  */}
                <div>
                    <h5>Apps</h5>
                    <ul>
                        <Li url="/admin/app/stopwatch" text="stopwatch" location={location} Icon={FaStopwatch} />
                        <Li url="/admin/app/coupon" text="Coupon" location={location} Icon={RiCoupon3Fill} />
                        <Li url="/admin/app/toss" text="Toss" location={location} Icon={FaGamepad} />
                    </ul>
                </div>
                {/* Apps end */}
          </aside>
        </>
    );
};

interface LiProps{
    url: string;
    text: string;
    location: Location;
    Icon: IconType;
    
}

const Li = ({url, text, location, Icon} : LiProps) => (
    <li style={
        {
            background: location.pathname.includes(url) ? "rgba(0, 115, 215, 0.1)" : "white"
        }
    }>
        <Link to={url} style={
            {
               color: location.pathname.includes(url) ? "rgba(0, 115, 215)" : "black" 
            }
        }>
          <Icon></Icon>
          {text}
        </Link>
    </li>
)

export default AdminSidebar;