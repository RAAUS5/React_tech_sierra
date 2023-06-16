import React, { useState } from 'react'
import { Regularbtn } from './Regularbtn'
import TextSummary from './TextSummary'

const Textarea = () => {
    const [inputvalue,setimptvalue] = useState("")
    function changeTouppercase(){
        setimptvalue(inputvalue.toUpperCase())
        
    }
    function changeTolowercase(){
        setimptvalue(inputvalue.toLowerCase())
        
    }
    function Deleteallspace(){
        let regx = /\s+/g
        setimptvalue(inputvalue.replace(regx, " "))
    }
    function changeinput(e){
        
        setimptvalue(e.target.value)
    }
    function Deleteallspacialchar(){
        let regx = /[!@#$%^&*]/g
        setimptvalue(inputvalue.replace(regx, " "))
    }

  return (
    <>
    <div className="form-floating">
        <h3>Enter Your Text</h3>
    <textarea className="form-control" value={inputvalue} onChange={changeinput}placeholder="Leave a comment here" id="floatingTextarea"></textarea>
    </div>

    <div className='btns'>
        <Regularbtn handlefuntion={changeTouppercase} bgcolor={"red"} btntext="Uppercase" />
        <Regularbtn handlefuntion={changeTolowercase} bgcolor={"grey"}btntext="Lowercase"/>
        <Regularbtn handlefuntion={Deleteallspace} btntext="Delete all Space"/>
        <Regularbtn handlefuntion={Deleteallspacialchar} bgcolor={"#192bc2"} btntext={"Delete all spacial char"}/>
    </div>
    <TextSummary/>
        <div>
            <p>Total Words: <span>{inputvalue.length > 0 ? inputvalue.replace(/\s+/g," ").trim().split(" ").length : 0}</span> </p>
            <p>Total Chars: <span>{inputvalue.length > 0 ? inputvalue.replace(/\s+/g," ").trim().split("").length : 0}</span> </p>
        </div>
    </>
  )
}

export default Textarea