import React from "react";
import TodoList from "../components/todo/TodoPage";
import "../../public/css/TodoList.css";

const Todo: React.FC = () => {
  return (
    <>
      <section className={"todolist"}>
        <TodoList />
      </section>
    </>
  );
};
export default Todo;
