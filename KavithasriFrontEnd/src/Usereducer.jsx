import React, { useReducer } from 'react'

export default function Usereducer() {
    function reduce(a,action){
        switch(action.type){
            case "add":
                return {count:a.count+1}
            case "minus":
                return {count:a.count-1}
            case "reset":
                return {count:0}           
        }
    }
    const [a,b]=useReducer(reduce,{count:0})
  return (
    <div>
        <h1>
            The count is {a.count}
        </h1>
        <button onClick={()=>b({type:"add"})}>Click to add</button>
        <button onClick={()=>b({type:"minus"})}>Click to less</button>
        <button onClick={()=>b({type:"reset"})}>Reset</button>
    </div>
  )
}
