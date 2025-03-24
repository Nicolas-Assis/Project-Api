import { IsString, IsEmail, IsOptional, IsNotEmpty, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePfDto {
  @ApiProperty({ example: 'João Silva', description: 'Nome da pessoa física' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 'joao.silva@gmail.com', description: 'Email da pessoa física' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123.456.789-00', description: 'CPF da pessoa física no formato 000.000.000-00' })
  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: 'O CPF deve estar no formato 000.000.000-00' })
  cpf: string;

  @ApiProperty({ example: '1234567890', description: 'Número de telefone da pessoa física' })
  @IsString()
  @IsOptional()
  telefone?: string;

  @ApiProperty({ example: 'Rua das Flores', description: 'Endereço da pessoa física' })
  @IsString()
  @IsNotEmpty()
  endereco: string;

  @ApiProperty({ example: 'São Paulo', description: 'Cidade da pessoa física' })
  @IsString()
  @IsNotEmpty()
  cidade: string;

  @ApiProperty({ example: 'Brasil', description: 'País da pessoa física' })
  @IsString()
  @IsNotEmpty()
  pais: string;

  @ApiProperty({ example: '12345678', description: 'Código postal da pessoa física' })
  @IsString()
  @IsNotEmpty()
  codigoPostal: string;
}