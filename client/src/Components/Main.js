import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Students } from './Students'
import { AddStudents } from './AddStudents'
import { EditStudents } from './EditStudents'

export const Main = () => {
  return (
    <div>        
        <Routes>
            <Route path='/' element={<Students/>}/>
            <Route path='/list' element={<Students/>}/>
            <Route path='/addstud' element={<AddStudents/>}/>
            <Route path='/editstud/:id' element={<EditStudents/>}/>
        </Routes>
    </div>
  )
}
