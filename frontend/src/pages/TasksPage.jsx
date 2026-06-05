import { useState, useEffect} from "react"
import TaskCard from "../components/TaskCard"


function TasksPage() {
    const [tasks, setTasks] = useState([])
    
    useEffect(() => {
        const fetchTasks = async () => {
            try {
            const response = await fetch(
            "http://localhost:3333/tasks"
            )
            const data = await response.json();
            setTasks(data)
            } catch (error) {console.error("Erro:", error)}
        }

        fetchTasks()
    }, [])

    return (
     <>
        <div>
        <h1>Títulos das tarefas:</h1>

        {tasks.map((Titulo) => (
            <TaskCard key={Titulo.id}
                task={Titulo}
            />
        ))}
        </div>
    
     </>
    )
}

export default TasksPage
