import React from "react";
import { useState } from "react";

function calcGrage() {
    // name roll no marks of 5 subject
    const [name, setName] = useState("")
    const [rollNo, setRollNo] = useState("")
    const [marks, setMarks] = useState(["", "", "", "", ""])
    const [students, setStudents] = useState([])

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeRoll = (e) => {
        setRollNo(e.target.value)
    }

    const ChangeMarks = (index, value) => {
        //copy krdo usmein changes krdo then update 
        const newMarks = [...marks]
        newMarks[index] = value
        setMarks(newMarks)
    }
    const calculateGrade = (percentage) => {
        if (percentage < 30) return "F";
        else if (percentage < 40) return "D";
        else if (percentage < 50) return "C";
        else if (percentage < 60) return "B";
        else if (percentage < 80) return "A";
        else return "A+";
    };
    const handleSubmit = (e) => {
        e.preventDefault()

        let total = 0;
        for (let i = 0; i < marks.length; ++i)
            total += (Number(marks[i]))

        const percentage = total / 5;
        const grade = calculateGrade(percentage)

        const newStudent = {
            name,
            rollNo,
            percentage,
            grade
        }
        setStudents([...students, newStudent])
        setName(
            ""
        )
        setRollNo("")
        setMarks("")
    }
    return (
        <div>
            <h2>student grade</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)} />

                <input
                    type="text"
                    placeholder="Roll No"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                />

                <br />

                {marks.map((m, index) => (
                    <input
                        key={index}
                        type="Number"
                        value={m}
                        onChange={(e) => changeName(e.target.value)}
                    />
                ))}

                <br />
                <button type="submit">Submit</button>

            </form>
            {students.map((student, index) => {
                <div key={index}>
                    <p>{student.name}</p>
                    <p>{student.rollNo}</p>
                </div>
            })}
        </div>
    )
}

export default calcGrage;