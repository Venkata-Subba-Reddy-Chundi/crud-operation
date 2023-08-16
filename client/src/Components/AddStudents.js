import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AddStudents = () => {

  const navigate=useNavigate()
  const [stud, setStud] = useState({
    Name: '',
    Email: '',
    Password: '',
    Batch: ''
  })
  const submitHandler =async (e) => {
      e.preventDefault()
      console.log(stud)
      await axios.post('http://localhost:4000/api/students',stud)
      .then((response)=>{
        console.log(response);
        navigate('/')
      }).catch((error)=>{
        console.log("axios error",error)
      })
  }
  const changeHandler = (e) => {
    const obj={...stud,[e.target.name]:e.target.value}
    setStud(obj)
  }
  return (
    <div>
      <div className='container-fluid'>
        <form onSubmit={submitHandler}>
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
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}
