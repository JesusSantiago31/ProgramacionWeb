import TaskItem from "./TaskItem";

const TaskList = ({tasks}) =>{
    return(
        
            <ul className="mt-4 gap-2 text-cyan-500">{
                tasks.map(
                    (task, position)=>{
                        return(
                            <TaskItem key={position} task={task}/>
                        )
                    }
                )

            }</ul>
        
    )
}

export default TaskList;