import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-lancersubs',
  templateUrl: './lancersubs.component.html',
  styleUrls: ['./lancersubs.component.css']
})
export class LancersubsComponent implements OnInit {

  newContainer:any;

  constructor(_ApidataService:ApidataService) {

    _ApidataService.getEmail().subscribe( data => {

      this.newContainer =data.splice(0,4); //created a service that any component can see it and but its value in dataContainer

    });

   }
  ngOnInit() {
  }

}
