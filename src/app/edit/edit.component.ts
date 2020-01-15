import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id=""
  todoForm;
  error=true;
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private todoService:TodoService) { 
    this.todoForm = formBuilder.group({
      name:new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      discription: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),


     // name: '',
      //discription: ''
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params.id;
      this.todoService.getById(this.id)
      .subscribe((data:any)=>{
        console.log(data)
        this.todoForm.setValue({
          name:data.name,
          discription:data.discription
        })
      })
    });
  }


  edit(){
    if(!this.todoForm.valid){
      if(this.todoForm.get('name').errors!=null){
        alert("You have an error in name")
      }
      if(this.todoForm.controls.discription.errors!=null){
        alert("you have an error in discription")
      }
      console.log(this.todoForm);
     // alert("You have an error")
      //this.commonService.showError();
      //
      return;
    }
    this.todoService.edit(this.id,this.todoForm.value.name,
      this.todoForm.value.description)
      .subscribe(data=>{
        this.todoForm.reset();
        this.router.navigate(['todo']);
      });
  }
}
