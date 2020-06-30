import { Component ,ViewChild} from '@angular/core';
import { timer, fromEvent } from 'rxjs';
import { Router } from '@angular/router'


@Component({
  selector: 'app-init-app',
  templateUrl: './init-app.component.html',
  styleUrls: ['./init-app.component.css', '../home/home.component.css']
})
export class InitAppComponent  {

  public spinner = {
    load: true,
    text:true
  }

  constructor(public router:Router) {
    // this.router.navigate(["go"])
    timer(1000).subscribe(x=>this.spinner.load=false)
    timer(2400).subscribe(x=>this.spinner.text=false)
  }
  public goHome(){
      timer(0).subscribe(x=>this.spinner.load=true)
      timer(500).subscribe(z=>this.router.navigate(["home"]))
  }



}
