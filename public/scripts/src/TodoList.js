var TodoList = React.createClass({
  handleTodoCheck: function(id) {
    this.props.onTodoCheck({id: id});
    return;
  },
  render: function() {
    var todoNodes = this.props.data.map(function(todo) {
      return (
        <Todo id={todo._id} onTodoCheck={this.handleTodoCheck}>
          {todo.text}
        </Todo>
      );
    }, this);
    return (
      <div className="todoList row">
        <div className="col-md-4 col-md-offset-4">
          {todoNodes}
        </div>
      </div>
    );
  }
});
