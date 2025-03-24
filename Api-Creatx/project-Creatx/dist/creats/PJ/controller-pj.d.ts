import { UniversalService } from '../PJ/service-pj';
import { CreatePjDto } from '../../dto/create-pj-dto';
export declare class UniversalController {
    private readonly universalService;
    constructor(universalService: UniversalService);
    createPj(createPjDto: CreatePjDto): Promise<import("../../entities/pessoa-juridica.entity").PessoaJuridica>;
    addRepresentante(cpf: string, cnpj: string): Promise<{
        message: string;
    }>;
    removeRepresentante(cpf: string, cnpj: string): Promise<{
        message: string;
    }>;
    getPj(cnpj: string): Promise<import("../../entities/pessoa-juridica.entity").PessoaJuridica>;
    getAllPjs(): Promise<import("../../entities/pessoa-juridica.entity").PessoaJuridica[]>;
    getAllUsers(): Promise<(import("../../entities/pessoa-fisica.entity").PessoaFisica | import("../../entities/pessoa-juridica.entity").PessoaJuridica)[]>;
    updatePj(cnpj: string, updatePjDto: CreatePjDto): Promise<import("../../entities/pessoa-juridica.entity").PessoaJuridica>;
    deletePj(cnpj: string): Promise<{
        message: string;
    }>;
}
