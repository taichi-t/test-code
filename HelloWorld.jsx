import React from "react";
import ReactDOM from "react-dom";

/* コンポーネント */
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello! World.</h1>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));
