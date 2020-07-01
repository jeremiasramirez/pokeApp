import { Component,OnInit } from "@angular/core";
import { timer, of, Subject } from "rxjs"
import { take,delay } from "rxjs/operators"
import { ServicePokemon } from "../services/service.pokemon"
import { Router } from "@angular/router";
@Component({
  selector: "all-app",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.css","../home/home.component.css"],
  providers: [ServicePokemon]
})

export class AllComponent{

  public allPoke: any[] = []
  public items : number[] = [];
  public obsItem = of(10, 100, 150, 250, 350, 450, 650, 700, 809);

  public end:number=10;
  public cardMedium : number;
  public progress = {
    load: true,
    spinner: true,
    charging: true
  }

  public form ={
    value: 10
  }

  constructor(public poke:ServicePokemon, public router:Router){

    this.get()

  }

 public  get(){
    this.poke.getPoke(809).subscribe(resp => {if(resp)timer(500).subscribe(()=>{
    this.allPoke.push(resp)
  }
    )},
    (err) => {return err},
    () => {this.progress.spinner=false; })
    
    this.obsItem.pipe(delay(100)).subscribe( resp =>{ if(resp) this.items.push(resp)},
      (err) => {return err},
      () => {this.progress.charging=false})


  }
    ok(id:number){

      timer(200).subscribe(x=>{
          if (id) this.router.navigate(["search/poke", id]);
      })

    }

    public next(){
      
      this.end += 5;
    }
     

}
