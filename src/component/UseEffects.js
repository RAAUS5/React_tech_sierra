import React, { useState, useEffect } from 'react';

const UseEffects = () => {

    const [ count, setCount ] = useState(67);
    const [ seconds, setSeconds ] = useState(59);

    const updateData  = () => {
        setCount(10);
        setSeconds(10);
    }

    const updateCounter  = () => {
        setCount(count+1);
    }

    useEffect(() => {
        console.log("Muje bas dependency state update pe hi chal na hai");
    },[seconds])

    return (
        <>
            <h1>count : {count} , seconds : {seconds}</h1>
            <button onClick={updateData}>update data</button>
            <button onClick={updateCounter}>Update Counter</button>
        </>
    )
}

export default UseEffects

