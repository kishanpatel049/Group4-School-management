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

  schools: any =[
    {

    },
    {

    }
  ];

}
