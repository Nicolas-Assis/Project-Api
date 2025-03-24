import { Repository } from 'typeorm';
import { PessoaJuridica } from '../../entities/pessoa-juridica.entity';
import { PessoaFisica } from '../../entities/pessoa-fisica.entity';
import { CreatePjDto } from '../../dto/create-pj-dto';
export declare class UniversalService {
    private readonly pjRepository;
    private readonly pfRepository;
    constructor(pjRepository: Repository<PessoaJuridica>, pfRepository: Repository<PessoaFisica>);
    createPj(createPjDto: CreatePjDto): Promise<PessoaJuridica>;
    addRepresentante(cnpj: string, cpf: string): Promise<{
        message: string;
    }>;
    removeRepresentante(cnpj: string, cpf: string): Promise<{
        message: string;
    }>;
    getPj(cnpj: string): Promise<PessoaJuridica>;
    getAllPjs(): Promise<PessoaJuridica[]>;
    getAllUsers(): Promise<(PessoaFisica | PessoaJuridica)[]>;
    updatePj(cnpj: string, updatePjDto: CreatePjDto): Promise<PessoaJuridica>;
    deletePj(cnpj: string): Promise<{
        message: string;
    }>;
}
