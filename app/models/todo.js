

export default class ToDo {
  constructor(data) {
    this.description = data.description
    this._id = data._id
    this.completed = data.completed

  }
  get Template() {
    return `
     <div class="card bg-transparent">
  <div class="card-body">
    <h5 class="card-title" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')>To Do</h5>
    <h5 class="card-text"><input type="checkbox" ${this.completed ? "checked" : ""}name="toggle"onchange="app.controllers.todoController.toggleTodoStatus('${this._id}')"</br>${this.description}</h5>
    <button class="btn btn-transparent" onclick="app.controllers.todoController.removeTodo('${this._id}')">Remove To Do</button>
  </div>
</div>
    `
  }
}