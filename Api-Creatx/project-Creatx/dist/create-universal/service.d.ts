import { Repository } from 'typeorm';
import { PessoaFisica } from '../entities/pessoa-fisica.entity';
import { PessoaJuridica } from '../entities/pessoa-juridica.entity';
import { CreatePfDto } from '../dto/create-pf-dto';
import { CreatePjDto } from '../dto/create-pj-dto';
export declare class UniversalService {
    private readonly pfRepository;
    private readonly pjRepository;
    constructor(pfRepository: Repository<PessoaFisica>, pjRepository: Repository<PessoaJuridica>);
    createPf(createPfDto: CreatePfDto): Promise<PessoaFisica>;
    createPj(createPjDto: CreatePjDto): Promise<PessoaJuridica>;
    addRepresentante(cnpj: string, cpf: string): Promise<{
        message: string;
    }>;
    removeRepresentante(cnpj: string, cpf: string): Promise<{
        message: string;
    }>;
    getPf(cpf: string): Promise<PessoaFisica>;
    getPj(cnpj: string): Promise<PessoaJuridica>;
    getAllPfs(): Promise<PessoaFisica[]>;
    getAllPjs(): Promise<PessoaJuridica[]>;
    getAllUsers(): Promise<(PessoaFisica | PessoaJuridica)[]>;
    updatePf(cpf: string, updatePfDto: CreatePfDto): Promise<PessoaFisica>;
    updatePj(cnpj: string, updatePjDto: CreatePjDto): Promise<PessoaJuridica>;
    deletePf(cpf: string): Promise<{
        message: string;
    }>;
    deletePj(cnpj: string): Promise<{
        message: string;
    }>;
}
