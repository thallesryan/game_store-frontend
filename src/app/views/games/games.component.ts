import { Game } from './../../models/Game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games:Game[] = [{id:1,name:'Tlou', price:100+''}, {id:2,name:'Horizon', price:150+''}]
  
  constructor() { }

  ngOnInit(): void {
  }

}
