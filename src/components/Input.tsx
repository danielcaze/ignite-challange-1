import { PlusCircle } from 'phosphor-react'
import { ChangeEvent } from 'react'
import styles from './Input.module.css'

interface InputProps {
    newTaskValue: string
    handleAddNewTask: () => void
    handleNewTaskChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Input({ handleAddNewTask, handleNewTaskChange, newTaskValue }: InputProps) {
    return (
        <div className={styles.container}>
            <input
                type="text"
                name="task"
                placeholder="Adicione uma nova tarefa"
                className={styles.input}
                onChange={handleNewTaskChange}
                value={newTaskValue}
            />
            <button
                type="button"
                className={styles.button}
                onClick={handleAddNewTask}
            >
                Criar
                <PlusCircle size={20} />
            </button>
        </div>
    )
}
