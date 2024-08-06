import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Read(){
    let url="http://localhost:2000"

    const [data,setdata]=useState([])

    useEffect(()=>{
        axios.get(`${url}/getdata`).then((s)=>{
            // console.log(s.data)
            setdata(s.data)
        })
    },[data])
    function del(id){
        axios.delete(`${url}/deletedata/${id}`).then(()=>{
            axios.get(`${url}/getdata`).then((s)=>{
                setdata(s.data)
                alert("data deleted")
            }).catch((err)=>{
                alert(err)
            })
        }).catch((err)=>{
            alert(err)
        })
    }
    let page=useNavigate()
    function ed(id,name,age){
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("age",age)
        page("/edit")
    }
    return(
        <div>
            <h1>Read data from IDM/React_idm</h1>
            <ul>
                {data.map((item)=>(
                    <li>
                        {item.name}
                        {item.age}
                        <br />
                        <button onClick={()=>del(item._id)}>Remove</button>
                        <button onClick={()=>ed(item._id,item.name,item.age)}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}