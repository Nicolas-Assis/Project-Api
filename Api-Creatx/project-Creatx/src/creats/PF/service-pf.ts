import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PessoaFisica } from '../../entities/pessoa-fisica.entity';
import { CreatePfDto } from '../../dto/create-pf-dto';

@Injectable()
export class UniversalService {
  constructor(
    @InjectRepository(PessoaFisica)
    private readonly pfRepository: Repository<PessoaFisica>,
  ) {}

  async createPf(createPfDto: CreatePfDto): Promise<PessoaFisica> {
    const pf = this.pfRepository.create(createPfDto);
    return this.pfRepository.save(pf);
  }

  async getPf(cpf: string): Promise<PessoaFisica> {
    const pf = await this.pfRepository.findOne({ where: { cpf } });
    if (!pf) {
      throw new NotFoundException('Pessoa Física não encontrada');
    }
    return pf;
  }

  async getAllPfs(): Promise<PessoaFisica[]> {
    return this.pfRepository.find();
  }

  async updatePf(cpf: string, updatePfDto: CreatePfDto): Promise<PessoaFisica> {
    const pf = await this.pfRepository.findOne({ where: { cpf } });
    if (!pf) {
      throw new NotFoundException('Pessoa Física não encontrada');
    }
    Object.assign(pf, updatePfDto);
    return this.pfRepository.save(pf);
  }

  async deletePf(cpf: string): Promise<{ message: string }> {
    const pf = await this.pfRepository.findOne({ where: { cpf } });
    if (!pf) {
      throw new NotFoundException('Pessoa Física não encontrada');
    }
    await this.pfRepository.remove(pf);
    return { message: 'Pessoa Física excluída com sucesso' };
  }
}