import React, { use } from "react";
import { useState, useEffect } from "react";


function FlashingButton({ second }) {

    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(!active)
    }, 1)

    const buttonStyle = {
        backgroundColor: active ? second : "yellow",
        fontSize: active ? "24px" : "16px",
        padding: "20px 10px",
        transition: "all 0.1s ease"
    }

    return (
        <button style={buttonStyle}>Flashing</button>
    )
}

export default FlashingButton