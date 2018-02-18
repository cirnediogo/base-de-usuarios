import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';
import { FormControl } from '@angular/forms/src/model';
import { Validators } from '@angular/forms/src/validators';
import { PerfilUsuario } from '../shared/perfil-usuario.model';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  private usuario: Usuario;
  title = 'Cadastro de Usuário';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = new Usuario();
    this.route.params.subscribe(
      (params: any) => {
        if (params['id']) {
          this.usuarioService.findById(params['id'])
            .then(res => {
              this.usuario = res.usuario;
            })
            .catch(err => {
              console.error('editando usuario ', err);
            });
        }
      }
    );
  }

  onSubmit(form) {
    form.value.id = this.usuario.id;
    this.usuario = new Usuario(form.value);
    this.usuarioService.save(this.usuario);
    this.router.navigateByUrl('/usuarios');
  }

  isCampoInvalido(campo, parametro) {
    if (!parametro) {
      return campo.touched && campo.errors && campo.errors.required;
    }
    if (parametro === 'email') {
      return campo.touched && campo.errors && !campo.errors.required && campo.errors.email;
    }
  }

  isSenhaInvalida(campoSenha, campoSenhaConfirm) {
    const invalida = campoSenhaConfirm.touched && (campoSenhaConfirm.value !== campoSenha.value);
    return invalida;
  }

  getPerfisUsuario() {
    return [PerfilUsuario.USER, PerfilUsuario.ADMIN];
  }

}
