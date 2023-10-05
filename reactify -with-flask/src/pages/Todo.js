import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import TodoList from "../components/todo/TodoPage";
import "../../public/css/TodoList.css";
const Todo = () => {
    return (_jsx(_Fragment, { children: _jsx("section", { className: "todolist", children: _jsx(TodoList, {}) }) }));
};
export default Todo;
