import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'app';
  username = '';
  password = '';
  constructor(private toastr: ToastrService) {}
  iniciarSesion(){
   if (this.username == 'admin' && this.password == 'admin123'){
    this.toastr.success('Inicio de sesión exitoso', 'Exitoso');
    localStorage.setItem('token', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiYWRtaWJuIn0.jywUUMq49vCKBYTJGlk-06XQCUqjxFFNqySnwsADSmk');
    window.location.href = "principal";
  }else{
      this.toastr.error( 'Usuario o contraseña incorrectas!','Credenciales');
    }
  }
}
