import React, { useState } from 'react'

function Todo() {

    const [todos, setTodos] = useState({               // state me list + input store ho raha hai
        list: [],                                      // sab todos yahan rahenge
        input: ""                                      // input box ka value
    })

    const handleSumbit = (e) => {                      // form submit event
        e.preventDefault();

        if (!todos.input.trim()) return;               // empty input avoid

        setTodos({
            ...todos,                                  // purana data preserve
            input: "",                                 // input clear
            list: [
                ...todos.list,                         // purani list copy
                {
                    id: new Date().toLocaleTimeString(), // unique id
                    todo: todos.input,                // user ka task
                    status: "incomplete"              // default status
                }
            ]
        })
    }

    const handleChange = (e) => {                      // input change event
        setTodos({
            ...todos,
            input: e.target.value,                    // jo user type kare
        })
    };

    return (
        <div className='min-h-screen bg-gray-100 flex justify-center p-12'>

            <div className='bg-white shadow-lg rounded-xl p-6 w-full max-w-sm border'>

                <h1 className='text-2xl font-semibold text-gray-800 text-center mb-5'>
                    My To-Do App
                </h1>

                <form onSubmit={handleSumbit} className='flex gap-2 mb-4'>

                    <input
                        className='flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        type="text"
                        placeholder='Enter a task...'
                        value={todos.input}
                        onChange={handleChange}
                    />

                    <button className='bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition'>
                        Add
                    </button>

                </form>

                {/* Todo List */}
                <div className='space-y-2'>
                    {todos.list?.map((item) => {
                        return (
                            <div
                                key={item.id}   // React ko unique key chahiye hoti hai
                                className='bg-gray-50 border px-4 py-2 rounded-lg flex justify-between items-center hover:bg-gray-100 transition'
                            >
                                <span className='text-gray-700'>
                                    {item.todo}
                                </span>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}

export default Todo