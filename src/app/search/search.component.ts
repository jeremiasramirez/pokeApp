import { Component } from "@angular/core";
import { timer, Subject } from "rxjs";
import { filter ,find,take,delay} from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router"

import { ServicePokemon } from "../services/service.pokemon"
@Component({
  selector: "search-app",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css","../home/home.component.css"],
  providers: [ServicePokemon]
})

export class SearchComponent{

  public returnSearch  :any = []
  public form ={
    value: '',
    alert: false
  }
  public obs = new Subject()
  public progress = {
    load: true,
    spinner: true
  }
  constructor(
    public serv:ServicePokemon,
    public param:ActivatedRoute,
    public router:Router
  ){

    // this.resetSearch()

    // timer(500).subscribe(timing=>{ this.progress.load=false })
    //




    // this.search('Bulbasaur')
  }


 
  search(data:any=''){


    // if (data!=''){
        this.router.navigate(["search", data])




    // }

  }


  ok(id:number){

    timer(400).subscribe(x=>{
        if (id) this.router.navigate(["search/poke", id]);
    })

  }

}
