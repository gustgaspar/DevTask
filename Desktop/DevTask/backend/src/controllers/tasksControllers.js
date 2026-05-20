let tasks = []

const getAllTasks = (req, res) => {
    res.json(tasks)
}

const createTask = (req, res) => {
    const title = req.body.title
    const description = req.body.description

    let id = tasks.length + 1
    const status = 'todo'

    const newTask = {id, title, description, status}
    tasks.push(newTask)
    res.status(201).json(newTask)
}






module.exports = {
    getAllTasks,
    createTask
}