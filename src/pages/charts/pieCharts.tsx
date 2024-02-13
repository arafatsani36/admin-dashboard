import AdminSidebar from "../../component/adminsidebar";
import { DougHnutChart, PieChart } from "../../component/chats";

import {categories} from "../../assets/data.json"

const PieCharts = () => {
    return (
        <div className="adminContainer">
        <AdminSidebar/>
        <main className="chartContainer">
        <h1>Pie & Doughnut Charts</h1>
            <section>
                 <div>
                    <PieChart 
                    labels={["Processing", "Shipped","Delivered"]} 
                    data={[12, 40, 30]} 
                    backgroundColor={[
                        `hsl(110, 80%, 80%)`,
                        `hsl(110, 80%, 50%)`,
                        `hsl(110, 40%, 50%)`
                    ]}
                    offset={[0, 0, 50]}
                    />
                 </div>
                 <h2>ORDER FULFILLMENT RATIO</h2>
            </section>

            <section>
                 <div>
                    <DougHnutChart
                    labels={categories.map(i => i.heading)}
                    data={categories.map(i => i.value)} 
                    backgroundColor={categories.map(i =>  `hsl(${i.value*4}, ${i.value}%, 50%)`)}
                    legends={false}
                    offset={[0, 0, 0, 50]}
                    
                    />
                 </div>
                 <h2>PRODUCT CATEGORIES RATIO</h2>
            </section>

            <section>
                 <div>
                    <DougHnutChart
                    labels={["In Stock", "Out Of Stock"]}
                    data={[40, 20]} 
                    backgroundColor={['hsl(269, 80%, 40%)', 'rgb(53, 162, 255)']}
                    legends={false}
                    offset={[0, 80]}
                    cutout={"70%"}
                    
                    />
                 </div>
                 <h2>STOCK AVAILABILITY</h2>
            </section>

            <section>
                 <div>
                    <DougHnutChart
                    labels={["Marketing Cost", "Discount", "Burnt", "Production Cost", "Net Margin"]}
                    data={[40, 20, 10 , 40, 70]} 
                    backgroundColor={['hsl(110, 80%, 40%)', 'hsl(19, 80%, 40%)', 'hsl(69,80%,40%)', 'hsl(300, 80%, 40%)', 'rgb(53, 162, 255)']}
                    legends={false}
                    offset={[20, 30, 20, 30, 80]}
                    />
                 </div>
                 <h2>REVENUE DISTRIBUTION</h2>
            </section>

            <section>
                 <div>
                    <PieChart 
                    labels={["Teenager (Bellow 20)", "Adult (20-40)","Older(above 40)"]} 
                    data={[32, 200, 80]} 
                    backgroundColor={[
                        `hsl(10, ${80}%, 80%)`,
                        `hsl(10, ${80}%, 50%)`,
                        `hsl(10, ${80}%, 50%)`
                    ]}
                    offset={[0, 0, 50]}
                    />
                 </div>
                 <h2>USERS AGE GROUP</h2>
            </section>

            <section>
                 <div>
                    <DougHnutChart
                    labels={["Admin", "Customers"]}
                    data={[40, 220]} 
                    backgroundColor={['hsl(335, 100%, 38%)', 'hsl(44, 98%, 50%)']}
                    legends={true}
                    offset={[20, 20]}
                    />
                 </div>
            </section>  
        </main>
    </div>
    );
};

export default PieCharts;