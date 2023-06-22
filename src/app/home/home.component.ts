import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    
    }
    goToProducts(){
      console.log("Trying to Update In Database");
      setTimeout(()=>{
        console.log("Data is Updated");
        this.router.navigate(['products']);
      },2000);
    }
    
  }
  

