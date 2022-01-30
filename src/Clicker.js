import React from "react";

const Clicker = () =>{ // component
    const fireLasers = () => { // function
        console.log("Zap pew pew");
    }
    return <button onClick = {fireLasers}>Click Me</button>
}

export default Clicker;