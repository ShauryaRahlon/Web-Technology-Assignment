// //  Implement a Display component which contains an anchor element with caption ‘List the
// shopping malls in Noida’, a heading ‘Shopping Malls in Noida’, and a table containing the
// names and addresses of 3 shopping malls. Rendering of the heading and a table should be
// toggled by clicking on the link ‘List the shopping complex in Noida’ using the following
// logic:
// On initial rendering, the heading and table should not be rendered.
// On clicking the link ‘List the shopping complex in Noida’, the heading and table
// should get rendered.
// On clicking the link again, the heading and table should not be rendered.


import { useState } from "react";

/*
meaning when clicked on the link the following should happen

    a table should be printed 
        it should contain the following
        name address <-- these are the coloumn headings 
    
        and when clicked back on the link it should toggle and hide

        so we can use a usestate so whenever that link is clicked the value is set to 1
        and table is printed else not

        somethign like this 
        const [display,setdisplay]=useState(false)

        somewhere below

        <div>
            display && (map something)
        <div>
*/

function Display() {
    const [show, setShow] = useState(false)

    const toggleDisplay = () => {
        setShow(!show)
    }

    return (

        <div>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                toggleDisplay()
            }}>List the shopping malls</a>

            {show &&
                <div><h2> Shopping malls</h2>

                    <table>
                        <thead>
                            <th>Name</th>
                            <th>Address</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>DLF</td>
                                <td>Sector 17</td>
                            </tr>
                            <tr>
                                <td>gip</td>
                                <td>somewhere in the middle east</td>
                            </tr>
                        </tbody>
                    </table>
                </div>}
        </div>
    )

}

export default Display