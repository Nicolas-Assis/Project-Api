import styles from '../../../style/PessoasJuridicas.module.css';

interface PessoaJuridica {
  cnpj: string;
  razaoSocial: string;
  email: string;
  telefone: string;
  endereco: string;
  cidade: string;
  pais: string;
  codigoPostal: string;
}

interface TabelaPessoasJuridicasProps {
  pessoasJuridicas: PessoaJuridica[];
}

export default function TabelaPessoasJuridicas({ pessoasJuridicas }: TabelaPessoasJuridicasProps) {
    return (
        <div className={styles["table-container"]}>
        <table className={styles.table}>
            <thead>
            <tr>
                <th>CNPJ</th>
                <th>Razão Social</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th>Cidade</th>
                <th>País</th>
                <th>Código Postal</th>
            </tr>
            </thead>
            <tbody>
            {pessoasJuridicas.map((pj: PessoaJuridica) => (
                <tr key={pj.cnpj}>
                <td>{pj.cnpj}</td>
                <td>{pj.razaoSocial}</td>
                <td>{pj.email}</td>
                <td>{pj.telefone}</td>
                <td>{pj.endereco}</td>
                <td>{pj.cidade}</td>
                <td>{pj.pais}</td>
                <td>{pj.codigoPostal}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    }