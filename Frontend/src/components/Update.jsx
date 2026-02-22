import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'

function Update() {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [number, setnumber] = useState("")

  const {id}=useParams()

  const navigate = useNavigate()

  useEffect(()=>{
    axios.get("https://deploy-backend-tgm2.onrender.com/getuser/"+id)
    .then(result=>{
      setname(result.data.name)
      setemail(result.data.email)
      setnumber(result.data.number)
    })
  },[])

  const handelupdate=(e)=>{
    e.preventDefault()
    axios.put("https://deploy-backend-tgm2.onrender.com/update/"+id,{name,email,number})
    .then(result=>{
      navigate("/")
    })
  }

  return (
    <div>
      <form action="" onSubmit={handelupdate}>
        <h1>Update Data</h1>
        <p>
          Name:
          <input type="text" placeholder='Enter Your Name' name='name' value={name} onChange={(e) => setname(e.target.value)} />
        </p>
        <p>
          Email:
          <input type="email" placeholder='Enter Your Name' name='email' value={email} onChange={(e) => setemail(e.target.value)} />
        </p>
        <p>
          Number:
          <input type="number" placeholder='Enter Your Name' name='number' value={number} onChange={(e) => setnumber(e.target.value)} />
        </p>
        <input type="submit" value="Update" />
      </form>
    </div>
  )
}

export default Update
