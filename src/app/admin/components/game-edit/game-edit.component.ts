import { Game } from './../../../models/Game';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss']
})
export class GameEditComponent implements OnInit {
  
  constructor(private formB: FormBuilder, private gameService: GamesService, private toast:ToastrService, private router:Router, private activatedRoute:ActivatedRoute) { }

  id:number

  ngOnInit(): void {
     this.id = +this.activatedRoute.snapshot.paramMap.get('id')
    this.gameService.findById(this.id).subscribe({
      next: resp => {
       console.log(resp)
        this.setFormValues(resp)
      }
    })
  }

 public gameForm:FormGroup = this.formB.group({
    id:['', []],
    name:['',[Validators.required]],
    price:['', [Validators.required]],
    quantity:['', []]
 });

private setFormValues(values:any){
  this.gameForm.get('id').setValue(values.id)
  this.gameForm.get('name').setValue(values.name)
  this.gameForm.get('price').setValue(values.price)
  this.gameForm.get('quantity').setValue(values.quantity)
}
 update(){
    let game = this.gameForm.value
    this.gameService.update(game,this.id).subscribe({
      next: () => {
        this.router.navigate(['admin/games'])
        this.toast.success('Atualização feita com sucesso!', 'Atualização')
      }
    })
 }

 cancel(){
  this.router.navigate(['admin/games'])
 }
}
