const express = require('express')
const router = express.Router()
const tasksControllers = require('../controllers/tasksControllers')

router.get('/', tasksControllers.getAllTasks)

router.post('/', tasksControllers.createTask)


module.exports = router