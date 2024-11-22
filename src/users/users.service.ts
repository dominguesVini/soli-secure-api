import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private usuarios = []; // Armazena a lista de usuarios em memória

  // Método para criar um novo usuario
  create(usuario) {
    this.usuarios.push(usuario);
    return usuario;
  }

  // Método para listar todos os usuarios
  findAll() {
    return this.usuarios;
  }

  // Método para encontrar um usuario específico pelo ID
  findOne(id: string) {
    const usuario = this.usuarios.find(usuario => usuario.id === id);
    if (!usuario) throw new NotFoundException('Usuário não encontrado');
    return usuario;
  }

  // Método para atualizar um usuario específico pelo ID
  update(id: string, updateData) {
    const usuario = this.findOne(id);
    Object.assign(usuario, updateData);
    return usuario;
  }

  // Método para remover um usuario específico pelo ID
  remove(id: string) {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    if (index === -1) throw new NotFoundException('usuário não encontrado');
    this.usuarios.splice(index, 1);
  }
}