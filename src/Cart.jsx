import { useState } from "react";
import React from "react";

function ShoppingCart() {
    const [product, setProduct] = useState("")
    const [price, setPrice] = useState("")
    const [cart, setCart] = useState([])


    //card mein jayega

    const AddProduct = () => {
        if (product.trim() == "" || price.trim() == "")
            return;

        const newItem = {
            name: product,
            price: Number(price)
        }
        setCart([...cart, newItem])
        setPrice("")
        setProduct("")
    }

    const removeProd = (index) => {
        const updateCart = cart.filter((_, i) => i != index)
        setCart(updateCart)
    }

    const resetCart = () => {
        setCart([])
    }

    const calculateTotal = () => {
        let total = 0
        for (let i = 0; i < cart.length; ++i)
            total += cart[i].price;
        return total;
    }

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>🛒 Shopping Cart</h2>

            <input
                type="text"
                placeholder="Product name"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
            />

            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <button onClick={AddProduct}>Add Product</button>
            <button onClick={resetCart} style={{ marginLeft: "10px" }}>
                Reset Cart
            </button>

            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.name} - ₹{item.price}
                        <button
                            onClick={() => removeProd(index)}
                            style={{ marginLeft: "10px" }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

            <h3>Total: ₹{calculateTotal()}</h3>
        </div>
    );
}
export default ShoppingCart