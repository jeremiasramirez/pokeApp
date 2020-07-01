import { Component } from "@angular/core";
import { ServicePokemon } from "../services/service.pokemon"
import { timer  } from 'rxjs'
import { Router } from "@angular/router";
@Component({
  selector: "home-app",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [
    ServicePokemon
  ]
})

export class HomeComponent{
   spinner = {
     load: true,
     text:true
   }
   pokemonsArray  :any[]= []

  constructor(public poke:ServicePokemon, public router:Router){

    this.poke.getPoke(10).subscribe(resp=>{this.pokemonsArray.push(resp)}, (err)=>{return err}, ()=>{this.spinner.load=false})



  }
  public redirect(name:string){
    timer(500).subscribe(()=>this.poke.redirect(name))
  }

  public ok(id:number){

    timer(40).subscribe(x=>{
        if (id) this.router.navigate(["search/poke", id]);
    })

  }





}
