// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        AuthModule,
        TypeOrmModule.forRoot({
            type: 'mariadb', // Define que o banco de dados é MariaDB
            host: 'localhost', // Host do MariaDB
            port: 3306, // Porta padrão do MariaDB
            username: 'root', // Substitua pelo seu usuário do MariaDB
            password: 'root123', // Substitua pela sua senha do MariaDB
            database: 'soli_secure', // Substitua pelo nome do banco de dados
            entities: [__dirname + '/**/*.entity.{js,ts}'], // Caminho para suas entidades
            synchronize: true, // Sincroniza automaticamente as entidades com o banco
          }),
        UsersModule
    ],
})
export class AppModule {}
