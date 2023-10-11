import { useEffect, useState } from "react";

export default function  UseEffect1(){
    const [data,setData]=useState([]);

    // async function fetchingApi(){
    //     const url= 'https://jsonplaceholder.typicode.com/users';
    //     const data=await fetch(url)
    //     const response = await data.json()
    //     setData(response);
    // }

     async function fetchingApi(){
        const url='https://jsonplaceholder.typicode.com/users';
        const data=await fetch(url)
        const res=await data.json()
        setData(res)
    }

    useEffect(()=>{
        fetchingApi();
    },[])
  

    // useEffect(()=>{
    //     const url='https://jsonplaceholder.typicode.com/users';
    //     fetch(url).then(response=>{
    //         return response.json() 
    //     }).then(response=>{
    //        setData(response);
    //     })
    // },[]);

    // console.log('after effect')

    return(
        <>
         {data.length===0  ? <h1>Loading....</h1> : (
         <div>
            {data.map(user =>(
             <h1 key={user.id}>{user.id} - {user.name}</h1>
            ))}

         </div>)}
        </>
    )
}