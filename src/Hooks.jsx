import React,{useState,useEffect} from 'react'
import './style.css'
//Progression 1,2
function Hooks1() {
/* let [age,setAge] = useState(21)
 let changeAge = () =>{
    setAge(prev => prev+1)
 }
 let [sibNum, setsibNum] = useState(2)
 let changeSibNum = () =>{
    setsibNum(prev => prev+1)
 }*/
 //using state object
 let [state,setState] = useState({age:21,sibNum:2})
 let changeAge = () =>{
    setState(prev => {
       return {...prev, age:prev.age+1} 
    })
 }
 let changeSibNum = () =>{
    setState(prev => {
        return {...prev, sibNum:prev.sibNum+1} 
     })
    }

  return (
    <>
    <h2>Today I am {state.age} years old</h2>
    <h2>I have {state.sibNum} siblings</h2>
    <div>
        <button onClick={changeAge}>Get Older</button>
        <button onClick={changeSibNum}>More Siblings</button>
    </div>
    </>
  )
}

//Progression 4
function Hooks2() {
 const [count, setCount] = useState(0)
  return (
    <>
    <h2>Count value is: {count}</h2>
    <div>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(prev => prev+1)}>Plus (+)</button>
        <button onClick={() => setCount(prev => prev-1)}>Minus (-)</button>

    </div>
    </>
  )
}
//Progression 5 -> useEffect
function Hooks3() {
    const [age, setAge] = useState(0)
    useEffect(() => {
        document.title = `You are ${age} years old!`
    })
     return (
       <>
       <h2>Look at your browser title</h2>
           <button onClick={() => setAge(prev => prev+1)}>Update Title</button>
        </>
     )
   }


export {Hooks1, Hooks2, Hooks3}