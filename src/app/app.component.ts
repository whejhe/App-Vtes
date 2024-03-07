import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { MenuPrincipalComponent } from "./components/menu-principal/menu-principal.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        NavBarComponent,
        HeaderComponent,
        FooterComponent,
        SideBarComponent,
        MenuPrincipalComponent
    ]
})
export class AppComponent {
  title = 'App-Vtes';
}
