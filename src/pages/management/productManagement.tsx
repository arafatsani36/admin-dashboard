import { ChangeEvent, FormEvent, useState } from "react";
import AdminSidebar from "../../component/adminsidebar";

const img = "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const ProductManagement = () => {
    const [name, setName] = useState<string>('Puma Shoes');
    const [price, setPrice] = useState<number>(1000);
    const [stock, setStock] = useState<number>(10);
    const [photo, setPhoto] = useState<string>(img);


    const [nameUpdate, setNameUpdate] = useState<string>(name);
    const [priceUpdate, setPriceUpdate] = useState<number>(price);
    const [stockUpdate, setStockUpdate] = useState<number>(stock);
    const [photoUpdate, setPhotoUpdate] = useState<string>(photo);


    const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = e.target.files?.[0];
        const reader: FileReader = new FileReader();

        if(file){
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                if(typeof reader.result === "string") setPhotoUpdate(reader.result)
            }
        }
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        setName(nameUpdate)
        setPrice(priceUpdate)
        setStock(stockUpdate)
        setPhoto(photoUpdate)
    }


    return (
        <div className="adminContainer">
            <AdminSidebar/>
            <main className="productManagement">
                <section>
                    <strong>ID - dddddddaaaaaaaaaaa</strong>
                    <img src={photoUpdate} alt="product" />
                    <p>{nameUpdate}</p>
                    {
                        stockUpdate > 0? (
                            <span className="green">{stockUpdate} Available</span>
                        ): <span className="red">Not Available</span>
                    }
                    <h3>${priceUpdate}</h3>
                </section>
                <article>
                    <form onSubmit={submitHandler}>
                        <h2>Product Manage</h2>
                        <div>
                            <label>Name</label>
                            <input required type="text" placeholder="Name" value={nameUpdate} onChange={(e) => setNameUpdate(e.target.value)}/>
                        </div>

                        <div>
                            <label>Price</label>
                            <input required type="number" placeholder="Price" value={priceUpdate} onChange={(e) => setPriceUpdate(Number(e.target.value))}/>
                        </div>

                        <div>
                            <label>Stock</label>
                            <input required type="number" placeholder="Stock" value={stockUpdate} onChange={(e) => setStockUpdate(Number(e.target.value))}/>
                        </div>

                        <div>
                            <label>Photo</label>
                            <input required type="file" onChange={changeImageHandler}/>
                        </div>

                        {
                           photoUpdate && <img src={photoUpdate} alt="new image" />
                        }
                        <button type="submit">Update</button>
                    </form>
                </article>
            </main>
        </div>
    );
};

export default ProductManagement;