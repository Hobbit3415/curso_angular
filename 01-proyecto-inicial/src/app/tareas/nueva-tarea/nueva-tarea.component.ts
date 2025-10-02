import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NuevaTareaInfo } from '../tarea/tarea.model';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './nueva-tarea.component.html',
  styleUrl: './nueva-tarea.component.css'
})
export class NuevaTareaComponent {

  @Output() closeDialog = new EventEmitter<void>();
  @Output() crearTarea = new EventEmitter<NuevaTareaInfo>();

  tituloNuevaTarea = "";
  resumenNuevaTarea = "";
  fechaNuevaTarea = "";

  handleCloseDialog(){
    this.closeDialog.emit();
  }

  handleOnSubmit(){
    this.crearTarea.emit({
      titulo: this.tituloNuevaTarea,
      resumen: this.resumenNuevaTarea,
      fecha: this.fechaNuevaTarea
    })
  }

}
