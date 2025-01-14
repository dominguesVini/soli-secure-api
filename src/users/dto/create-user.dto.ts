// src/users/create-user.dto.ts
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    nome: string;

    @IsEmail()
    email: string;
}
