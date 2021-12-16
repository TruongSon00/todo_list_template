import React, { Component } from 'react'

class Todo extends Component {

    state = {
        isEdit: true,
    }

    edit = () => {
        this.setState({ isEdit: false })
    }

    cancelEdit = () => {
        this.setState({ isEdit: true })
    }

    saveEdit = e => {
        e.preventDefault()
        this.props.onEdit(this.props.id, document.getElementById(this.props.id).value)
        this.setState({ isEdit: true })
    }

    editTemplate = () => {
        return (
            <form onSubmit={this.saveEdit} className="stack-small">
                <div className="form-group">
                    <label className="todo-label" htmlFor={this.props.id}>
                        New name for {this.props.name}
                    </label>
                    <input id={this.props.id} className="todo-text" type="text" defaultValue={this.props.name} />
                </div>
                <div className="btn-group">
                    <button onClick={this.cancelEdit} type="button" className="btn todo-cancel">
                        Cancel
                    </button>
                    <button type="submit" className="btn btn__primary todo-edit">
                        Save
                    </button>
                </div>
            </form>)
    }

    viewTemplate = () => {
        return (
            <div className="stack-small">
                <div className="c-cb">
                    <input id={this.props.id} type="checkbox" onChange={() => this.props.updateCompleted(this.props.id)} defaultChecked={this.props.completed} />
                    <label className="todo-label" htmlFor={this.props.id}>
                        {this.props.index + '. ' + this.props.name}
                    </label>
                </div>
                <div className="btn-group">
                    <button onClick={this.edit} type="button" className="btn">
                        Edit
                    </button>
                    <button type="button" onClick={() => this.props.delTask(this.props.id)} className="btn btn__danger">
                        Delete
                    </button>
                </div>
            </div>)
    }

    render() {
        return (
            <li className="todo">  {this.state.isEdit ? this.viewTemplate() : this.editTemplate()}         </li>
        );
    }
}

export default Todo;