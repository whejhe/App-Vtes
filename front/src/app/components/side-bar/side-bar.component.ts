import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  DisciplinesUrl = '/assets/img/icons-vtes/disciplinas/svg';

  imagenSeleccionada: string | null = null;

  disciplines: string[] = [
    'abombwe',
    'animalism',
    'auspex',
    'bloodsorcery',
    'celerity',
    'chimerstry',
    'daimoinon',
    'dementation',
    'dominate',
    'fortitude',
    'melpominee',
    'mytherceria',
    'necromancy',
    'obeah',
    'obfuscate',
    'obtenebration',
    'potence',
    'presence',
    'protean',
    'quietus',
    'sanguinus',
    'serpentis',
    'spiritus',
    'temporis',
    'thanatosis',
    'valeren',
    'vicissitude',
    'visceratika',
    'defense',
    'innocence',
    'judgment',
    'martyrdom',
    'redemption',
    'vision',
    'vengeance',
  ];


  cambiarImagen(imagen: string) {
    const imagenElement = document.getElementById(imagen) as HTMLImageElement;

    if (this.imagenSeleccionada === imagen) {
      // Verifica si ya se ha aplicado la versión superior
      if (imagenElement.src.includes('sup')) {
        // Si ya tiene la versión superior, la deselecciona
        imagenElement.src = `${this.DisciplinesUrl}/${imagen}.svg`;
        this.imagenSeleccionada = null;
      } else {
        // Si no tiene la versión superior, la aplica
        imagenElement.src = `${this.DisciplinesUrl}/${imagen}sup.svg`;
      }
    } else if (this.imagenSeleccionada === null || this.imagenSeleccionada !== imagen) {
      // Si es la primera vez que se hace clic en la imagen, la selecciona
      imagenElement.src = `${this.DisciplinesUrl}/${imagen}.svg`;
      this.imagenSeleccionada = imagen;
    } else {
      // Si ya se ha seleccionado la imagen y se hace clic nuevamente, aplica la versión superior
      imagenElement.src = `${this.DisciplinesUrl}/${imagen}sup.svg`;
    }
  }


}
