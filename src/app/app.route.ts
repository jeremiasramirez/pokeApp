import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core"

// componentes
import { HomeComponent} from "./home/home.component"
import { SearchComponent} from "./search/search.component"
import { AllComponent } from "./all/all.component"
import { OnlyPokeComponent } from './only-poke/only-poke.component'
import { InitAppComponent } from './init-app/init-app.component'


// Routes

const ROUTES : Routes = [
  {
    path: "home", component: HomeComponent
  }
  ,{
    path: "search", component: SearchComponent
  },
  {
    path: "search/:name", component: SearchComponent
  },
  {
    path: "search/poke/:id", component: OnlyPokeComponent
  },

  {
    path: "all", component: AllComponent
  },
  {
    path: "go", component: InitAppComponent
  },
  {
    path: "", component: InitAppComponent
  },
  {
    path: "**", component: InitAppComponent
  }
]


export const routing :ModuleWithProviders = RouterModule.forRoot(ROUTES);
