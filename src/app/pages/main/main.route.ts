
import { Routes } from "@angular/router";
import { BibliotecaComponent } from "./biblioteca/biblioteca.component";
import { CriptaComponent } from "./cripta/cripta.component";
import { InicioComponent } from "./inicio/inicio.component";
import { VisorComponent } from "./visor/visor.component";
import { CustomComponent } from "./custom/custom.component";

export const MAIN_ROUTE:Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'cripta', component: CriptaComponent},
  {path: 'visor', component: VisorComponent},
  {path: 'biblioteca', component: BibliotecaComponent},
  {path: 'custom', component: CustomComponent}
]
