import { useState } from "react";

function Component1(){
  const [data,setData]=useState({fname:"",lname:""})

    function handleChange(event){
         //console.log(event.target.value)
        
        setData({...data,[event.target.name]:event.target.value})
        console.log(data)
    }

    function handleSubmit(event){
        event.preventDefault()
         setData({fname:"",lname:""})
         console.log(data)
    }
return(
    <> 
    <form onSubmit={handleSubmit}>
        <label htmlFor="">
            Firstname <input className="border m-2" onChange={handleChange} value={data.fname} name="fname" type="text" />
        </label>
        <label htmlFor="">
            Lastname <input className="border m-2" onChange={handleChange} value={data.lname} name="lname" type="text" />
        </label>
        <input className="border p-1 rounded-xl bg-blue-600 text-white cursor-pointer" type="submit" value={'submit'} />
    </form>
    
    </>
)

}

export default Component1;