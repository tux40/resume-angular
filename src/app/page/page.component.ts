import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  page = {
    image: 'assets/zGoHAIz.png'
  }
  constructor() { }

  ngOnInit() {
  }

}
