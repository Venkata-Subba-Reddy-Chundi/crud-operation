import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrashAlt} from '@fortawesome/free-regular-svg-icons'

export const Students = () => {
  const [students, setStud] = useState([])
  const getStudents = () => {
    axios.get('http://localhost:4000/api/students')
      .then((response) => {
        console.log(response)
        setStud(response.data.students)
      }).catch((err) => { console.log(err) })
  }
  console.log(students)
  useEffect(() => {
    getStudents()
  }, [])

  const deleteStud = async (id) => {
    await axios.delete(`http://localhost:4000/api/students/${id}`)
      .then((response) => {
        console.log(response)
        window.location.reload()
        // setStud(response.data.students)
      }).catch((err) => { console.log(err) })

  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Batch</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              students && students.map((student, i) => {
                return (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{student.Name}</td>
                    <td>{student.Email}</td>
                    <td>{student.Password}</td>
                    <td>{student.Batch}</td>
                    <td><Link to={`/editstud/${student._id}`}><FontAwesomeIcon icon={faPenToSquare} /></Link></td>
                    <td><button onClick={() => deleteStud(student._id)}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        </div>
      </div>
    </div>
  )
}
