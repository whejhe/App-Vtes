import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        HttpClientModule,
        CommonModule,
        NavBarComponent,
        HeaderComponent,
        FooterComponent,
        SideBarComponent,
    ]
})
export class AppComponent {
  title = 'App-Vtes';
}
