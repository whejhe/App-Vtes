
import { Routes } from "@angular/router";
import { BibliotecaComponent } from "./biblioteca/biblioteca.component";
import { CriptaComponent } from "./cripta/cripta.component";
import { InicioComponent } from "./inicio/inicio.component";
import { CustomComponent } from "./custom/custom.component";
import { EventsComponent } from "./events/events.component";
import { FichaDeckComponent } from "./ficha-deck/ficha-deck.component";

export const MAIN_ROUTE:Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'cripta', component: CriptaComponent},
  {path: 'biblioteca', component: BibliotecaComponent},
  {path: 'custom', component: CustomComponent},
  {path: 'events', component: EventsComponent},
  {path: 'ficha-deck', component: FichaDeckComponent}
]
