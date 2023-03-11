import React from "react";
import './style.css'

const HigherOrderComponent = (props) => {
    return (
        <>
            <div className="flex" >
                <div>
                    <props.data />
                </div>
                <div>
                    <props.data />
                </div>
            </div>
        </>
    );
};

export default HigherOrderComponent;
