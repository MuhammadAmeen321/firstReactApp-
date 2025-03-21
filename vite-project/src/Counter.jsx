import React,{useState} from 'react';

function counter(){
    const [count, setCount] = useState(0)

    return(
        <div>
            {/* <p>Count: {count}</p> */}
            <button onClick={() => setCount(count + 1)}>increment: {count}</button>
            <button onClick={() => setCount(count - 1)}>decrement</button>
            
        </div>
    )
}

export default counter;

