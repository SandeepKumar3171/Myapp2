import {useState} from "react";
import './Component2.css';

function Component2(){
    const [data, setData]=useState({address:"", gmail:""})

    function changedata(event){
       setData({...data,[event.target.name]:event.target.value})
       console.log(data)
    }

   function handleReset(event){
        event.preventDefault()
        setData({address:"", gmail:""})
        console.log(data)
   }
    return(
        <>
        <div className="container">
        <form onReset={handleReset} className="flex justify-center gap-5 m-5" action="">

<label htmlFor="">Address <input onChange={changedata} className="border shadow-md shadow-slate-600" type="text" name="address" value={data.address}/></label>
<label htmlFor=""> Gmail <input onChange={changedata} className="border shadow-md shadow-slate-600" type="email" name="gmail" value={data.gmail} /></label>
<label htmlFor=""><input className="bg-red-500 text-white p-1 rounded-lg cursor-pointer" type="reset" value={'reset'} /></label>
</form>


        </div>
        
        </>
    )
}

export default Component2;