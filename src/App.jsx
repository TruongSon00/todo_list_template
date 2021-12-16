import React, { Component } from 'react';
import Todo from './components/Todo'
import FilterButton from './components/FilterButton.jsx';
import Form from './components/Form.jsx'
import { nanoid } from 'nanoid'



class App extends Component {

    state = {
        tasks: this.props.tasks.todoList
    }

    addTask = Name => {
        const newTask = { name: Name, completed: false, id: 'todo-' + nanoid() }
        this.setState({ tasks: [...this.state.tasks, newTask] })
    }

    render() {

        const tasksList = this.state.tasks.map(task => (<Todo
            key={task.id}
            name={task.name}
            completed={task.completed}
            id={task.id} />))
        const tasksLength = this.state.tasks.length
        const listHeading = () => {
            if (tasksLength === 1)
                return `${tasksLength} task remaining`
            else if (tasksLength === 0)
                return 'no task now, add task'
            else
                return `${tasksLength} tasks remaining`
        }
        return (
            <div className="todoapp stack-large">
                <Form addTask={this.addTask} />
                <div className="filters btn-group stack-exception">
                    <FilterButton />
                    <FilterButton />
                    <FilterButton />
                </div>
                <h2 id="list-heading">{listHeading()}</h2>
                <ul
                    // role="list"
                    className="todo-list stack-large stack-exception"
                    aria-labelledby="list-heading">

                    {tasksList}
                </ul>
            </div>
        );
    }
}

export default App;
