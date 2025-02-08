// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        AuthModule,
        TypeOrmModule.forRoot({
            type: 'mysql', 
            host: 'b7ix4vgx2jjomlroalth-mysql.services.clever-cloud.com',
            port: 3306, 
            username: 'u3qoix4oyngyazs6',
            password: 'GCYSeMpxZGoPciils2Us',
            database: 'b7ix4vgx2jjomlroalth', 
            entities: [__dirname + '/**/*.entity.{js,ts}'], 
            synchronize: true,
          }),
        UsersModule
    ],
})
export class AppModule {}
