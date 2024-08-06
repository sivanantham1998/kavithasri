import axios from "axios"
import { useState } from "react"
import Read from "./Read"

export default function Create(){
    const [name,setname]=useState("")
    const [age,setage]=useState("")
    let url="http://localhost:2000"
    function save(e){
        e.preventDefault()
        axios.post(`${url}/postdata`,{name,age}).then(()=>{
            alert("Success")
            setname("")
            setage("")
        }).catch((err)=>[
            alert(err.messsage)
        ])
    }
    return(
        <div>
            <form onSubmit={save}>
                <input type="text" id="" placeholder="Enter name" value={name} onChange={(e)=>{
                    setname(e.target.value)
                }}
                className="form-control"/>
                <input type="number" name="" id="" value={age} onChange={(e)=>setage(e.target.value)} />
                <input type="submit" value="Save" />
            </form>

            <Read />
        </div>
    )
}