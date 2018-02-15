import { Pipe, PipeTransform } from '@angular/core';
import { PerfilUsuario } from './perfil-usuario.model';

@Pipe({
  name: 'perfilUsuario'
})
export class PerfilUsuarioPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return PerfilUsuario[value];
  }

}
