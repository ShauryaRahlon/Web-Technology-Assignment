import React from "react";

function Calculate(props) {
    const n1 = props.num1
    const n2 = props.num2


    const add = n1 + n2;
    const mul = n1 * n2;
    const sub = n1 - n2;
    const div = n2 != 0 ? n1 / n2 : "Cant 0 divide"

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Simple cal</h2>

            <p>{add}</p>
            <p>{mul}</p>
        </div>
    )
}

export default Calculate