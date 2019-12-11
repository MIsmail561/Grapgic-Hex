import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-agentsubs',
  templateUrl: './agentsubs.component.html',
  styleUrls: ['./agentsubs.component.css']
})
export class AgentsubsComponent implements OnInit {

  dataContainer:any;

  constructor(_ApidataService:ApidataService) {

    _ApidataService.getData().subscribe( data => {

      this.dataContainer =data.splice(0,4); //created a service that any component can see it and but its value in dataContainer

    });

   }

  ngOnInit() {
  }

}
