import express from 'express'
import { allDoctorsGeneralFrontend, loginDoctor } from '../controllers/doctorController.js'

const doctorRouter = express.Router();

doctorRouter.get('/doctors-list', allDoctorsGeneralFrontend)
doctorRouter.post('/login', loginDoctor)

export default doctorRouter