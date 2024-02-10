import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  regisrationObj: any = {
    "regId": 0,
    "name": "",
    "mobileNo": "",
    "emailId": "",
    "linkdinProfileUrl": "",
    "isWorking":  false,
    "SchoolName": "",
    "City": "",
    "gender": ""
  }
constructor(private http: HttpClient){}

onRegister(){

     this.http.post("http://localhost:3000/std", this.regisrationObj)
     .subscribe((res:any)=>{
       if(res.result){
         alert('sucessfully registered!!');
       }else{
         alert(res.message);
       }

     });
  }
}
