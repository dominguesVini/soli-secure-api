// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        AuthModule,
        TypeOrmModule.forRoot({
            type: 'mysql', // Define que o banco de dados é MariaDB
            host: 'b7ix4vgx2jjomlroalth-mysql.services.clever-cloud.com', // Host do MariaDB
            port: 3306, // Porta padrão do MariaDB
            username: 'u3qoix4oyngyazs6', // Substitua pelo seu usuário do MariaDB
            password: 'GCYSeMpxZGoPciils2Us', // Substitua pela sua senha do MariaDB
            database: 'b7ix4vgx2jjomlroalth', // Substitua pelo nome do banco de dados
            entities: [__dirname + '/**/*.entity.{js,ts}'], // Caminho para suas entidades
            synchronize: true, // Sincroniza automaticamente as entidades com o banco
          }),
        UsersModule
    ],
})
export class AppModule {}
