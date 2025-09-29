import { Component, EventEmitter, Input, Output } from '@angular/core';
import { USUARIOS_FALSOS } from '../usuarios-falsos';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {

  @Input() nombreUsuario?: string;
}
