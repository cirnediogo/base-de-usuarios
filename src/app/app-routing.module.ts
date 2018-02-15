import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginRestrictionService } from './services/route-restrictions/login-restriction.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './usuarios/cadastro-usuario/cadastro-usuario.component';
import { AdminRestrictionService } from './services/route-restrictions/admin-restriction.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'usuarios' },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [LoginRestrictionService] },
  { path: 'usuarios/cadastro', component: CadastroUsuarioComponent, canActivate: [AdminRestrictionService] },
  { path: 'usuarios/cadastro/:id', component: CadastroUsuarioComponent, canActivate: [AdminRestrictionService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
