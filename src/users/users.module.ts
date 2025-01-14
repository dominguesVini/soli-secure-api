// src/users/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { User } from './users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])], // Importa a entidade User
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
