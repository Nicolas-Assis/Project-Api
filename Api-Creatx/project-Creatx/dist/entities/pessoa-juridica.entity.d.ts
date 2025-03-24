import { PessoaFisica } from './pessoa-fisica.entity';
export declare class PessoaJuridica {
    cnpj: string;
    razaoSocial: string;
    email: string;
    telefone: string;
    endereco: string;
    cidade: string;
    pais: string;
    codigoPostal: string;
    representantes: PessoaFisica[];
}
