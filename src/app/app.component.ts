import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-app', //template name
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // title: string = 'My App';

  username: string = 'Shahajan';
  mobile: string = '7057966948';
  age: number = 21;

  avatar: string =
    'https://images.freeimages.com/images/previews/3c0/jellyfish-1507290.jpg';

  constructor() {}

  ngOnInit() {}
}
