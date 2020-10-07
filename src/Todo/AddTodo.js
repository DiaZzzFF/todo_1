import React, {useState} from "react";
import PropTypes from "prop-types";


const useInputValue = (defaultValue = ``) => {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(``),
    value: () => value,
  };
};

const AddTodo = ({onCreate}) => {
  const myInput = useInputValue(``);

  const submitHandler = (event) => {
    event.preventDefault();

    if (myInput.value().trim()) {
      onCreate(myInput.value());
      myInput.clear();
    }
  };

  return (
    <form
      style={{marginBottom: `1rem`}}
      onSubmit={submitHandler}
    >
      <input {...myInput.bind} />

      <button type="submit">
        Add todo
      </button>
    </form>
  );
};

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};


export default AddTodo;
