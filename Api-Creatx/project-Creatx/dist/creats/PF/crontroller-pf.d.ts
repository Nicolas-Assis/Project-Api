import { UniversalService } from './service-pf';
import { CreatePfDto } from '../../dto/create-pf-dto';
export declare class PessoasFisicaController {
    private readonly universalService;
    constructor(universalService: UniversalService);
    createPf(createPfDto: CreatePfDto): Promise<import("../../entities/pessoa-fisica.entity").PessoaFisica>;
    getPf(cpf: string): Promise<import("../../entities/pessoa-fisica.entity").PessoaFisica>;
    getAllPfs(): Promise<import("../../entities/pessoa-fisica.entity").PessoaFisica[]>;
    updatePf(cpf: string, updatePfDto: CreatePfDto): Promise<import("../../entities/pessoa-fisica.entity").PessoaFisica>;
    deletePf(cpf: string): Promise<{
        message: string;
    }>;
}
