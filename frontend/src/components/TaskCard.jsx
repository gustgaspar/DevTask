

function TaskCard({ task }) {

    
    return(
    <>
        <div>
            <p>Título: {task.title}</p>
            <p>Descrição: {task.description}</p>
            <p>Status: {task.status}</p>
        </div>
    </>
    )
}


export default TaskCard