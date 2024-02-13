import AdminSidebar from "../../component/adminsidebar";
import { BarChat } from "../../component/chats";

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'July', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'];

const BarCharts = () => {
    return (
        <div className="adminContainer">
            <AdminSidebar/>
            <main className="chartContainer">
                <h1>Bar Charts</h1>

                <section>
                    <BarChat data_1={[200, 300, 700, 150, 900, 400,200]} data_2={[400, 100, 500, 950, 400, 700,600]} title_1="products" title_2="users" bgColor_1={`hsl(260, 50%, 30%)`} bgColor_2={`hsl(360, 90%, 90%)`} />
                    <h2>TOP PRODUCTS & TOP CUSTOMERS</h2>
                </section>

                <section>
                    <BarChat data_1={[400, 100, 500, 950, 400, 700,600, 50, 710, 379, 1089, 500, 270]} data_2={[]} title_1="products" title_2="" bgColor_1={`hsl(180, 40%, 50%)`} bgColor_2="" horizontal={true} labels={months} />
                    <h2>ORDERS THROUGHOUT THE YEAR</h2>
                </section>
            </main>
        </div>
    );
};

export default BarCharts;

// invision, fiverr, modern website