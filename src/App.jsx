import React, { useState }from 'react';


const App = () => {
    const state = useState();

    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }
    return (
        <>
            <div className="content">
                <h1> {count} </h1>
                <button onClick={Increment}> Click </button>
            </div>
        </>
    )
};

export default App;