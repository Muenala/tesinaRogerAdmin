import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AudioComponent } from './audio/audio.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginGuard } from './auth/login.guard';
import { ImagenComponent } from './imagen/imagen.component';

import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate:[LoginGuard] },
  { path: 'principal', component: PrincipalComponent, canActivate:[AuthGuard] },
  { path: 'usuario', component: UsuarioComponent, canActivate:[AuthGuard] },
  { path: 'audios', component: AudioComponent, canActivate:[AuthGuard] },
  { path: 'imagenes', component: ImagenComponent, canActivate:[AuthGuard] },
  { path: 'videos', component: VideoComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
