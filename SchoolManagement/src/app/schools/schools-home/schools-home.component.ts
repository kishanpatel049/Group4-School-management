import { Component, OnInit, Inject} from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import {MatDialog} from '@angular/material/dialog';
import { CreateSchoolComponent } from '../create-school/create-school.component';

@Component({
  selector: 'app-schools-home',
  templateUrl: './schools-home.component.html',
  styleUrls: ['./schools-home.component.css']
})
export class SchoolsHomeComponent implements OnInit {
  search : String ="";
  name: string= "";
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

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateSchoolComponent, {
      width: '250px',
      data: {animal: this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.name = result;
    });
  }

  ngOnInit(): void {
    imports: [
      MaterialModule
    ]
  }


}
