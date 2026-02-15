import React, { useState } from "react";

function SmartCart() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    // Add Product
    const addProduct = () => {
        if (name === "" || price === "") return;

        const newProduct = {
            name: name,
            price: Number(price),
            selected: false
        };

        setProducts([...products, newProduct]);
        setName("");
        setPrice("");
    };

    // Toggle selected
    const toggleProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].selected = !updatedProducts[index].selected;
        setProducts(updatedProducts);
    };

    // Calculate total using FOR LOOP
    let totalPrice = 0;

    for (let i = 0; i < products.length; i++) {
        if (products[i].selected === true) {
            totalPrice = totalPrice + products[i].price;
        }
    }

    const totalProducts = products.length;

    // Reset cart
    const resetCart = () => {
        setProducts([]);
    };

    return (
        <div>
            <h2>SmartCart</h2>

            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <button onClick={addProduct}>Add</button>

            <hr />

            <h3>Products:</h3>

            {products.map((product, index) => (
                <div
                    key={index}
                    onClick={() => toggleProduct(index)}
                    style={{
                        backgroundColor: product.selected ? "lightgreen" : "white",
                        border: "1px solid black",
                        margin: "5px",
                        padding: "5px",
                        cursor: "pointer"
                    }}
                >
                    {product.name} - ₹{product.price}
                </div>
            ))}

            <hr />

            <p>Total Products: {totalProducts}</p>
            <p>Total Selected Price: ₹{totalPrice}</p>

            <button onClick={resetCart}>Reset</button>
        </div>
    );
}

export default SmartCart;
