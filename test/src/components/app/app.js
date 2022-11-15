import React from "react";
import AppHeader from "../app-header/app-header";
import NewPanel from "../NewTaskForm/new-task-form";
import TodoList from "../TaskList/task-list";
import Footer from "../Footer/footer";
import "./app.css";

const App = () => {
  const todoData = [
    { label: "Completed Task", id: 1 },
    { label: "Editing Task", id: 2 },
    { label: "Active Task", id: 3 },
  ];

  return (
    <div className="todo-app">
      <AppHeader />
      <div className="top-panel d-flex">
        <NewPanel />
      </div>
      <TodoList todos={todoData} />
      <Footer />
    </div>
  );
};

export default App;
