import { useState } from "react";
import AdminSidebar from "../../component/adminsidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img1 = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const orderItems: OrderItemType[]=[
    {
    name: "Puma Shoes",
    photo: img1,
    _id: "sadadadada",
    quantity: 5,
    price: 5000
    }
]

const TransactionManagement = () => {
    const[oder, setOder] = useState<OrderType>({
        name: "Phoebe B. Ringer",
        address: "3917 Quilly Lane",
        city: "United states",
        state: "USA",
        country: "USA",
        pinCode: 1230,
        status: "Processing",
        subtotal: 1520,
        discount: 5,
        shippingCharge: 50,
        tax: 20,
        total: 2000 + 100 + 0 - 1204,
        orderItems,
        _id: "dadasasa"
    });

    const {name, address, city, state, country, pinCode, status, subtotal, discount, shippingCharge, tax, total} = oder;

    const updateHandler = () =>{
        setOder(pre => ({
            ...pre,
            status: pre.status === "Processing"?"Shipped" : "Delivered"
            }))
    }

    return (
        <div className="adminContainer">
        <AdminSidebar/>
        <main className="productManagement">
            <section style={{
                padding: "2rem"
            }}>
                <h2>Oder Items</h2>

                {
                    oder.orderItems.map(i => (
                        <ProductCard name={i.name} photo={i.photo} _id={i._id} quantity={i.quantity} price={i.price}/>
                    ))
                }
            </section>

            <article className="shippingInfoCard">
                <h2>Order Info</h2>
                <h4>User Info</h4>
                <p>Name: {name}</p>
                <p>Address: {`${address}, ${city}, ${state}, ${country}, ${pinCode}`}</p>
                <h4>Amount Info</h4>
                <p>Subtotal: {subtotal}</p>
                <p>Discount: {discount}</p>
                <p>Shipping Charge: {shippingCharge}</p>
                <p>Tax: {tax}</p>
                <p>Total: {total}</p>

                <h4>Status Info</h4>
                <p>
                    status:{" "} <span className={status === "Delivered"?"purple" : status=== "Shipped"?"green" : "red"}>{status}</span>
                </p>
                
                <button onClick={updateHandler}>Process oder</button>

            </article> 
        </main>
    </div>
    );
};

const ProductCard = ({name, photo, _id, quantity, price}: OrderItemType) => (
    <div className="transactionProductCard">
        <img src={photo} alt={name} />
         <Link to={`/product/${_id}}`}>{name}</Link>
         <span>${price} X {quantity} = {price*quantity}</span>
    </div>
)
    


export default TransactionManagement;