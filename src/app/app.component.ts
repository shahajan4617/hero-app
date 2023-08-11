import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HerosComponent } from './heros/heros.component';
import { Heros } from './mock-heros';

@Component({
  standalone: true,
  selector: 'app-app', //template name
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HerosComponent,CommonModule],
})
export class AppComponent implements OnInit {
  
  title = 'Tour of Heroes';

  heros = Heros;

  constructor() {}

  ngOnInit() {}
}


