import React, { useState } from 'react'

function Todo() {

    const [todos, setTodos] = useState({
        input: "",
        list: [],
        editId: "",
        editText: ""
    })

    const handleChange = (e) => {
        setTodos({
            ...todos,
            input: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todos.input !== "") {
            setTodos({
                ...todos,
                input: "",
                list: [
                    ...todos.list,
                    {
                        id: new Date().toLocaleTimeString(),
                        text: todos.input
                    }]
            })
        }
    }

    const handleDelete = (id) => {
        const newList = todos.list.filter((item) => item.id !== id)
        setTodos({
            ...todos,
            list: newList
        })
    }

    const handleEdit = (id, text) => {
        setTodos({
            ...todos,
            editId: id,
            editText: text
        })
    }

    const handleSave = () => {
        const updatedList = todos.list.map((item) => {
            if (item.id === todos.editId) {
                return {
                    ...item,
                    text: todos.editText
                }
            }
            return item
        })

        setTodos({
            ...todos,
            list: updatedList,
            editId: "",
            editText: ""
        })
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">

                <h1 className="text-2xl font-bold text-center mb-4">📝 Todo App</h1>

                <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
                    <input
                        type="text"
                        placeholder="Add your task..."
                        value={todos.input}
                        onChange={handleChange}
                        className="flex-1 border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        Add
                    </button>
                </form>

                <ul className="space-y-3">
                    {todos.list?.map((item) => {
                        return (
                            item.id === todos.editId ? (
                                <li key={item.id} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                                    <input
                                        type="text"
                                        value={todos.editText}
                                        onChange={(e) => {
                                            setTodos({ ...todos, editText: e.target.value })
                                        }}
                                        className="flex-1 border px-2 py-1 rounded"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleSave}
                                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                    >
                                        Save
                                    </button>
                                </li>
                            ) : (
                                <li key={item.id} className="flex justify-between items-center bg-gray-50 p-2 rounded-lg">
                                    <span className="font-medium">{item.text} time: {item.id}
                                        <div className="flex gap-3 text-lg">
                                        <span
                                            className="cursor-pointer text-red-500 hover:scale-110"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            🗑️
                                        </span>
                                        <span
                                            className="cursor-pointer text-blue-500 hover:scale-110"
                                            onClick={() => handleEdit(item.id, item.text)}
                                        >
                                            ✏️
                                        </span>
                                    </div>
                                    </span>
                                    
                                </li>
                            )
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}

export default Todo