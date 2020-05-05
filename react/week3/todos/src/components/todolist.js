import React from 'react';

class Form extends React.Component {
    render() {
      return (
        <div>
          <form onSubmit={this.props.handleSubmit}>
            <label>Todo description:
              <input value={this.props.description} onChange={this.props.handleDescriptionChange} name="description" required /><br />
            </label>
            <label>Deadline:
              <input type="date" value={this.props.deadline} onChange={this.props.handleDeadlineChange} name="deadline" required /><br />
            </label>
           <button type="submit">Add todo</button>
          </form>
        </div>
      )
    }
}

function FancyBorder(props) {
  return (
    <div className="FancyBorder">
      {props.children}
    </div>
  )
}

class Todo extends React.Component {
    state = {
      isEditing: false
    }
  
    toggleState = () => {
      this.setState({
        isEditing: !this.state.isEditing
      })
    }
  
    updateTodo = (event) => {
      event.preventDefault()
      this.props.editTodo(this.props.index, this.input.value);
      this.toggleState()
    }
  
    renderEditMode = () => {
      return (
        <li>
          <FancyBorder>
            <form onSubmit={this.updateTodo}>
              <input type='text' ref={(value) => { this.input = value }} defaultValue={this.props.todo.description} required /> | {this.props.todo.deadline}
              <input type="checkbox" checked={this.props.todo.checked} onChange={() => {this.props.handleCheckbox(this.props.index)}}/>
              <button onClick={() => {this.props.deleteTodo(this.props.index)}}>Delete</button>
              <button type='submit'>Update</button>
            </form>
          </FancyBorder>      
        </li>      
      )
    }
  
    renderTodoList = () => {
      return (
        <li style={{textDecoration: this.props.todo.checked ? 'line-through' : 'none'}}>
          <FancyBorder>
            <label>{this.props.todo.description} | {this.props.todo.deadline}</label>
            <input type="checkbox" checked={!!this.props.todo.checked} onChange={() => {this.props.handleCheckbox(this.props.index)}}/>
            <button onClick={() => {this.props.deleteTodo(this.props.index)}}>Delete</button>
            <button onClick={(event) => { 
              event.stopPropagation();
              this.toggleState()
              }}>Edit</button>
          </FancyBorder>       
        </li> 
      )
    }
    render() {
      return (
        <div>
          { this.state.isEditing ? this.renderEditMode() : this.renderTodoList() }
        </div>
      )
    }
  }
  
  function fetchTodo() {
    const URL = `https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw`
    return fetch(URL).then(response => response.json())
  }
  
  

class TodoList extends React.Component {
    state = {
        description: '',
        deadline: '',
        checked: false,
        todoList: []
      }
  
    componentDidMount() {
      this.fetchTodos()
    }
  
    fetchTodos = () => {
      fetchTodo().then(todo => {
        this.setState({ todoList: todo})
      })
    }
  
    handleSubmit = (event) => {   
      this.setState({
        todoList: [...this.state.todoList, {description: this.state.description, deadline: this.state.deadline, checked:false} ]
      })
      event.preventDefault()
    }
  
    handleDescriptionChange = (event) => {
      this.setState({ description: event.target.value })
    }
  
    handleDeadlineChange = (event) => {
      let currentDate = new Date()
      let selectedDate = new Date(event.target.value)
      if(selectedDate < currentDate) {
        alert('Your selected date is in the past')
      }
      this.setState({ deadline: event.target.value })
    }
  
    deleteTodo = (index) => {
      let todo = this.state.todoList.filter((element, elementIndex) => elementIndex !== index)
      this.setState({ todoList: todo })
    }
    
    editTodo = (index, event) => {
      let todo = this.state.todoList[index]
      todo['description'] = event
      this.setState({ todoList: this.state.todoList })
    }
     
    handleCheckbox = (index) => {
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
          <Form 
            handleSubmit={this.handleSubmit} 
            description={this.state.description} 
            deadline={this.state.deadline} 
            handleDescriptionChange={this.handleDescriptionChange} 
            handleDeadlineChange={this.handleDeadlineChange} />
  
          {this.state.todoList.length === 0 ? <p>No todos</p> :  <ul>{this.state.todoList.map((todo,index) => {
            return <Todo 
            todo={todo}
            key={index} 
            index={index} 
            deleteTodo={this.deleteTodo} 
            handleCheckbox={this.handleCheckbox} 
            editTodo={this.editTodo} />
          })}</ul>}    
        </div>
      )
    }
  }

export default TodoList;
