import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../usuarios/shared/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.authService.login(this.usuario, (res) => {
      if (res.autenticado) {
        this.router.navigateByUrl('/');
      }
    });
  }

}
