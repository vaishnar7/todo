import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonServiceService } from '../service/common-service.service';
import { Router } from '@angular/router';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  title="Todo";
  todos:any=[];
  //todos=[
  // {name: "todo 1",discription:"discription1"},
  // {name: "todo 2",discription:"discription2"},
  // {name: "todo 1",discription:"discription3"}
//];
  newTodo=" ";
  todoForm;
  

  constructor(private fb: FormBuilder,
    private commonService:CommonServiceService,private router: Router,private todoService:TodoService){
    this.todoForm = fb.group({
     name: '',
     discription:'' 
    });
   }

  ngOnInit() {
    this.todoService.get()
    .subscribe (data=>{
      //console.log("data",data);
      //alert("Done");
      this.todos=data;
    });
  
  }

  
  delete(todo){
    alert(todo);
    this.todos=this.todos.filter(function(t){
      return t!=todo;
    })
  }
  add(){
    if(!this.todoForm.valid){
      //alert("please enter all inputs");
  
      this.commonService.showError();
      return;
    }
    alert("add")
    console.log(this.todoForm);
    this.todos.push({
     name: this.todoForm.value.name,
      discription: this.todoForm.value.discription });
    //this.newTodo="";
  }
  onTextChange(event){
    this.newTodo=event.target.value;
  }
  view(){
    this.router.navigate(['add']);
  }
edit(todo){
  this.router.navigate(['edit',todo.id]);
}
}
