import styles from '../../../style/pessoasFisicas.module.css';

interface PessoaFisica {
  cpf: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  cidade: string;
  pais: string;
  codigoPostal: string;
}

interface TabelaPessoasFisicasProps {
  pessoasFisicas: PessoaFisica[];
}

export default function TabelaPessoasFisicas({ pessoasFisicas }: TabelaPessoasFisicasProps) {
  return (
    <div className={styles["table-container"]}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>CPF</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Cidade</th>
            <th>País</th>
            <th>Código Postal</th>
          </tr>
        </thead>
        <tbody>
          {pessoasFisicas.map((pf: PessoaFisica) => (
            <tr key={pf.cpf}>
              <td>{pf.cpf}</td>
              <td>{pf.nome}</td>
              <td>{pf.email}</td>
              <td>{pf.telefone}</td>
              <td>{pf.endereco}</td>
              <td>{pf.cidade}</td>
              <td>{pf.pais}</td>
              <td>{pf.codigoPostal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}