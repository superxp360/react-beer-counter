import { useState } from "react";


export default function Body () {
    const [counter, setCounter] = useState(1)



    return(
        <section>
            <h2>Let's count:</h2>
            <p>{counter}  beers</p>
            <button id="button1" onClick={ () => {setCounter(counter + 1)}}>+</button>
            <button id="button2" onClick={ () => {setCounter(counter - 1)}}>-</button>
        </section>
    )
}