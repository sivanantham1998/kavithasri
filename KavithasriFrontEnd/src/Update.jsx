import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Update() {
    const [id,setId]=useState("")
    const [name,setname]=useState("")
    const [age,setage]=useState("")
    let url="http://localhost:2000"
    let page=useNavigate()
    function save(e){
        e.preventDefault()
        axios.put(`${url}/updatedata/${id}`,{name,age}).then(()=>{
            alert("Data updated")
            page("/")
        }).catch((err)=>{
            alert(err)
        })
    }
    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setname(localStorage.getItem("name"))
        setage(localStorage.getItem("age"))
    },[])
  return (
    <div>
        <h1>Update</h1>
          <form onSubmit={save}>
                <input type="text" id="" placeholder="Enter name" value={name} onChange={(e)=>{
                    setname(e.target.value)
                }}
                className="form-control"/>
                <input type="number" placeholder='enter age' value={age} onChange={(e)=>setage(e.target.value)} />
                <input type="submit" value="Save" />
            </form>
    </div>
  )
}
