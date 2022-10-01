import { Trash, PencilSimple, Check } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps {
    task: {
        isCompleted: boolean;
        value: string;
        id: string;
    }
    handleRemoveTask: (id: string) => void;
    toggleTaskCompletion: (io: string) => void;
}

export function Task({ task, handleRemoveTask, toggleTaskCompletion }: TaskProps) {
    return (
        <div
            className={
                `${styles.content} ${task.isCompleted && styles.task_completed}`
            }>
            <div className={styles.checkbox}>
                <input type="checkbox" name="completed" id={task.id} checked={task.isCompleted} onClick={() => toggleTaskCompletion(task.id)} />
                <label htmlFor={task.id}>
                    {task.isCompleted && <Check size={14} />}
                </label>
            </div>
            <p>{task.value}</p>
            <div className={styles.icons}>
                <Trash size={18} weight="thin" onClick={() => handleRemoveTask(task.id)} />
            </div>
        </div>
    )
}
