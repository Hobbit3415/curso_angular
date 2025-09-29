import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';

type Usuario = {
  id: string;
  nombre: string;
  avatar: string;
}

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  // El {} es un objeto de configuración para el decorador 'Input'
  @Input({required:true}) usuario!: Usuario;

  @Output() selection = new EventEmitter();
  
  get rutaImagen(){
    return 'assets/usuarios/' + this.usuario.avatar;
  }

  handleUserSelect() {
    this.selection.emit(this.usuario.id);
  }
}