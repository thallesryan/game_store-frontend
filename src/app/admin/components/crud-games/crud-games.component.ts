import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Game } from 'src/app/models/Game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-crud-games',
  templateUrl: './crud-games.component.html',
  styleUrls: ['./crud-games.component.scss']
})
export class CrudGamesComponent implements OnInit {

  ELEMENT_DATA: Game[] = []

  displayedColumns: string[] = ['id', 'nome', 'preco'];
  dataSource = new MatTableDataSource<Game>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: GamesService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe({next: resposta => {
        console.log(resposta['content'])
        this.ELEMENT_DATA = resposta['content']
        this.dataSource = new MatTableDataSource<Game>(resposta['content']);
        this.dataSource.paginator = this.paginator;
       }}
     
    
    
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
