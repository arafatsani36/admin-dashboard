import AdminSidebar from "../../component/adminsidebar";
import { LineChat } from "../../component/chats";

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'July', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'];

const LineCharts = () => {
    return (
        <div className="adminContainer">
        <AdminSidebar/>
        <main className="chartContainer">
        <h1>Line Charts</h1>

        <section>
        <LineChat data={[200, 444, 444, 556, 778, 455, 990, 1444, 256, 447, 1000, 1200, 150]}
            label="Users"
            borderColor="rgb(53, 162, 255)"
            labels={months}
            backgroundColor="rgba(53, 162, 255, 0.5)"/>

            <h2>ACTIVE USERS</h2>
        </section>

        <section>
        <LineChat data={[1200, 804, 538, 556, 208, 500, 990, 402, 710, 137, 400, 200, 150]}
            label="Products"
            borderColor={"hsla(269, 80%, 40%)"}
            labels={months}
            backgroundColor={"hsla(269, 80%, 40%, 0.4)"}/>

            <h2>TOTAL PRODUCTS (SKU)</h2>
        </section>


        <section>
        <LineChat data={[200, 444, 444, 556, 778, 455, 990, 1444, 256, 447, 1000, 1200, 150]}
            label="Revenue"
            borderColor={"hsla(129, 80%, 40%)"}
            labels={months}
            backgroundColor={"hsla(129, 80%, 40%, 0.4)"}/>

            <h2>TOTAL REVENUE</h2>
        </section>

        <section>
        <LineChat data={[1000, 244, 434, 1030, 748, 555, 990, 1444, 456, 347, 1000, 1200, 150]}
            label="Discount"
            borderColor={"hsla(29, 80%, 40%)"}
            labels={months}
            backgroundColor={"hsla(29, 80%, 40%, 0.4)"}/>

            <h2>DISCOUNT ALLOTTED</h2>
        </section>
        </main>
    </div>
    );
};

export default LineCharts;