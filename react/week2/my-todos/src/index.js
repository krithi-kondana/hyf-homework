import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const todos = [
  {
    "id": 1,
    "description": "Get out of bed",
    "checked": false
  },
  {
    "id": 2,
    "description": "Brush teeth",
    "checked": false
  },
  {
    "id": 3,
    "description": "Eat breakfast",
    "checked": false
  },
  {
   "id": 4,
   "description": "Learn React",
   "checked": false
  },
  {
    "id": 5,
    "description": "Do homework",
    "checked": false
  }
 ];
 
class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      todoList: []
    } 
    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  addTodo() {  
    let randomNumber = Math.floor(Math.random() * todos.length);
    this.setState({ todoList: this.state.todoList.concat(todos[randomNumber]) })   
  }

  deleteTodo(index) {
    let todo = this.state.todoList.filter((element, elementIndex) => elementIndex !== index)
    this.setState({ todoList: todo })
  }

  handleCheckbox(index) {
    this.setState({
      todoList: this.state.todoList.map((todo,todoIndex) => {
        if(todoIndex === index) {           
          return {
            ...todo,
            checked: !todo.checked
          }
        }
        return todo
      })
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.addTodo}>AddTodo</button>
        <Todo todoList={this.state.todoList} deleteTodo={this.deleteTodo} handleCheckbox={this.handleCheckbox}/>
      </div>
    )
  }
}


class Todo extends React.Component {
  render() {
    if (this.props.todoList.length === 0) return <p>No todos</p> 

    let result = this.props.todoList.map((item,index) => {       
      return (
        <div key={index}>
          <li>
            <label style={{textDecoration: item.checked ? 'line-through' : 'none'}}>{item.description}</label>
            <input type="checkbox" checked={item.checked} onChange={() => {this.props.handleCheckbox(index)}}/>
            <button onClick={() => {this.props.deleteTodo(index)}}>Delete</button>
          </li>
        </div>
      )      
    })
    return (
      <div>
        <ul>{result}</ul>    
      </div>
    )
  }
}
 
class Counter extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      value: 0
    }
    this.timer = this.timer.bind(this)
  }

  componentDidMount() {
    this.counter = setInterval(this.timer, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.counter);
  }

  timer() {
    this.setState({ value: this.state.value + 1 })
  }

  render() {
    return (
      <p>You have spent {this.state.value} seconds on this website.</p>
    )
  }
}

ReactDOM.render(
  <div>
    <Counter />
    <TodoList />
  </div>,
  document.getElementById('root')
);