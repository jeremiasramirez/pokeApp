import { Injectable } from "@angular/core"
import { ajax } from "rxjs/ajax"
import { Subject } from "rxjs"
import { pluck ,delay,take} from "rxjs/operators"
import { Router } from '@angular/router'



@Injectable()

export class ServicePokemon{
    public obsData = new Subject()
    public url : string = "../assets/model/pokedex.json";


    constructor( public router:Router){
     
      this.getAll()

    }

    
    redirect(name:string){
      this.router.navigate([name])
    }
   
    getAll(){
      // timer(1500).subscribe(timing=>{this.progress.spinner=false })

     return ajax.get(this.url).pipe(pluck('response')).subscribe((resp)=>{
      if(resp){
        for(let i=0; i<resp.length; i++){
            this.obsData.next(resp[i])
        }
      }

    })
}


    getPoke(size:number=10){
        return  this.obsData.pipe(
          take(size),
          delay(10)

        )
   
    }
    forId( ){

      return ajax.get(this.url).pipe(
        pluck('response')

      )

    }










}
