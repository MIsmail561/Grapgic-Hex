import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {

  registerForm: FormGroup;
  disabledBtn:Boolean;


  constructor(private http: HttpClient , private router:Router) { }


  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      country: new FormControl(),
      pass: new FormControl(),
      confPass: new FormControl()
    });
  }


  onSubmit(): void
  {

    this.disabledBtn=true;
    //this link is changable to the api link connected to database
    this.http.post('https://reqres.in/api/users?page=2',this.registerForm.value).subscribe(responseData =>{

    this.router.navigateByUrl("/jobtype");

    this.disabledBtn=false;

    console.log(responseData);
    });

    
  }

}
