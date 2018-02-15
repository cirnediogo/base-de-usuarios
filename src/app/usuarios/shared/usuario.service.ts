import { Injectable } from '@angular/core';

import { USUARIOS } from './in-memory-usuarios';
import { USUARIO_SESSAO } from './in-memory-usuarios';
import { Usuario } from './usuario.model';

@Injectable()
export class UsuarioService {

  // usuarioSessao: Usuario;

  constructor() { }

  getUsuarios() {
    return Promise.resolve(USUARIOS);
  }

  login(credenciaisUsuario: Usuario) {
    const usuario = USUARIOS.find(
      usuarioInMemory => this.verificarCredenciais(usuarioInMemory, credenciaisUsuario)
    );
    if (usuario) {
      const usuarioSessao = new Usuario();
      usuarioSessao.nomeUsuario = usuario.nomeUsuario;
      usuarioSessao.senha = null;
      usuarioSessao.perfil = usuario.perfil;
      return Promise.resolve({
        'mensagem': 'Usuário logado com sucesso',
        'usuario': usuarioSessao
      });
    }
    return Promise.reject({
      'mensagem': 'Usuário não encontrado'
    });
  }

  verificarCredenciais(usuario: Usuario, credenciais: Usuario): boolean {
    return (usuario.nomeUsuario === credenciais.nomeUsuario && usuario.senha === credenciais.senha);
  }

  findById(id) {
    const usuario = USUARIOS.find(usuarioInMemory => usuarioInMemory.id == id);
    if (usuario) {
      return Promise.resolve({
        'usuario': usuario
      });
    }
    return Promise.reject({
      'mensagem': 'Usuário não encontrado'
    });
  }

  save(usuario: Usuario) {
    if (usuario.id) {
      let usuarioCadastrado = USUARIOS.find(usuarioInMemory => usuarioInMemory.id == usuario.id);
      if (usuarioCadastrado) {
        usuarioCadastrado = usuario;
      } else {
        this.create(usuario);
      }
    } else {
      this.create(usuario);
    }
  }

  create(usuario: Usuario) {
    usuario.id = USUARIOS[USUARIOS.length - 1].id + 1;
    USUARIOS.push(usuario);
  }

}
