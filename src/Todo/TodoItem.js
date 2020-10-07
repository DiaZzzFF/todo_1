import React, {useContext} from "react";
import PropTypes from "prop-types";

import Context from "../context";


const TodoItem = ({todo, index, taskStatus}) => {
  const {removeTodo} = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push(`done`);
  }

  return (
    <li className="todo__item">
      <span className={classes.join(``)}>
        <input
          className="todo__input"
          type="checkbox"
          checked={todo.completed}
          onChange={() => taskStatus(todo.id)}
        />

        <strong>{index + 1}</strong>

        &nbsp;

        {todo.title}
      </span>
      
      <button
        className="todo__btn"
        type="button"
        onClick={removeTodo.bind(null, todo.id)}
      >
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  taskStatus: PropTypes.func.isRequired,
};


export default TodoItem;
