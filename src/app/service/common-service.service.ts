import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() {
   
   }

   showError(){
    alert("you have an error")
  }
}
