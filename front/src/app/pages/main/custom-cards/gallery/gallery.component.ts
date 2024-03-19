import { Component } from '@angular/core';
import { SearchImputComponent } from "../../../../components/search-imput/search-imput.component";

@Component({
    selector: 'app-gallery',
    standalone: true,
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
    imports: [SearchImputComponent]
})
export class GalleryComponent {

}
