import React, { useState } from 'react'
import { Pencil, Trash2 } from 'lucide-react';

function Todo() {

    const [todos, setTodos] = useState({
        list: [],
        input: "",
        editID: "",
        editText: ""
    })

    const handleSumbit = (e) => {
        e.preventDefault();

        if (!todos.input.trim()) return;

        setTodos({
            ...todos,
            input: "",
            list: [
                ...todos.list,
                {
                    id: Date.now(),
                    todo: todos.input,
                    status: "incomplete"
                }
            ]
        })
    }

    const handleChange = (e) => {
        setTodos({
            ...todos,
            input: e.target.value,
        })
    };

    const handleDelete = (id) => {
        const todosAfterDelete = todos.list.filter((todo) => todo.id !== id)
        setTodos({
            ...todos,
            list: todosAfterDelete,
        });
    }

    const handleUpdate = (item) => {
        setTodos({
            ...todos,
            editID: item.id,
            editText: item.todo
        });
    }

    // ✅ SAVE FUNCTION (NEW)
    const handleEditSave = (e) => {
        e.preventDefault();

        if (!todos.editText.trim()) return;

        const updatedList = todos.list.map((item) =>
            item.id === todos.editID
                ? { ...item, todo: todos.editText, id: Date.now() }
                : item
        );

        setTodos({
            ...todos,
            list: updatedList,
            editID: "",
            editText: ""
        });
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex justify-center p-12'>

            <div className='backdrop-blur-lg bg-white/70 shadow-2xl rounded-2xl p-6 w-full max-w-sm border border-white/40'>

                <h1 className='text-3xl font-bold text-gray-800 text-center mb-6 tracking-wide'>
                    📝 My To-Do App
                </h1>

                <form onSubmit={handleSumbit} className='flex gap-2 mb-5'>

                    <input
                        className='flex-1 px-4 py-2 rounded-xl border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm'
                        type="text"
                        placeholder='Enter a task...'
                        value={todos.input}
                        onChange={handleChange}
                    />

                    <button className='bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200'>
                        Add
                    </button>

                </form>

                {/* Todo List */}
                <div className='space-y-3 max-h-80 overflow-y-auto'>
                    {todos.list.length === 0 ? (
                        <p className='text-center text-gray-400'>No task yet!!!</p>
                    ) : (
                        todos.list.map((item) => (
                            <React.Fragment key={item.id}>

                                {item.id === todos.editID ? (
                                    <form onSubmit={handleEditSave} className='flex items-center gap-2 mb-3'>

                                        <input
                                            className='flex-1 px-3 py-2 rounded-lg border border-indigo-300 focus:outline-none'
                                            type="text"
                                            value={todos.editText}
                                            onChange={(e) => {
                                                setTodos({
                                                    ...todos,
                                                    editText: e.target.value,
                                                });
                                            }}
                                        />

                                        <button className='bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition'>
                                            Save
                                        </button>

                                    </form>
                                ) : (
                                    <div
                                        className='bg-white/90 border flex justify-between items-center p-3 rounded-xl shadow-sm hover:shadow-md transition-all'
                                    >

                                        {/* LEFT */}
                                        <span className='text-gray-800 font-medium'>
                                            {item.todo}
                                        </span>
                                        <span className='text-xs text-gray-400'>
                                            🕒 {new Date(item.id).toLocaleTimeString()}
                                        </span>

                                        {/* RIGHT */}
                                        <div className='flex gap-3 items-center'>
                                            <div onClick={() => handleDelete(item.id)} className="cursor-pointer text-red-500 hover:scale-110">
                                                <Trash2 size={18} />
                                            </div>
                                            <div onClick={() => handleUpdate(item)} className="cursor-pointer text-indigo-500 hover:scale-110 ">
                                                <Pencil size={18} />
                                            </div>
                                        </div>

                                    </div>
                                )}

                            </React.Fragment>
                        ))
                    )}
                </div>

            </div>

        </div>
    )
}

export default Todo