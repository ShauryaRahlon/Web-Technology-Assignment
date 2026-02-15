import React, { useState, useEffect } from "react";

function FlashingButton({ second }) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => !prev);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    const buttonStyle = {
        backgroundColor: active ? second : "yellow",
        fontSize: active ? "24px" : "16px",
        padding: "20px 10px",
        transition: "all 0.1s ease"
    };

    return (
        <button style={buttonStyle}>
            Flashing Buttons
        </button>
    );
}

export default FlashingButton;
