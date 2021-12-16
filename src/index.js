import App from './App'
import './index.css'

import ReactDOM from 'react-dom';
const DATA = {
    todoList: [
        { name: 'eat', completed: true, id: 'todo-0' },
        { name: 'work', completed: false, id: 'todo-1' },
        { name: 'sleep', completed: false, id: 'todo-2' },
    ]
}
ReactDOM.render( < App tasks = { DATA }
        />, document.getElementById('root'))