import { IsString, IsNotEmpty, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEntityDto {
  @ApiProperty({ example: '711.376.661-70', description: 'CPF no formato 000.000.000-00' })
  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: 'O CPF deve estar no formato 000.000.000-00' })
  cpf: string;

  @ApiProperty({ example: '12.345.678/0001-90', description: 'CNPJ no formato 00.000.000/0000-00' })
  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, { message: 'O CNPJ deve estar no formato 00.000.000/0000-00' })
  cnpj: string;
}