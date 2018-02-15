import { Usuario } from './usuario.model';
import { PerfilUsuario } from './perfil-usuario.model';

export let USUARIOS: Usuario[] = [
    {
        id: 1,
        nome: 'Administrador',
        email: 'admin@basedeusuarios.com',
        nomeUsuario: 'admin',
        senha: 'admin',
        perfil: PerfilUsuario.ADMIN
    },
    {
        id: 2,
        nome: 'Usuário Padrão',
        email: 'usuario@basedeusuarios.com',
        nomeUsuario: 'user',
        senha: 'user',
        perfil: PerfilUsuario.USER
    },
];

export let USUARIO_SESSAO: Usuario;
