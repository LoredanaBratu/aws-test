import React from "react";

// export default function TodoItem(props) {
//   console.log(props);
//console.log(props.todo);
class TodoItem extends React.Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => {
            this.props.changeFunction(this.props.todo.id);
          }}
        />
        {this.props.todo.text}
      </div>
    );
  }
}
export default TodoItem;
