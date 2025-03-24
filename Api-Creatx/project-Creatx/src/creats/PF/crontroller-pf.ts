import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UniversalService } from './service-pf'; // Corrigido para importar o serviço correto
import { CreatePfDto } from '../../dto/create-pf-dto';

@ApiTags('Pessoas Físicas')
@Controller('pessoas-fisicas')
export class PessoasFisicaController {
  constructor(private readonly universalService: UniversalService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova Pessoa Física (PF)' })
  @ApiResponse({ status: 201, description: 'Pessoa Física criada com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  async createPf(@Body() createPfDto: CreatePfDto) {
    return this.universalService.createPf(createPfDto); 
  }

  @Get(':cpf')
  @ApiOperation({ summary: 'Obter uma Pessoa Física (PF)' })
  @ApiResponse({ status: 200, description: 'Pessoa Física encontrada com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  async getPf(@Param('cpf') cpf: string) {
    return this.universalService.getPf(cpf);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as Pessoas Físicas' })
  @ApiResponse({ status: 200, description: 'Lista de Pessoas Físicas' })
  async getAllPfs() {
    return this.universalService.getAllPfs();
  }

  @Put(':cpf')
  @ApiOperation({ summary: 'Atualizar uma Pessoa Física' })
  @ApiResponse({ status: 200, description: 'Pessoa Física atualizada com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  async updatePf(@Param('cpf') cpf: string, @Body() updatePfDto: CreatePfDto) {
    return this.universalService.updatePf(cpf, updatePfDto);
  }

  @Delete(':cpf')
  @ApiOperation({ summary: 'Excluir uma Pessoa Física' })
  @ApiResponse({ status: 200, description: 'Pessoa Física excluída com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  async deletePf(@Param('cpf') cpf: string) {
    return this.universalService.deletePf(cpf);
  }
}