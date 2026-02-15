import { useState } from "react";

export default function SyncInputs() {
    const [text, setText] = useState("");

    const reverseString = (str) => {
        return str.split("").reverse().join("");
    };

    const handleChangeA = (e) => {
        setText(e.target.value);
    };

    const handleChangeB = (e) => {
        setText(reverseString(e.target.value));
    };

    const reversedText = reverseString(text);

    return (
        <div>
            <h2>Sync Inputs</h2>

            <div>
                <label>Input A: </label>
                <input
                    type="text"
                    value={text}
                    onChange={handleChangeA}
                />
            </div>

            <div>
                <label>Input B: </label>
                <input
                    type="text"
                    value={reversedText}
                    onChange={handleChangeB}
                />
            </div>

            <h3>Total Characters: {text.length}</h3>
        </div>
    );
}
