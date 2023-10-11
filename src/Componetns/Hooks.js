import React, { useState } from "react";

export default function Hooks(){
   const [inputValue,newChangeValue]=useState('')

   const onChange=(event)=>{
    const newVal=event.target.value;
    newChangeValue(newVal)
   }

   return (
    <>

    <input type="text" value={inputValue}  onChange={onChange} placeholder="Type Something.." ></input>
    <h1 className="text-2xl">{inputValue}</h1>
    
    </>
   )
}