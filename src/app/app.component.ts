import { Component, OnInit } from '@angular/core';
import { HerosComponent } from './heros/heros.component';

@Component({
  standalone: true,
  selector: 'app-app', //template name
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HerosComponent],
})
export class AppComponent implements OnInit {
  
  title = 'Tour of Heroes';

  constructor() {}

  ngOnInit() {}
}


