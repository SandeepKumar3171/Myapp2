import React, { useState } from 'react';
import { AiFillHeart } from "react-icons/ai";
import Component1 from './Componetns/Component';
import Profile from './Componetns/PropsMethod';
import Profile2 from './Componetns/Props2';
import Props from './Componetns/Props3';
import Hooks from './Componetns/Hooks';
import UseEffect from './Componetns/LifeCycleUseEffect';
import UseEffect1 from './Componetns/LifeCycle2';
import UseEffect2 from './Componetns/LifeCycle3';
import UseEffect3 from './Componetns/UseEffect';
import Child from './Componetns/Child';

import Useref from './Componetns/UseRef';
import ChangeInput from './Componetns/InputText';
import Forms from './Componetns/Form';

const App=()=> {
  /* we can not use like this 
  // const count=useState('sandeep')[0]
  // const setCount = useState('Sandeep')[1]
  // console.log(count)
  // setCount('Kashyap')
  // console.log(count)
*/

const [count,setCount] = useState(0);

function CountLike(){
    setCount(count+1)
    //console.log(count)
}

const Obj2={
  fName:'Arpita hh',
  lName:'Kashyap',
  age:3,
  hobby:['playing','eating','playing','walking']
}

//code for props3
let expenseDate= new Date(2023,8,7);
let expenseTitle='School Fee';
let expenseAmount=300;



  return (
    <div className='p-5'>
     <p className="flex pt-2 pl-2 gap-2 text-green-500 font-semibold">Like: {count} <span className="mt-1.5 text-red-500 rounded-xl">{<AiFillHeart/>}</span></p>
      
      <button className="flex p-2 ml-2 bg-blue-600 rounded-xl" onClick={CountLike}><span className="text-white bg-blue-500 rounded-xl p-1">click here</span></button>

      <div   className='text-red-500 pl-10 flex cursor-pointer '>click on the heart :<span onClick={CountLike} className='text-4xl text-center '>{<AiFillHeart />}</span> <p className="flex pl-2 gap-2 text-green-500 font-semibold">Like: {count}</p></div>

      <Component1/>

       {/* <Profile text="Hello Sandeep, This is props method" /> */}
      <Profile
       obj={
        {fname:'Sandeep shhs',
        lname:"Kashyap kk",
        age:22,
        father:"Rajendre"}}

       list={
        {l1:'student',
        l2:'man',
        l3:'bird',
        l4:'animal'}}
      />

      <Profile2 
         lname={Obj2.lName}
         fname={Obj2.fName}
         age={Obj2.age}
         interest={Obj2.hobby[2]}
      />

      <Props 
      title={expenseTitle}
      amount={expenseAmount}
      date={expenseDate}
      />

      <Hooks />
      <UseEffect />
      <UseEffect1 />
      <UseEffect2 />
      <UseEffect3 />
      <Child />

      <Useref />
      <ChangeInput />

      <Forms />


  
     
    </div> 
  );
}

export default App;
