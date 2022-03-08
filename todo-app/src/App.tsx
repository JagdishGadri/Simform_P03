// Class Component

import React from "react";

import "./App.css";
import TodoContainer from "./components/TodoContainer";
import TodoInput from "./components/TodoInput";

class App extends React.Component {
  render() {
    return (
      <>
        <TodoContainer/>
        {console.log("App Component mounted")}
      </>
    );
  }
}

export default App;
