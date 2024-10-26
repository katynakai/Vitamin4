import React, { useState, useEffect } from "react";
import { BrowserRouter as Router} from 'react-router-dom';

const notHome = () => {
    return(
        <Router>
            <div>
                <h2>Not Home</h2>
                <Counter />
            </div>
        </Router>
    );

};

export default notHome;

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title= `You clicked ${count} times`;
    }, [count]);

    if (count > 5)
    {
        console.log('You passed 5!');
    }

    

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count +1)}>increase!</button>
            <button onClick={() => setCount(count -1)}>decrease!</button>
        </div>
);
};
