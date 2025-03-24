import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PessoaFisica } from '../entities/pessoa-fisica.entity';
import { PessoaJuridica } from '../entities/pessoa-juridica.entity';
import { CreatePfDto } from '../dto/create-pf-dto';
import { CreatePjDto } from '../dto/create-pj-dto';

@Injectable()
export class UniversalService {
  constructor(
    @InjectRepository(PessoaFisica)
    private readonly pfRepository: Repository<PessoaFisica>,
    @InjectRepository(PessoaJuridica)
    private readonly pjRepository: Repository<PessoaJuridica>,
  ) {}

  async createPf(createPfDto: CreatePfDto): Promise<PessoaFisica> {
    const pf = this.pfRepository.create(createPfDto);
    return this.pfRepository.save(pf);
  }

  async createPj(createPjDto: CreatePjDto): Promise<PessoaJuridica> {
    const representantes = await this.pfRepository.findByIds(createPjDto.representantes || []);
    const pj = this.pjRepository.create({ ...createPjDto, representantes });
    return this.pjRepository.save(pj);
  }
  async addRepresentante(cnpj: string, cpf: string): Promise<{ message: string }> {
    const pj = await this.pjRepository.findOne({ where: { cnpj }, relations: ['representantes'] });
    if (!pj) {
      throw new NotFoundException('Pessoa Jurídica não encontrada');
    }
    const pf = await this.pfRepository.findOne({ where: { cpf } });
    if (!pf) {
      throw new NotFoundException('Pessoa Física não encontrada');
    }
    pj.representantes.push(pf);
    await this.pjRepository.save(pj);
    return { message: 'PF associado com sucesso!' };
  }

  async removeRepresentante(cnpj: string, cpf: string): Promise<{ message: string }> {
    const pj = await this.pjRepository.findOne({ where: { cnpj }, relations: ['representantes'] });
    if (!pj) {
      throw new NotFoundException('Pessoa Jurídica não encontrada');
    }
    const pf = await this.pfRepository.findOne({ where: { cpf } });
    if (!pf) {
      throw new NotFoundException('Pessoa Física não encontrada');
    }
    pj.representantes = pj.representantes.filter(rep => rep.cpf !== cpf);
    await this.pjRepository.save(pj);
    return { message: 'Representante removido com sucesso!' };
  }

  async getPf(cpf: string): Promise<PessoaFisica> {
    const pf = await this.pfRepository.findOne({ where: { cpf } });
    if (!pf) {
      throw new NotFoundException('Pessoa Física não encontrada');
    }
    return pf;
  }

  async getPj(cnpj: string): Promise<PessoaJuridica> {
    const pj = await this.pjRepository.findOne({ where: { cnpj }, relations: ['representantes'] });
    if (!pj) {
      throw new NotFoundException('Pessoa Jurídica não encontrada');
    }
    return pj;
  }

  async getAllPfs(): Promise<PessoaFisica[]> {
    return this.pfRepository.find();
  }

  async getAllPjs(): Promise<PessoaJuridica[]> {
    return this.pjRepository.find({ relations: ['representantes'] });
  }

  async getAllUsers(): Promise<(PessoaFisica | PessoaJuridica)[]> {
    const pfs = await this.getAllPfs();
    const pjs = await this.getAllPjs();
    return [...pfs, ...pjs];
  }

  async updatePf(cpf: string, updatePfDto: CreatePfDto): Promise<PessoaFisica> {
    const pf = await this.pfRepository.findOne({ where: { cpf } });
    if (!pf) {
      throw new NotFoundException('Pessoa Física não encontrada');
    }
    Object.assign(pf, updatePfDto);
    return this.pfRepository.save(pf);
  }

  async updatePj(cnpj: string, updatePjDto: CreatePjDto): Promise<PessoaJuridica> {
    const pj = await this.pjRepository.findOne({ where: { cnpj } });
    if (!pj) {
      throw new NotFoundException('Pessoa Jurídica não encontrada');
    }
    Object.assign(pj, updatePjDto);
    return this.pjRepository.save(pj);
  }

  async deletePf(cpf: string): Promise<{ message: string }> {
    const pf = await this.pfRepository.findOne({ where: { cpf } });
    if (!pf) {
      throw new NotFoundException('Pessoa Física não encontrada');
    }
    await this.pfRepository.remove(pf);
    return { message: 'Pessoa Física excluída com sucesso' };
  }

  async deletePj(cnpj: string): Promise<{ message: string }> {
    const pj = await this.pjRepository.findOne({ where: { cnpj } });
    if (!pj) {
      throw new NotFoundException('Pessoa Jurídica não encontrada');
    }
    await this.pjRepository.remove(pj);
    return { message: 'Pessoa Jurídica excluída com sucesso' };
  }
}