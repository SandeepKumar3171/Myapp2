import { useEffect, useState } from "react";

export default function  UseEffect(){
    console.log("before effect")
    const [initialState,setInitialState]=useState(0);

    useEffect(()=>{
        console.log('Effect')
    },[initialState]);

    console.log('after effect')

    return(
        <>
        {console.log("inside jsx")}
        <h1>Hello</h1>
        <div className="flex">
        <button className="bg-red-500 pl-5 pr-5 h-12 w-26 ml-12 rounded-xl" onClick={()=>{setInitialState(initialState+1)}}>click = {initialState}</button>
       <p className="text-2xl ml-5 mt-2">= {initialState}</p>
        </div>
        </>
    )
}