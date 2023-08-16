import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const EditStudents = () => {
  const {id}=useParams()
  const navigate=useNavigate()
  const [stud, setStuds] = useState({
    Name: '',
    Email: '',
    Password: '',
    Batch: ''
  })
  const api=async()=>{
    await axios.get(`http://localhost:4000/api/students/${id}`)
    .then((response)=>{
      console.log(response.data)
      setStuds(response.data)
    }).catch((err)=>{console.log(err)})
  }
  useEffect(()=>{
    api()
  },[])

  const changeHandler = (e) => {
    const obj={...stud,[e.target.name]:e.target.value}
    setStuds(obj)
  }

  const submitHandler =async (e) => {
    e.preventDefault()
    console.log(stud)
    await axios.put(`http://localhost:4000/api/students/${id}`,stud)
    navigate('/')
}
  return (
    <div>
      <div className='container-fluid'>
        <form>
          <div class="mb-3">
            <label for="Name" class="form-label">Name:</label>
            <input type="text" name='Name' value={stud.Name} class="form-control" id="Name"
              onChange={changeHandler} />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address:</label>
            <input type="email" name='Email' value={stud.Email} class="form-control"
              id="exampleInputEmail1" onChange={changeHandler} />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password:</label>
            <input type="password" name='Password' value={stud.Password} class="form-control"
              id="exampleInputPassword1" onChange={changeHandler} />
          </div>
          <div class="mb-3">
            <label for="Batch" class="form-label">Batch No.:</label>
            <input type="number" name='Batch' value={stud.Batch} class="form-control" id="Batch"
              onChange={changeHandler} />
          </div>
          <button type="submit" onClick={submitHandler} class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}
