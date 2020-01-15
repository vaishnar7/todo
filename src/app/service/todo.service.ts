import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
const baseUrl = 'http://localhost:3001/';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  //hello(){
    //alert("hello")
  //}
 /* add(name,discription){
    this.http.post('http://localhost:3000/create',{
      name,
      discription
    }).subscribe (data=>{
        console.log("data",data);
        alert("Done");
      })
      
  }*/
  add(name,description){
    return this.http.post(`${baseUrl}create`,{
      name,
      description
    });
  }
  edit(id,name,description){
    return this.http.put(`${baseUrl}edit/${id}`,{
      name,
      description
    });
  }
  getById(id){
    return this.http.get(`${baseUrl}todo/${id}`)
  }
    /*get(){
    return this.http.get('http://localhost:3000')
     //.subscribe (data=>{
        //console.log("data",data);
        //alert("Done");
    //  })
    }*/
    get(){
      return this.http.get(baseUrl);
    }
      
}

