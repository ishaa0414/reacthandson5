import React, { useState } from "react";

const CounterComponent = () => {

    const [count, setCount] = useState(0);
    return (
        <>
            <div className="border">
                <div><h1> COUNTER </h1><hr/></div>
                <div><h2>{count}</h2></div>
                <div><button className='button' onClick={()=>{setCount(count+1)}}>
        Increase
                </button></div>
                <div><button className='button' onClick={()=>{if(count>0){setCount(count-1)}}}>
                    Decrease
                </button> </div>
                <div><button className='button' onClick={()=>{setCount(0)}}>
              Reset
                </button></div>
            </div>
        </>
    );
};

export default CounterComponent;