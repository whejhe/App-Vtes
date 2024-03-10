
import { Routes } from "@angular/router";
import { BibliotecaComponent } from "./biblioteca/biblioteca.component";
import { CriptaComponent } from "./cripta/cripta.component";
import { InicioComponent } from "./inicio/inicio.component";
import { CustomComponent } from "./custom/custom.component";
import { PruebasComponent } from "./pruebas/pruebas.component";

export const MAIN_ROUTE:Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'cripta', component: CriptaComponent},
  {path: 'biblioteca', component: BibliotecaComponent},
  {path: 'custom', component: CustomComponent},
  {path: 'pruebas', component: PruebasComponent}
]
