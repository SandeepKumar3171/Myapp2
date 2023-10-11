import { useState } from "react"

export default function Child(){
  const [data, setdata]= useState(0);

    return (
        <>
        <h1>Hey</h1>
        <p>{data}</p>
        <button className="bg-yellow-500 w-20 h-fit p-2 m-5" onClick={()=>{setdata(data+1)}}>click me</button>
        {/* {data%2===0 ? <Child /> : (<div>unmount </div>)} */}
        
        </>
    )
} 