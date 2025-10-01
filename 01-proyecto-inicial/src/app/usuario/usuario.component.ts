import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Usuario } from './usuario.model';

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  // El {} es un objeto de configuración para el decorador 'Input'
  @Input({required:true}) usuario!: Usuario;
  @Input({required:true}) seleccionado!: boolean;

  @Output() selection = new EventEmitter();
  
  get rutaImagen(){
    return 'assets/usuarios/' + this.usuario.avatar;
  }

  handleUserSelect() {
    this.selection.emit(this.usuario.id);
  }
}