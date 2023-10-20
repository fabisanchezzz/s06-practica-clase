import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule,MatInputModule],
})
export class FormularioComponent {
formData = {
  nombre: '',
  comentario: '',
};

onSubmit() {
  console.log(this.formData);
  this.onReset();
}
onReset(){
  this.formData={
    nombre:'',
    comentario:'',
  }
}
}
