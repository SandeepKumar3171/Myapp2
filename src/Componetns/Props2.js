import React from "react";
export default function Profile2(value){
//export default function Profile2({fname,interest}){

    return(
        <>
         <p>{value.fname}</p>
         <p>{value.interest}</p>
         {/* <p>{fname}</p>
         <p>{interest}</p> */}
        </>
    )
}