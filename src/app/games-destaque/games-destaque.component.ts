import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';

@Component({
  selector: 'app-games-destaque',
  templateUrl: './games-destaque.component.html',
  styleUrls: ['./games-destaque.component.scss']
})
export class GamesDestaqueComponent implements OnInit {

  games:Array<Game> = [{name: "The Last Of Us"}, {name:"Horizon Zero Dawn"}]
  
  constructor() { }

  ngOnInit(): void {
  }

}
