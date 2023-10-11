import React, { useEffect, useState } from "react";


function UseEffect3(){
    const [data1,setDeta1]=useState(0);
    const [data2,setDeta2]=useState(0);

    useEffect(()=>{
        console.log('UseEffect')
    },[data1])


    return (
        <>
         <div>
             <h1>Use Effect In react</h1>
             <button onClick={()=>setDeta1(data1+1)} className="bg-green-500 ml-10 p-3 rounded-xl">click here = {data1+1}</button>
             <button onClick={()=>setDeta2(data2+1)} className="bg-green-500 ml-10 p-3 rounded-xl">click here = {data2}</button>
         </div>
        </>
    )
}

export default UseEffect3;