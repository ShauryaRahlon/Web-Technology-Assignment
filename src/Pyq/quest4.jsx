import { useState } from "react";

export default function DynamicCounters() {
    const [num, setNum] = useState(0);
    const [counters, setCounters] = useState([]);

    const generateCounters = () => {
        const arr = Array.from({ length: num }, () => 0);
        setCounters(arr);
    };

    const increment = (index) => {
        const updated = [...counters];
        updated[index]++;
        setCounters(updated);
    };

    const decrement = (index) => {
        const updated = [...counters];
        updated[index]--;
        setCounters(updated);
    };

    const reset = (index) => {
        const updated = [...counters];
        updated[index] = 0;
        setCounters(updated);
    };

    const total = counters.reduce((sum, val) => sum + val, 0);

    return (
        <div>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(Number(e.target.value))}
                placeholder="Enter number of counters"
            />
            <button onClick={generateCounters}>Generate</button>

            {counters.map((count, index) => (
                <div key={index}>
                    Counter {index + 1}: {count}
                    <button onClick={() => increment(index)}>+</button>
                    <button onClick={() => decrement(index)}>-</button>
                    <button onClick={() => reset(index)}>Reset</button>
                </div>
            ))}

            <h3>Total Sum: {total}</h3>
        </div>
    );
}
