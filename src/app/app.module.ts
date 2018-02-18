import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { UsuarioService } from './usuarios/shared/usuario.service';
import { PerfilUsuarioPipe } from './usuarios/shared/perfil-usuario.pipe';
import { LoginRestrictionService } from './services/route-restrictions/login-restriction.service';
import { AdminRestrictionService } from './services/route-restrictions/admin-restriction.service';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './usuarios/cadastro-usuario/cadastro-usuario.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    CadastroUsuarioComponent,
    PerfilUsuarioPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatGridListModule
  ],
  providers: [
    UsuarioService,
    AuthService,
    LoginRestrictionService,
    AdminRestrictionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
