import React, { useState } from 'react'

function TodoPractice() {

    const [todos, setTodos] = useState({
        list: [],
        input: ""
    });

    const handleChange = (e) => {
        setTodos({
            ...todos,
            input: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos({
            ...todos,
            input: "",
            list: [
                ...todos.list,
                {
                    id: new Date().toLocaleTimeString(),
                    task: todos.input,
                    status: "incomplete"
            }
            ]
        })
    }

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your task' onChange={handleChange} value={todos.input} />
        <button>Save</button>
      </form>
    </div>

    <div>
        {todos.list.map((item) => {
            return(
            <div key={item.id}>
                <h1>{item.task} Time: {item.id}</h1>
                </div>)
        })}
    </div>
    </>
  )
}

export default TodoPractice
