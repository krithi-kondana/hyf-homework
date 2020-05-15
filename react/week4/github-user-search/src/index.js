import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import userContext from "./usercontext";
import Userlist from "./userlist";

const ContextProvider = userContext.Provider;

function fetchGithubUser(query) {
  const URL = `https://api.github.com/search/users?q=${query}`;
  return fetch(URL).then(response => response.json())
}

class App extends React.Component {
  state = {
    searchTerm: '',
    users: [],
    isLoading: false
  }

  changeSearchTerm = (event) => {
    let searchedValue = event.target.value
    this.setState({ 
      searchTerm: searchedValue,
      isLoading: true
    })
    fetchGithubUser(searchedValue).then(data => {       
      this.setState({ 
        users: data.items,
        isLoading: false
      })
    }) 
  }

  render() {
    const contextValue = {
      searchTerm: this.state.searchTerm,
      isLoading: this.state.isLoading,
      users: this.state.users,
      changeSearchTerm: this.changeSearchTerm
    }
    return (
      <ContextProvider value={contextValue}>
        <div className='container'>
          <h2>Github user search</h2>
          <input value={this.state.searchTerm} onChange={this.changeSearchTerm} />
          <Userlist />
        </div>
      </ContextProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
