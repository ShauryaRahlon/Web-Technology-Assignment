// Build a React component that computes and displays simple interest at the rate of 12.5% per annum. Principal amount and time should be taken as input from user.

import React from "react";
import { useState } from "react";

export default function SimpleInterest() {

    const [PrincipalAmount, setPrincipalAmount] = useState("")
    const [times, setTimes] = useState("")//in years
    const rate = parseFloat(12.5)
    const [interest, setInterest] = useState("")

    const ChangeAmount = (e) => {
        setPrincipalAmount(e.target.value)
    }
    const changeTime = (e) => {
        setTimes(e.target.value)
    }


    const calculate = () => {
        const Sinterest = parseFloat((PrincipalAmount) * (times) * (rate) / 100)
        setInterest(Sinterest)
    }

    return (
        <div>
            <input type="number"
                id="Amt" placeholder="Amount"
                value={PrincipalAmount}
                onChange={ChangeAmount}
            />

            <input
                type="number"
                placeholder="Time (years)"
                value={times}
                onChange={changeTime}
            />

            <br />

            <button onClick={calculate}>Calc</button>

            {interest !== null && (
                <h3>Simple Interest={interest}</h3>
            )}
        </div>

    )
}