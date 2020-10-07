import React from "react";
import PropTypes from "prop-types";

import TodoItem from "../Todo/TodoItem";


const styles = {
  ul: {
    margin: 0,
    padding: 0,

    listStyle: `none`,
  }
}

const TodoList = (props) => {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            taskStatus={props.btnToggle}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  btnToggle: PropTypes.func.isRequired,
};


export default TodoList;
