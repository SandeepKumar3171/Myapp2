import React, { useState } from "react";

const Forms=()=>{

    const [title,settitle]=useState('')
    const [amount,setAmount]=useState('')
    const [date,setDate]=useState('')


 const changeTitleHandlare=(event)=>{
    //console.log(event.target.value)
    settitle(event.target.value)

 }
 const changeAmountHandlare=(event)=>{
   // console.log(event.target.value)
    setAmount(event.target.value)
    
 }
 const changeDateHandlare=(event)=>{
    //console.log(event.target.value)
    setDate(event.target.value)
    
 }
 
 const submitHandler=(event)=>{
    //site ko refresh hone se bachne ke liy event.preventDefault() ka use krte h 
    event.preventDefault()
    
    // use for storing the data in object form when we submit the form
    const expenseData={
        title:title,
        amount:amount,
        date:(new Date(date)).toLocaleDateString()
    }
    console.log(expenseData)
   

    //use for clear the data from the input after submited the form
    settitle('')
    setAmount('')
    setDate("")
    alert("Are you sure yoy want to submit this form")
 }



    return(<>

    <form onSubmit={submitHandler} className="flex gap-5 p-5 bg-red-600 shadow-lg shadow-black m-5">
        <input type="text" value={title} onChange={changeTitleHandlare} placeholder="Enter your name" />
        <input type="number" value={amount} onChange={changeAmountHandlare} placeholder="Enter amount"/>
        <input required type="date" value={date} onChange={changeDateHandlare}/>
        <input className="bg-blue-600 text-white p-1 rounded-lg cursor-pointer" type="submit" />
        {/* <p>{title}</p> */}
        {/* <p>{amount}</p> */}
    </form>
    
    </>)
}

export default Forms;