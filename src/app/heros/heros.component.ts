import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { Heros } from '../mock-heros';

@Component({
  standalone: true,
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
  imports: [CommonModule, FormsModule],
})
export class HerosComponent implements OnInit {

  @Input() hero!:Hero;

  constructor() {}

  ngOnInit() {}
}
