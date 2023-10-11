import React from "react";

function Profile(props){
    return (
        <>
       {/* <p className="text-4xl font-semibold">{props.text}</p> */}
       <p>{props.obj.fname}</p>
       <p>{props.obj.lname}</p>
       <p>{props.obj.age}</p>
       <p>{props.obj.father}</p>
       <p>{props.list.l1}</p>
        </>
    )
}
export default Profile;