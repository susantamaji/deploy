import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function User() {
  const [myapidata,setmyapidata]=useState([])

  async function getdata(){
    const result=await axios.get("https://deploy-backend-tgm2.onrender.com/getdata")
    console.log(result.data);
    setmyapidata(result.data)
  }

  const handelDelete=(id)=>{
    axios.delete("https://deploy-backend-tgm2.onrender.com/deleteuser/"+id)
    .then(res=>{
      window.location.reload()
    })
  }

  useEffect(()=>{
    getdata()
  },[])



  return (
    <div>
        <h1>Show Data--</h1>
        <NavLink to={"/create"}>Create</NavLink>
        <table border={1}>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Action</th>
            </tr>
            {
              myapidata.map((items)=>{
                return(
                  <tr>
                    <td>{items.name}</td>
                    <td>{items.email}</td>
                    <td>{items.number}</td>
                    <td>
                      <NavLink to={`/update/${items._id}`}>Edite</NavLink>
                      <button onClick={()=>handelDelete(items._id)}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
        </table>
    </div>
  )
}

export default User
