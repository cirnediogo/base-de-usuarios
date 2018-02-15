import { PerfilUsuario } from './perfil-usuario.model';

export class Usuario {
    id: number;
    nome: string;
    email: string;
    nomeUsuario: string;
    senha: string;
    perfil: PerfilUsuario;

    constructor(object?: any) {
        if (object) {
            this.id = object.id;
            this.nome = object.nome;
            this.email = object.email;
            this.nomeUsuario = object.nomeUsuario;
            this.senha = object.senha;
            this.perfil = object.perfil;
        }
    }

}
