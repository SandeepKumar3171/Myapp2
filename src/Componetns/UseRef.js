import {useEffect, useRef } from "react";

function Useref(){

const Heading1=useRef();
useEffect(()=>{
    Heading1.current.style.color="green"
    Heading1.current.style.background="yellow"

    console.log(Heading1.current)
},[])
     

    return(
    <>
       <p ref={Heading1} id="h1"  className="text-2xl font-semibold">useRef Heading</p>
    </>
    )
 }

export default Useref;