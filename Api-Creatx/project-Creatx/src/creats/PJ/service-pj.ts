import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PessoaJuridica } from '../../entities/pessoa-juridica.entity';
import { PessoaFisica } from '../../entities/pessoa-fisica.entity';
import { CreatePjDto } from '../../dto/create-pj-dto';

@Injectable()
export class UniversalService {
  constructor(
    @InjectRepository(PessoaJuridica)
    private readonly pjRepository: Repository<PessoaJuridica>,
    @InjectRepository(PessoaFisica)
    private readonly pfRepository: Repository<PessoaFisica>,
  ) {}

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

  async getPj(cnpj: string): Promise<PessoaJuridica> {
    const pj = await this.pjRepository.findOne({ where: { cnpj }, relations: ['representantes'] });
    if (!pj) {
      throw new NotFoundException('Pessoa Jurídica não encontrada');
    }
    return pj;
  }

  async getAllPjs(): Promise<PessoaJuridica[]> {
    return this.pjRepository.find({ relations: ['representantes'] });
  }

  async getAllUsers(): Promise<(PessoaFisica | PessoaJuridica)[]> {
    const pfs = await this.pfRepository.find();
    const pjs = await this.pjRepository.find();
    return [...pfs, ...pjs];
  }

  async updatePj(cnpj: string, updatePjDto: CreatePjDto): Promise<PessoaJuridica> {
    const pj = await this.pjRepository.findOne({ where: { cnpj } });
    if (!pj) {
      throw new NotFoundException('Pessoa Jurídica não encontrada');
    }
    Object.assign(pj, updatePjDto);
    return this.pjRepository.save(pj);
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