import { Component, OnInit } from '@angular/core';
import { Usuario } from './shared/usuario.model';
import { UsuarioService } from './shared/usuario.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  // private usuarios: Usuario[] = [];
  private dataSource: MatTableDataSource<Usuario>;
  private atributosTabela = ['nome', 'email', 'nomeUsuario', 'perfil', 'opcoes'];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().then(usuarios => {
      this.dataSource = new MatTableDataSource<Usuario>(usuarios);
    });
  }

}
