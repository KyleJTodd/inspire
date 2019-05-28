

export default class ToDo {
  constructor(data) {
    this.description = data.data
    this._id = data._id
    this.completed = data.completed

  }
  get Template() {
    return `
    

    
    `
  }
}