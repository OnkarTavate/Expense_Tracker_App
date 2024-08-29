import { useState } from "react";

let CounterComponent = () => {
    // let Counter = 0;
    let [Counter, setCounter] = useState(0)
    let btnhandler = () => {
        setCounter(Counter+1)
        // setCounter(prev => prev+1)
    }
    return (
        <div>
            <h3>Counter: {Counter}</h3>
            <button onClick={btnhandler}>Click</button>
        </div>
    )
}

export default CounterComponent