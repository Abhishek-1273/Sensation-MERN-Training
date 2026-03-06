import { useState } from 'react'

const User = () => {
    const [count, setCount] = useState(0);     // useState ka use hum component ke andar data store karne aur update karne ke liye karte hain.

    const Increment = () => {
        setCount((prev) => {
            console.log(prev, "Previous");
            return prev + 1;
        });
    };

    const Decrement = () => {
        setCount((prev) => {
            if(prev != 0){
                return prev - 1;
            } 
            else {
                return prev;
            }
        });
    };

    return (
        <>
            <h1>useState</h1>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </>
    )
}

export default User;