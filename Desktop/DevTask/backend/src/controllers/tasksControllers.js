let tasks = []

const getAllTasks = (req, res) => {
    res.json(tasks)
}

const createTask = (req, res) => {
    const title = req.body.title
    const description = req.body.description

    const id = tasks.length + 1
    const status = 'todo'

    const newTask = { id, title, description, status }
    tasks.push(newTask)
    res.status(201).json(newTask)
}

const updateTask = (req, res) => {
    const id = parseInt(req.params.id)
    const task = tasks.find(task => task.id === id)
    if (!task) {
        return res.status(404).json({
            erro: "Tarefa não encontrada"
        })
    }

    const title = req.body.title
    const description = req.body.description    
    const status = req.body.status

    if (title != undefined) { task.title = title }
    if (description != undefined) { task.description = description }
    if (status != undefined) { task.status = status }

    res.json(task)
}





module.exports = {
    getAllTasks,
    createTask,
    updateTask
}