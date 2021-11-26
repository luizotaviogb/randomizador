import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Draw } from 'src/app/models/draw';
import { env } from 'env';
@Component({
  selector: 'app-initial-card',
  templateUrl: './initial-card.component.html',
  styleUrls: ['./initial-card.component.css']
})
export class InitialCardComponent implements OnInit {

  date = new Date();
  public drawList = []
  public day: string = this.date.toLocaleDateString();
  public time: string = this.date.toLocaleTimeString();
  public finalDate: string = this.day + " " + this.time;
  public drawObject = new Draw("", [], this.finalDate);
  public choosen = "";

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {

  }

  draw() {
    this.getLines(this.drawList);
    let length = this.drawObject?.drawList?.length
    this.drawObject.choosen = this.drawObject?.drawList ? this.drawObject?.drawList[this.getRandomIndex(1, length)] : undefined
    console.log(this.drawObject)
    this.save(this.drawObject);
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

  save(draw: Draw): Promise<any> {
    return this.http.post(env.envUrl + "/draws", draw).toPromise()
  }
}
