import { Component, Input  } from '@angular/core';
import { ServicePokemon } from "../services/service.pokemon"
import { Router, ActivatedRoute } from "@angular/router"
import { timer } from "rxjs";
import { delay } from "rxjs/operators";
@Component({
  selector: 'app-only-poke',
  templateUrl: './only-poke.component.html',
  styleUrls: ['./only-poke.component.css'],
    providers: [ServicePokemon]
})
export class OnlyPokeComponent  {
  public poke : any[] = [];
  @Input("receivedPoke") received;

  
  constructor(
    public serv:ServicePokemon,
    public param:ActivatedRoute,
    public router:Router
  ){
    this.param.params.subscribe(param=>{

          this.serv.forId().pipe(
            delay(300)
          ).subscribe(resp=>{

            for(let i=0; i<resp.length; i++){

                if (resp[i].id == param.id) {
                  this.poke = resp[i]
                }

            }

            console.log(this.poke);

          })
    })


  }


}
