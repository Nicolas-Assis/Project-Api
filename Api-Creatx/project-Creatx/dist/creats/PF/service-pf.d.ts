import { Repository } from 'typeorm';
import { PessoaFisica } from '../../entities/pessoa-fisica.entity';
import { CreatePfDto } from '../../dto/create-pf-dto';
export declare class UniversalService {
    private readonly pfRepository;
    constructor(pfRepository: Repository<PessoaFisica>);
    createPf(createPfDto: CreatePfDto): Promise<PessoaFisica>;
    getPf(cpf: string): Promise<PessoaFisica>;
    getAllPfs(): Promise<PessoaFisica[]>;
    updatePf(cpf: string, updatePfDto: CreatePfDto): Promise<PessoaFisica>;
    deletePf(cpf: string): Promise<{
        message: string;
    }>;
}
