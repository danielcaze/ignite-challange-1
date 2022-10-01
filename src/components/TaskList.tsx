import { ClipboardText } from "phosphor-react";
import { Task } from "./Task";
import styles from './TaskList.module.css'

interface TaskListProps {
    handleRemoveTask: (id: string) => void;
    toggleTaskCompletion: (id: string) => void;
    tasks: {
        id: string
        value: string
        isCompleted: boolean;
    }[];
}

export function TaskList({ tasks, handleRemoveTask, toggleTaskCompletion }: TaskListProps) {
    const numberOfTasksCompleted = tasks.filter(task => task.isCompleted).length;
    return (
        <div className={styles.content}>
            <header className={styles.header}>
                <div>
                    <p className={styles.blue}>Tarefas criadas</p>
                    <span>{tasks.length}</span>
                </div>
                <div>
                    <p className={styles.purple}>Concluidas</p>
                    <span>
                        {
                            tasks.length > 0 ? `${numberOfTasksCompleted} de ${tasks.length}`
                                : tasks.length
                        }
                    </span>
                </div>
            </header>
            <div className={styles.background}>
                {
                    tasks.length === 0 ? (
                        <div className={styles.tasklist_empty}>
                            <ClipboardText size={60} weight="thin" />
                            <div>
                                <p>Voce ainda nao tem tarefas cadastradas</p>
                                <p>Crie tarefas e organize seus itens a fazer</p>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.tasklist}>
                            {tasks.map((task) => (
                                <Task key={task.id} task={task} handleRemoveTask={handleRemoveTask} toggleTaskCompletion={toggleTaskCompletion} />
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    )
}
