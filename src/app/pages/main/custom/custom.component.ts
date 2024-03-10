import { Component } from '@angular/core';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [ ],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss'
})
export class CustomComponent {

  carta = {
    // ... otras propiedades ...
    imagen: ''
  };

  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.carta.imagen = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

}
