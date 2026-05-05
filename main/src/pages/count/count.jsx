import "./count.css";
import { useState } from "react";

const Count = () => {

    // const [value, useState] = useState(initialValue);

    const [ count, setCount ] = useState(0);

    const handletCount = () => {
        setCount(count + 1)
    }

    const handlIncrement= () => {
        setCount(count - 1)
    }

    
    return (
        <main className="cont">
            <div className="ccc2">
                <h4 className="ccc">Counter</h4>
                <h1 className="ccc1">Count: {count}</h1>
                <button className="btnnn" onClick={handletCount}>+</button>
                <button className="btnnn" onClick={handlIncrement}>-</button>
            </div>
        </main>
    );
}

export default Count;