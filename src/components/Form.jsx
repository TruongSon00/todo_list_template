import React, { useState } from 'react'

const Form = (props) => {
    const [name, setname] = useState('')

    const handleChange = e => {
        setname(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addTask(name)
        setname('')
    }



    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                value={name}
                onChange={handleChange}
                autoComplete="off" />

            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );

}

export default Form;