import axios from "axios";
import { useEffect, useState } from "react";
//console.log('before effect from3')

export default function  UseEffect1(){
    const [data,setData]=useState([]);

    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/users').then(response =>{
    //         //console.log(response)
    //         setData(response.data)
    //      })
    // },[])

    useEffect( ()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            setData(res.data)
        })
    },[])
     

    return(
        <>
        <div className="text-xl text-red-500 font-semibold">
        {data.length===0  ? <h1>Loading....</h1> : (<div>
            {data.map(user =>(
             <h1 key={user.id}>{user.id} - {user.name}</h1>
            ))}

         </div>)}
        </div>
        </>
    )
}