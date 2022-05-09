import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-schools-home',
  templateUrl: './schools-home.component.html',
  styleUrls: ['./schools-home.component.css']
})
export class SchoolsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    imports: [
      MaterialModule
    ]
  }
  search : String ="";

  schools =[
    {
      name:'Art school',
      principle:'Principle name',
      description:'school1',
      schoolID:'1234567',
    },
    {
      name:'K-12',
      principle:'Principle name',
      description:'school2',
      schoolID:'1234568',
    },
    {
      name:'STEM school',
      principle:'Principle name',
      description:'school2',
      schoolID:'1234569',
    }
  ];

}
