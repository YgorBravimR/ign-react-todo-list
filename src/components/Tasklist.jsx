import styles from "./Tasklist.module.css";
import { v4 as uuidv4 } from "uuid";

import createTaskIcon from "../assets/createTaskIcon.svg";
import todoListPaper from "../assets/todoListPaper.svg";
import { Trash } from "phosphor-react";
import { useState } from "react";

export function Tasklist() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const filteredTasksDone = tasks.filter((tasks) => tasks.isComplete == true);

  // useState retorna um array de duas posições, por isso usar a desestruturação e retornar na primeira posição a variavel do primeiro estado e na segunda posição receber uma função para alterar o valor da variável de comentários;

  function handleCreateNewTask() {
    if (!newTaskTitle) return;

    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      isComplete: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  }

  function handleRemoveTask(id) {
    setTasks(tasks.filter((tasks) => tasks.id !== id));
  }

  function handleToggleTaskCompletion(id) {
    const checkedTask = tasks.map((tasks) =>
      tasks.id === id
        ? {
            ...tasks,
            isComplete: !tasks.isComplete,
          }
        : tasks
    );
    setTasks(checkedTask);
  }

  return (
    <div className={styles.containerWrapper}>
      <header>
        <div className={styles.containerAddTask}>
          <input
            className={styles.inputGroup}
            type="text"
            placeholder="Adicionar uma nova tarefa"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button
            className={styles.createNewTaskButton}
            onClick={handleCreateNewTask}
            type="submit"
          >
            Criar <img src={createTaskIcon} alt="" />
          </button>
        </div>
      </header>
      <div className={styles.registeredTasksContainer}>
        <div className={styles.tasksStatusTitle}>
          <p className={styles.tasksStatusCreated}>
            Tarefas criadas <span>{tasks.length}</span>
          </p>
          <p className={styles.tasksStatusDone}>
            Concluídas
            <span>
              {filteredTasksDone.length} de {tasks.length}
            </span>
          </p>
        </div>

        <div
          className={
            tasks.length == 0 ? styles.tasksContentVoid : styles.contentDisabled
          }
        >
          <img src={todoListPaper} />
          <strong>Você ainda nao tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens à fazer</p>
        </div>

        <ul className={styles.listContainer}>
          {tasks.map((task) => (
            <li key={task.id}>
              <div className={styles.tasksToDo}>
                <div className={styles.checkboxContainer}>
                  <input
                    className={styles.checkboxBox}
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <p>{task.title}</p>
                </div>
                <button
                  type="submit"
                  title="Deletar comentário"
                  onClick={() => handleRemoveTask(task.id)}
                >
                  <Trash size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
