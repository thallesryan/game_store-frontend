import { Game } from './../../models/Game';
import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games:Game[] = []
  
  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.gameService.getAvailableGames().subscribe({
      next: resp => {
        this.games = resp
        console.log(resp)
      }
    })
  }

}
