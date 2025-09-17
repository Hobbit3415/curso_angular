import { Component } from '@angular/core';
import { USUARIOS_FALSOS } from '../usuarios-falsos';

const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length);

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  usuarioSeleccionado = USUARIOS_FALSOS[indiceAleatorio];

  /**
   * Obtiene la ruta de la imagen del avatar del usuario seleccionado.
   * @returns {string} Ruta de la imagen del avatar.
   */
  get rutaImagen() {
    return 'assets/usuarios/' + this.usuarioSeleccionado.avatar;
  }

  /**
   * Obtiene el nombre del usuario seleccionado.
   * @returns {string} Nombre del usuario.
   */
  get nombreUsuario() {
    return this.usuarioSeleccionado.nombre;
  }
  
  /**
   * Maneja la selección de un nuevo usuario aleatorio.
   * Actualiza la propiedad `usuarioSeleccionado` con un nuevo usuario.
   */
  handleUserSelect() {
    const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length);
    this.usuarioSeleccionado = USUARIOS_FALSOS[indiceAleatorio];
  }
}