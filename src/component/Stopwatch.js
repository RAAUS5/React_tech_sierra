import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [seconds ,setSeconds]= useState(0);
    const [minutes ,setMinutes]= useState(0);
    const [active, setActive]= useState(true)

    let reset;

    useEffect(()=>{
       reset= setTimeout(()=>{
            if(seconds===59){
                setMinutes(minutes+1);
                setSeconds(0);
            }
            else{
                setSeconds(seconds+1)
            }
        },1000);

    },[seconds,active]);

    const resettime=()=>{
        setMinutes(0)
        setSeconds(0)
        clearTimeout(reset)
        setActive(!active)


    }
    const ActionONtimer =(e)=>{
        if(e.target.innerText=="Stop"){
            clearTimeout(reset)
            e.target.innerText="Resume"
            e.target.style.backgroundColor="green"
        }else if(e.target.innerText=="Resume"){
            setActive(!active)
            e.target.innerText="Stop"
            e.target.style.backgroundColor="Red"
        }
    }

  return (
    
    <div className='main main_box'>
        <div className='centers'>
            <h1 className='Timer'>Timer</h1>
            <div className="Counter">
                <div className="min">
                    <h2>Minutes</h2>
                    <h2 className='h2'>{minutes<10 && 0}{minutes}</h2>
                </div>
                <div className="sec">
                    <h2>Seconds</h2>
                    <h2 className='h2'>{seconds<10? 0: ""}{seconds}</h2>
                </div>
            </div>
            
            <div className='resets'>
                <button onClick={resettime} className='button'>reset</button>
                <button onClick={ActionONtimer} style={{background:"red"}} className='button2'>Stop</button>
            </div>
        </div>
        
    
    </div>
  )
}

export default Stopwatch