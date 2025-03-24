import { IsString, IsEmail, IsOptional, IsNotEmpty, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePjDto {
  @ApiProperty({ example: 'L&E TORNEADORA', description: 'Nome da empresa' })
  @IsString()
  @IsOptional()
  nomeFantasia?: string;

  @ApiProperty({ example: 'L E TORNEADORA LTDA', description: 'Razão Social da empresa' })
  @IsString()
  @IsNotEmpty()
  razaoSocial: string;

  @ApiProperty({ example: 'letorneadora@gmail.com', description: 'Email da empresa' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '12.345.678/0001-90', description: 'CNPJ da empresa no formato 00.000.000/0000-00' })
  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, { message: 'O CNPJ deve estar no formato 00.000.000/0000-00' })
  cnpj: string;

  @ApiProperty({ example: '1234567890', description: 'Número de telefone da empresa' })
  @IsString()
  @IsOptional()
  telefone?: string;

  @ApiProperty({ example: 'Rua das Flores', description: 'Endereço da empresa' })
  @IsString()
  @IsNotEmpty()
  endereco: string;

  @ApiProperty({ example: 'São Paulo', description: 'Cidade da empresa' })
  @IsString()
  @IsNotEmpty()
  cidade: string;

  @ApiProperty({ example: 'Brasil', description: 'País da empresa' })
  @IsString()
  @IsNotEmpty()
  pais: string;

  @ApiProperty({ example: '12345678', description: 'Código postal da empresa' })
  @IsString()
  @IsNotEmpty()
  codigoPostal: string;

  @ApiProperty({ example: ['123.456.789-00'], description: 'CPFs dos representantes' })
  @IsString({ each: true })
  @IsOptional()
  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: 'O CPF deve estar no formato 000.000.000-00', each: true })
  representantes?: string[];
}