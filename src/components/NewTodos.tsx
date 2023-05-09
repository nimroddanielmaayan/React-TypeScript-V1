import React from 'react';

const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;