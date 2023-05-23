import React, {useState} from "react";



function Item() {
    let [number, setNumber] = useState(0);
    let incrementer = ()=> setNumber(number+1);
    return (
        <div>
            <h1 style={{fontSize : 50}}>HellO World</h1>
            <h2>Nombre : {number}</h2>
            <button onClick={incrementer}>Test</button>
        </div>

    );
}

export default Item;