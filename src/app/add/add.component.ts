import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, RequiredValidator   } from '@angular/forms';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';
import { viewClassName } from '@angular/compiler';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
todoForm;
  constructor(private fb: FormBuilder,private todoService:TodoService,private router: Router
    ) { 
      this.todoForm=fb.group({
  
          name:new FormControl('',[
            Validators.required,
            Validators.minLength(3)
          ]),
          discription: new FormControl('',[
            Validators.required,
            Validators.minLength(5)
          ]),
    
        //name: '',
        //discription: ''
      });
    }

  ngOnInit() {
    
  }

  add(){
    //this.todoService.hello();
    //this.todoService.add();
    if(!this.todoForm.valid){
      alert("You have an error")
      //alert("please enter all inputs");
  
    
      return;
    }
    this.todoService.add(this.todoForm.value.name,
    this.todoForm.value.discription);
  
    //alert("add");
    //console.log(this.todoForm);
    this.todoForm.reset();

    this.router.navigate(['todo'])
  }

}
