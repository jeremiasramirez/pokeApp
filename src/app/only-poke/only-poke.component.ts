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
  public poke;
  @Input("receivedPoke") received;
  public progress ={
    spinner:true
  }
  
  constructor(
    public serv:ServicePokemon,
    public param:ActivatedRoute,
    public router:Router
  ){
    this.param.params.subscribe(param=>{

          this.serv.forId().pipe(
            delay(10)
          ).subscribe(resp=>{

            for(let i=0; i<resp.length; i++){

                if (resp[i].id == param.id) {
                  this.poke = resp[i]
                }

            }
 

          }, (err)=>{return err}, ()=>{this.progress.spinner=false})
    })


  }


}

 