import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class AllListComponent implements OnInit{

  list: any[] = [];
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.listRegistration();
  }

listRegistration(){
  this.http.get("http://localhost:3000/std").subscribe((res:any)=>{
    this.list = res.data;
  console.log(res.data);
  })
}

}
