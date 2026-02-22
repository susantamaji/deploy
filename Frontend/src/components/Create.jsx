import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Create() {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [number,setnumber]=useState("")

    const navigate=useNavigate()

    const handelsubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:4500/create",{name,email,number})
        .then((user)=>{
            navigate("/")
        })
    }

  return (
    <div>
        <form action="" onSubmit={handelsubmit}>
            <p>
                Name:
                <input type="text" placeholder='Enter Your Name' name='name' value={name} onChange={(e)=>setname(e.target.value)}/>
            </p>
            <p>
                Email:
                <input type="email" placeholder='Enter Your Name' name='email'value={email} onChange={(e)=>setemail(e.target.value)}/>
            </p>
            <p>
                Number:
                <input type="number" placeholder='Enter Your Name'name='number' value={number} onChange={(e)=>setnumber(e.target.value)}/>
            </p>
            <input type="submit" value="Create" />
        </form>
    </div>
  )
}

export default Create