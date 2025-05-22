import React from "react";

function Todo(props) {

  function deleteHendler () {
    console.log("Button clicked");
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHendler}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;








