import React, { useState } from "react";


function ChangeInput(){
    const [title,setTitle]=useState("");

    const clickHandler =()=>{
        setTitle('')
    }

    const changHandler=(event)=>{
        setTitle(event.target.value);
    }


    return(
        <>
          <input type="text" value={title} onChange={changHandler}  placeholder="type--"/>
          <p>{title}</p>
          <button className="border-2 m-2 p-1 bg-black text-white" onClick={clickHandler}>Click me</button>
        </>
    )
}

export default ChangeInput; 