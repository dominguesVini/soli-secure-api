// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/logib.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    console.log(loginDto)
    const user = await this.usersService.findByEmail(loginDto.email);
    
    console.log(user)

    if (!user) {
      throw new UnauthorizedException('Usuário ou senha inválidos!');
    }

    const isPasswordValid = loginDto.password === user.password
    if (!isPasswordValid) {
      throw new UnauthorizedException('Usuário ou senha inválidos!');
    }

    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }
}
