import React from "react";
function Props(prop){
      const month=prop.date.toLocaleString('en-US',{month:'long'});
      const day=prop.date.toLocaleString('en-US',{day:'2-digit'});
      const year=prop.date.getFullYear()

    return (<>
        
        <div className="text-xl text-rose-600 font-semibold">
        <p>{prop.title}</p>
        <p>{prop.amount}</p>
        {/* <p>{prop.date.toISOString()}</p> */}
        <p>{day} {month} {year}</p>
        {/* <p>{day}</p>
        <p>{month}</p>
        <p>{year}</p> */}
        </div>
    </>)   
}
export default Props;