import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }
  validateRegister(user){
    if (user.name ==undefined ||user.username ==undefined ||user.email ==undefined ||user.password ==undefined ) {
      return false
    }else if(user.name =="" ||user.username =="" ||user.email =="" ||user.password ==""){
      return false
    }else{
      return true
    }
  }
  validateEmail(email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true
    }else{
      return false
    }
  }
}
