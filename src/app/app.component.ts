import { Component } from '@angular/core';
import {UserService} from './user.service';
//import {DataStruct} from './dataStruct'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web Services';
  uname;
  age;
  constructor(private userservice:UserService){}
  data:any;
getData(){
  this.userservice.getData().subscribe((data)=>this.data=data.msg);
  
}
postData(){
  this.userservice.postData(this.uname,this.age).subscribe();
  // console.log(this.uname);
  // console.log(this.age);
}


  // constructor(call){
  //   this.call=call;
  // }

  // invokeGet(){
  //   this.call.getAllEmp().subscribe((data:Emp)=>{
  //     this.x=data.msg;

  //   });
  // }
  // invokePost(){
  //   console.log(this.uname,this.age)
  //   this.call.postData(this.uname,this.age).subscribe((data:Emp)=>{
  //     this.x=data.msg;

  //   });
  // }
}
