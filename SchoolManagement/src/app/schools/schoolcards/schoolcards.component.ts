import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schoolcards',
  templateUrl: './schoolcards.component.html',
  styleUrls: ['./schoolcards.component.css']
})
export class SchoolcardsComponent implements OnInit {
  @Input() name = '';
  @Input() principle = '';
  @Input() description = '';
  @Input() schoolID = '';
  constructor() { }

  ngOnInit(): void {
  }

}
