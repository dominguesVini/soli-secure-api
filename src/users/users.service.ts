// src/users/user.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users: User[] = []; // Substitua isso por uma chamada ao banco de dados

  createUser(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: Date.now(),
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: null,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): User {
    const userIndex = this.users.findIndex(user => user.id === id);
    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
    return this.users[userIndex];
  }

  // Adicione outros métodos como findUser, deleteUser, etc.
}
