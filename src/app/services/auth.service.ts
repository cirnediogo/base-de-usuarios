import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuarios/shared/usuario.service';
import { Usuario } from '../usuarios/shared/usuario.model';
import { PerfilUsuario } from '../usuarios/shared/perfil-usuario.model';

@Injectable()
export class AuthService {

  private usuarioSessao: Usuario;

  constructor(private usuarioService: UsuarioService) { }

  login(usuario: Usuario, callback) {
    this.usuarioService.login(usuario)
    .then(res => {
      this.usuarioSessao = res.usuario;
      callback({'autenticado': true});
    })
    .catch(err => {
      this.usuarioSessao = undefined;
      callback({'autenticado': false});
    });
  }

  logout() {
    this.usuarioSessao = undefined;
  }

  isAutenticado(): boolean {
    return (this.usuarioSessao !== undefined);
  }

  isAdmin(): boolean {
    return (this.usuarioSessao !== undefined && this.usuarioSessao.perfil === PerfilUsuario.ADMIN);
  }

  getNomeUsuario(): string {
    if (this.usuarioSessao !== undefined) {
      return this.usuarioSessao.nome;
    } else {
      return 'Usuário Padrão';
    }
  }

}
