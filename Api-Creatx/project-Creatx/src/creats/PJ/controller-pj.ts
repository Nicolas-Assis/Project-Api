import { Controller, Post, Get, Put, Delete, Param, BadRequestException, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { UniversalService } from '../PJ/service-pj';
import{ CreatePjDto } from '../../dto/create-pj-dto';

@ApiTags('Pessoas Jurídicas')
@Controller('pessoas-juridicas')
export class UniversalController {
  constructor(private readonly universalService: UniversalService) {}

  @Post('pessoas-juridicas')
  @ApiOperation({ summary: 'Criar uma nova Pessoa Jurídica (PJ)' })
  @ApiResponse({ status: 201, description: 'Pessoa Jurídica criada com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  async createPj(@Body() createPjDto: CreatePjDto) {
    return this.universalService.createPj(createPjDto);
  }

  @Post('pessoas-fisicas/:cpf/empresas/:cnpj')
  @ApiOperation({ summary: 'Adicionar representante para uma Pessoa Jurídica (PJ)' })
  @ApiParam({ name: 'cpf', description: 'CPF da pessoa física no formato 000.000.000-00' })
  @ApiParam({ name: 'cnpj', description: 'CNPJ da empresa no formato 00.000.000/0000-00' })
  @ApiResponse({ status: 201, description: 'Representante adicionado com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  async addRepresentante(@Param('cpf') cpf: string, @Param('cnpj') cnpj: string) {
    return this.universalService.addRepresentante(cnpj, cpf);
  }

  @Delete('pessoas-fisicas/:cpf/empresas/:cnpj')
  @ApiOperation({ summary: 'Remover representante de uma Pessoa Jurídica (PJ)' })
  @ApiParam({ name: 'cpf', description: 'CPF da pessoa física no formato 000.000.000-00' })
  @ApiParam({ name: 'cnpj', description: 'CNPJ da empresa no formato 00.000.000/0000-00' })
  @ApiResponse({ status: 200, description: 'Representante removido com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  async removeRepresentante(@Param('cpf') cpf: string, @Param('cnpj') cnpj: string) {
    return this.universalService.removeRepresentante(cnpj, cpf);
  }


  @Get('pessoas-juridicas/:cnpj')
  @ApiOperation({ summary: 'Obter uma Pessoa Jurídica (PJ)' })
  @ApiResponse({ status: 200, description: 'Pessoa Jurídica encontrada com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  async getPj(@Param('cnpj') cnpj: string) {
    return this.universalService.getPj(cnpj);
  }


  @Get('pessoas-juridicas')
  @ApiOperation({ summary: 'Listar todas as Pessoas Jurídicas' })
  @ApiResponse({ status: 200, description: 'Lista de Pessoas Jurídicas' })
  async getAllPjs() {
    return this.universalService.getAllPjs();
  }

  @Get('usuarios')
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista de usuários' })
  async getAllUsers() {
    return this.universalService.getAllUsers();
  }


  @Put('pessoas-juridicas/:cnpj')
  @ApiOperation({ summary: 'Atualizar uma Pessoa Jurídica' })
  @ApiResponse({ status: 200, description: 'Pessoa Jurídica atualizada com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  async updatePj(@Param('cnpj') cnpj: string, @Body() updatePjDto: CreatePjDto) {
    return this.universalService.updatePj(cnpj, updatePjDto);
  }



  @Delete('pessoas-juridicas/:cnpj')
  @ApiOperation({ summary: 'Excluir uma Pessoa Jurídica' })
  @ApiResponse({ status: 200, description: 'Pessoa Jurídica excluída com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  async deletePj(@Param('cnpj') cnpj: string) {
    return this.universalService.deletePj(cnpj);
  }
}