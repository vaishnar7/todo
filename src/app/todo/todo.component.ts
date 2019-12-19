import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title="Todo";
  todos=[
    "todo 1",
    "todo 2",
    "todo 3",
  ];
  newTodo=" ";

  constructor() { }

  ngOnInit() {
  }
  delete(todo){
    alert(todo);
    this.todos=this.todos.filter(function(t){
      return t!=todo;
    })
  }
  add(){
    alert("add")
    this.todos.push(this.newTodo);
    this.newTodo="";
  }
  onTextChange(event){
    this.newTodo=event.target.value;
  }

}
