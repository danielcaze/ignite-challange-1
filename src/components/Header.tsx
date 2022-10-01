import { ChangeEvent } from 'react'
import Logo from '../assets/logo.svg'
import styles from './Header.module.css'
import { Input } from './Input'

interface HeaderProps {
    task: string
    handleAddNewTask: () => void
    handleNewTaskChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Header({ handleAddNewTask, handleNewTaskChange, task }: HeaderProps) {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="ToDo Logo" />
            <Input
                newTaskValue={task}
                handleAddNewTask={handleAddNewTask}
                handleNewTaskChange={handleNewTaskChange}
            />
        </header>
    )
}