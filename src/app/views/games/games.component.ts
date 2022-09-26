import { Game } from './../../models/Game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games:Game[] = [{name:'Tlou'}, {name:'Horizon'}]
  
  constructor() { }

  ngOnInit(): void {
  }

}
