// src/users/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // Nome da tabela no banco de dados
export class User {
    @PrimaryGeneratedColumn() // Campo auto-incremento como ID
    id: number;

    @Column({ type: 'varchar', length: 100 }) // Nome do usuário
    nome: string;

    @Column({ type: 'varchar', unique: true }) // Email do usuário
    email: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // Data de criação
    createdAt: Date;

    @Column({ type: 'timestamp', nullable: true }) // Data de atualização
    updatedAt: Date;

    // Você pode adicionar outros campos conforme necessário
}
