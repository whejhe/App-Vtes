
import { Routes } from "@angular/router";
import { BibliotecaComponent } from "./biblioteca/biblioteca.component";
import { CriptaComponent } from "./cripta/cripta.component";
import { InicioComponent } from "./inicio/inicio.component";

import { PortadaCustomCardComponent } from "./portada-custom-card/portada-custom-card.component";
import { CustomComponent } from "./custom-cards/custom/custom.component";
import { GalleryComponent } from "./custom-cards/gallery/gallery.component";
import { EventsComponent } from "./eventos/events/events.component";
import { FichaDeckComponent } from "./deck/ficha-deck/ficha-deck.component";
import { ListaDecksComponent } from "./deck/lista-decks/lista-decks.component";
import { ListarEventosComponent } from "./eventos/listar-eventos/listar-eventos.component";

export const MAIN_ROUTE:Routes = [
  {path: '', component: InicioComponent},
  {path: 'cripta', component: CriptaComponent},
  {path: 'biblioteca', component: BibliotecaComponent},
  {path: 'portada-custom-card', component: PortadaCustomCardComponent},
  {path: 'custom', component: CustomComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'events', component: EventsComponent},
  {path: 'ficha-deck', component: FichaDeckComponent},
  {path: 'lista-decks', component: ListaDecksComponent},
  {path: 'listar-eventos', component: ListarEventosComponent},
]
