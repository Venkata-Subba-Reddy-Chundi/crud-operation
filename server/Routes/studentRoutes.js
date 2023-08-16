import { Router } from "express";
import { deleteStudentController, getStudentController, getUpdateStudController, postStudentController, updateStudentController, } from "../Controllers/studentController.js";

const route=Router()

route.get('/students',getStudentController) 
route.post('/students',postStudentController)
route.delete('/students/:id',deleteStudentController)
route.put('/students/:id',updateStudentController).get('/students/:id',getUpdateStudController) 

export default route