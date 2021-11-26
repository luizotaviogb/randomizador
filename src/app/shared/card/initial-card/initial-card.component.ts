import { Component, OnInit } from '@angular/core';
import { Draw } from 'src/app/models/draw';

@Component({
  selector: 'app-initial-card',
  templateUrl: './initial-card.component.html',
  styleUrls: ['./initial-card.component.css']
})
export class InitialCardComponent implements OnInit {

  public drawList = []
  public drawObject = new Draw("", []);
  public choosen = "";

  constructor() { }
  ngOnInit(): void {

  }

  draw() {
    this.getLines(this.drawList);
    let length = this.drawObject?.drawList?.length
    this.drawObject.choosen = this.drawObject?.drawList ? this.drawObject?.drawList[this.getRandomIndex(1, length)] : undefined
    console.log(this.drawObject)
  }

  getRandomIndex(min: number, max: any) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min) - 1;
  }

  clean() {
    this.drawList = []
    this.drawObject.drawList = []
    this.drawObject.choosen = ""
  }

  getLines(list: any) {
    let lines = list.split("\n");
    let nonEmptyLines = lines.filter((linha: string) => linha.trim())
    this.drawObject.drawList = nonEmptyLines;
  }

  save(draw: Draw) {

  }

}
