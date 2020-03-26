import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


const root = document.getElementById('root')

 function TodoItem(props) {
   return <li>{props.description}, {props.deadline}</li>
 }

class TodoList extends React.Component {
  render() {
   const todoList = this.props.todos;
   const result = todoList.map(element => {
    return <TodoItem description={element.description} deadline={element.deadline}></TodoItem>
  })
   return (
     <ul>{result}</ul>
   )
  }
}

const todosArray = [
  { description: 'Watch TV', deadline: new Date('2020-04-24').toDateString()},
  { description: 'Listen music', deadline: new Date('2020-02-20').toDateString()},
  { description: 'Wash clothes', deadline: new Date('2020-03-28').toDateString()}
]

function Header() {
  return (<header>
      <h3>Todo list</h3>
    </header>)
}
          
function Footer() {
  return (<footer>
      <h4>Have a nice day!</h4>
    </footer>)
}

ReactDOM.render(
  <div id="todo">
    <Header />
    <TodoList todos={todosArray} />
    <Footer />
  </div>,root
)

