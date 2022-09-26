import { User } from './../../../models/User';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

 
  ELEMENT_DATA: User[] = []

  displayedColumns: string[] = ['id', 'name', 'email', 'password', 'roles','dt', 'actions'];
  dataSource = new MatTableDataSource<User>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: UsersService, private router:Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe({
      next: resposta => {
        this.ELEMENT_DATA = resposta
        this.dataSource = new MatTableDataSource<User>(resposta);
        this.dataSource.paginator = this.paginator;
       }}
    )
  }

  newGame():void{
      this.router.navigate(['newGame'])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
