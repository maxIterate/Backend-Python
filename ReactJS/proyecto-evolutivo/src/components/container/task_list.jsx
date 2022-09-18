import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has been modified')
        return () => {
            console.log('TaskList component is going to unmount')
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('to do: cambiar el estado de una tarea')
    }

    return (
        <div>
            <div>
                Your Tasks:
            </div>
            {/* TO DO: Aplicar un for/map para renderizar una lista de tareas */}
            <TaskComponent task={defaultTask} ></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
