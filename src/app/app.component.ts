import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username = '';
  password = '';
  constructor(private toastr: ToastrService) {}
  iniciarSesion(){
   if (this.username == 'admin' && this.password == 'admin123'){
    this.toastr.success('Inicio de sesión exitoso', 'Exitoso');
    }else{
      this.toastr.error( 'Usuario o contraseña incorrectas!','Credenciales');
    }
  }
}
