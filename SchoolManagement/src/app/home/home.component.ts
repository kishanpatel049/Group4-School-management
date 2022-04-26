import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  links = [
    {
      route: "schools",
      rouerName: "schools"

    },
    {
      route: "classes",
      rouerName: "classes"

    },
    {
      route: "semesters",
      rouerName: "semesters"

    },
    {
      route: 'finance',
      rouerName: "finance"

    },
    {
      route: "register",
      rouerName: "register"

    },
    {
      route: "records",
      rouerName: "records"

    },
    {
      route: "roles",
      rouerName: "roles"

    }
  ];

  ngOnInit(): void {
  }

}
