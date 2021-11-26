import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'env';
import { Draw } from 'src/app/models/draw';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.css']
})
export class HistoryCardComponent implements OnInit {

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute,) { }

  public arrayDraws: Array<Draw> = []
  public data: any;
  ngOnInit(): void {

    this.getHistory();
    this.activatedRoute.data.subscribe(data => {
      this.data = data;
    });
    console.log(this.data);
  }

  ngDidEnter() {

  }

  public getHistory() {
    setTimeout(() => {
      this.http.get<Draw[]>(env.envUrl + "/draws")
        .subscribe((resp: Draw[]) => {
          this.arrayDraws = resp;
          console.log(this.arrayDraws)
        });
    }, 500);
  }


}
