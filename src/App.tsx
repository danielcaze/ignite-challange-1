import { ChangeEvent, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

import styles from './App.module.css'
import { TaskList } from "./components/TaskList";

interface TaskProps {
  id: string;
  value: string;
  isCompleted: boolean;
};

export function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<TaskProps[]>([]);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value)
  }

  useEffect(() => {
    function getLocalStorage() {
      const localSave = localStorage.getItem('todo:task')
      if (localSave) {
        setTaskList(JSON.parse(localSave))
      }
    }
    getLocalStorage()
  }, [])

  function setLocalStorageAndSaveTasks(task: TaskProps[]) {
    const arrayOrdered = sortArray(task)
    setTaskList(arrayOrdered);
    localStorage.setItem('todo:task', JSON.stringify(arrayOrdered))
  }

  function handleAddNewTask() {
    if (!task) return;
    const newTask = {
      id: crypto.randomUUID(),
      value: task,
      isCompleted: false
    }
    setLocalStorageAndSaveTasks([...taskList, newTask]);
    setTask('');
  }

  function handleRemoveTask(id: string) {
    const taskListWithoutDeletedOne = taskList.filter(task => task.id !== id)
    setLocalStorageAndSaveTasks(taskListWithoutDeletedOne);
  }

  function toggleTaskCompletion(id: string) {
    const taskWithCompletionUpdated = taskList.map(
      task => {
        if (task.id === id) {
          const { isCompleted, ...rest } = task
          return {
            ...rest,
            isCompleted: !isCompleted
          }
        }
        return task
      }
    )
    setLocalStorageAndSaveTasks(taskWithCompletionUpdated);
  }

  function sortArray(array: TaskProps[]) {
    array.sort((a, b) => {
      if (a.isCompleted < b.isCompleted) {
        return -1;
      } else if (b.isCompleted < a.isCompleted) {
        return 1;
      }
      return 0
    })
    return array
  }

  return (
    <>
      <Header task={task} handleAddNewTask={handleAddNewTask} handleNewTaskChange={handleNewTaskChange} />
      <main className={styles.main}>
        <div className={styles.content}>
          <TaskList tasks={taskList} handleRemoveTask={handleRemoveTask} toggleTaskCompletion={toggleTaskCompletion} />
        </div>
      </main>
    </>
  )
}