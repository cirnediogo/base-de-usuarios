import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private nomeUsuario: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.nomeUsuario = this.authService.getNomeUsuario();
  }

  exibirMenu(): boolean  {
    return this.authService.isAutenticado();
  }

  exibirCriar(): boolean  {
    return this.authService.isAdmin();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
