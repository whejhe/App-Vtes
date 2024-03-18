
import { Routes } from "@angular/router";
import { BibliotecaComponent } from "./biblioteca/biblioteca.component";
import { CriptaComponent } from "./cripta/cripta.component";
import { InicioComponent } from "./inicio/inicio.component";
import { EventsComponent } from "./events/events.component";
import { FichaDeckComponent } from "./ficha-deck/ficha-deck.component";
import { ListaDecksComponent } from "./lista-decks/lista-decks.component";
import { ListarEventosComponent } from "./listar-eventos/listar-eventos.component";
import { PortadaCustomCardComponent } from "./portada-custom-card/portada-custom-card.component";
import { CustomComponent } from "./custom-cards/custom/custom.component";
import { GalleryComponent } from "./custom-cards/gallery/gallery.component";

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
