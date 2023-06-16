import React ,{useEffect, useState}from 'react'

const Counter = () => {
    const [count ,setCount]= useState(0);

    const adding=()=>{
        setCount(count+1)
    }
    const subtracting=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }
    useEffect(()=>{
        console.log("counter is running")
    },[])
  return (

    <div className="main_box">
        <div className='center' >
            <h1 style={count>=0?{color:"green"}:{color:"red"}}>{count}</h1>
            <div className='btn_div'>
                <button onClick={adding} > Increm</button>
                <button onClick={reset}>Reset</button>
                <button onClick={subtracting}>Decrem</button>
            </div>
        </div>
    </div>
  )
}

export default Counter