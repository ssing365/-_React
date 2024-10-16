import React, { useEffect, useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");

    setTodos((currentArray) => [todo, ...currentArray]);
  };

  console.log(todos.map((item, index) => (
    <li key={index}>{item}</li>
  )))
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <h1>My To Dos {todos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
        {todos.map((item, index) => (
          <li key={index}>{item}</li> //JSX안에서 JS문법 쓸때 {}열어서 썼는데 그 안에 다시 JSX(html 태그)썼다가 다시 그 안에 {}로 JS문법 씀
        ))}
      </form>
    </div>
  );
};

export default App;
