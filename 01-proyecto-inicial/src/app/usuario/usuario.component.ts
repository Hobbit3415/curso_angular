import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  // El {} es un objeto de configuración para el decorador 'Input'
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) nombre!: string;

  @Output() selection = new EventEmitter();
  
  get rutaImagen(){
    return 'assets/usuarios/' + this.avatar;
  }

  handleUserSelect() {
    this.selection.emit(this.id);
  }
}