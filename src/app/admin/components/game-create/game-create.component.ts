import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GamesService } from 'src/app/services/games.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})
export class GameCreateComponent implements OnInit {

  constructor(private formB: FormBuilder, private gameService: GamesService, private toast:ToastrService, private router:Router) { }

  ngOnInit(): void {
  }

 public gameForm:FormGroup = this.formB.group({
    name:['',[Validators.required]],
    price:['', [Validators.required]],
    quantity:['', []]
 });

  public save():void{
    let game = {name: this.gameForm.value.name, price:this.gameForm.value.price, quantity:this.gameForm.value.quantity}
   this.gameService.save(game).subscribe({
    next: (resp) => {
      this.router.navigate(['admin/games'])
      setTimeout(() => this.toast.success('Game salvo com sucesso', 'Game'), 1000)
    }
   })
  }
}
