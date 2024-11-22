import { Controller, Get, Post, Put, Patch, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController
{
constructor(private readonly featureService: UsersService) {} // Injeção do serviço

  // Método POST para criar um novo usuario
  @Post()
  @HttpCode(201)
  create(@Body() createUser: any) { // Parâmetro recebido diretamente sem DTO
    return this.featureService.create(createUser);
  }

  // Método GET para listar todos os usuarios
  @Get()
  findAll() {
    return this.featureService.findAll();
  }

  // Método GET para buscar um usuario específico pelo ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.featureService.findOne(id);
  }

  // Método PUT para substituir um usuarrio específico pelo ID
  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: any) {
    return this.featureService.update(id, updateData);
  }

  // Método PATCH para atualizar parcialmente um usuario pelo ID
  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() partialUpdateData: any) {
    return this.featureService.update(id, partialUpdateData);
  }

  // Método DELETE para remover um usuario específico pelo ID
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.featureService.remove(id);
  }
}
