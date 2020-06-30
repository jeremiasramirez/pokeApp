import { Injectable } from "@angular/core"
import { ajax } from "rxjs/ajax"
import { Subject } from "rxjs"
import {map, pluck,filter ,delay,take,find, debounceTime} from "rxjs/operators"



@Injectable()

export class ServicePokemon{
    public obsData = new Subject()
    public url : string = "../assets/model/pokedex.json";


    constructor(){
      this.getAll()

 

    }

    // getPokemonHome(){
    // }
    //
    // searchPokemon(data:any=null){
    //
    // }

    getAll(){
          // timer(1500).subscribe(timing=>{this.progress.spinner=false })

         ajax.get(this.url).pipe(pluck('response')).subscribe((resp)=>{
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
          delay(1000)

        )
      // .subscribe(resp=>{this.allPoke.push(resp)}, (err)=>{return err}, ()=>{this.progress.spinner=false})

    }
    forId( ){

      return ajax.get(this.url).pipe(
        pluck('response')

      )

    }










}
