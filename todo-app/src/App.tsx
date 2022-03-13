// Class Component

import React from "react";

import "./App.css";
import TodoContainer from "./components/TodoContainer";

class App extends React.Component {
  render() {
    return (
      <>
        <TodoContainer/>
      </>
    );
  }
}

export default App;
