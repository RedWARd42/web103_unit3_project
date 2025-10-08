import express from 'express'
// import controllers for events and locations
import { getLocations, getLocationById } from '../controllers/locations.js';

const router = express.Router()

// define routes to get events and locations
router.get('/', getLocations)
router.get('/:id', getLocationById)


export default router