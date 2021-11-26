import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-card',
  templateUrl: './final-card.component.html',
  styleUrls: ['./final-card.component.css']
})
export class FinalCardComponent implements OnInit {

  @Input('choosen') choosen?: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
