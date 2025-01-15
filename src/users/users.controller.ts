import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Patch,
    Delete,
    UseFilters,
    UseGuards,
    ConflictException
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';

@UseFilters(HttpExceptionFilter) // Aplicando o filtro ao controlador
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        const user = await this.usersService.findOne(+id);
        if (!user) {
            throw new Error(`Usuário com id:${id} Não encontrado`);
        }
        return user;
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const { email } = createUserDto;

        // Verifica se o usuário já existe
        const existingUser = await this.usersService.findByEmail(email);
        if (existingUser) {
            // Lança uma exceção de conflito se o email já estiver em uso
            throw new ConflictException(`O email ${email} já está em uso.`);
        }
        return this.usersService.create(createUserDto);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateUserDto: Partial<CreateUserDto>) {
        const updatedUser = await this.usersService.update(+id, updateUserDto);
        if (!updatedUser) {
            throw new Error(`Não foi possivel atualizar o usuário com id: ${id}`);
        }
        return updatedUser;
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.usersService.remove(+id);
    }
}
