// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/users.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres', // ou 'mysql', 'sqlite', etc.
            host: 'localhost',
            port: 5432, // ou a porta do seu banco de dados
            username: 'seu_usuario',
            password: 'sua_senha',
            database: 'seu_banco',
            entities: [__dirname + '/**/*.entity{.ts,.js}'], // Para encontrar todas as entidades
            synchronize: true, // Somente para desenvolvimento
        }),
        UserModule,
    ],
})
export class AppModule {}
