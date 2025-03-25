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

interface Form {
  novaPessoaFisica: PessoaFisica;
  setNovaPessoaFisica: (pessoa: PessoaFisica) => void;
  criarPessoaFisica: (event: React.FormEvent) => void;
}

export default function FormPessoaFisica({
  novaPessoaFisica,
  setNovaPessoaFisica,
  criarPessoaFisica,
}: Form) {
  return (
    <form onSubmit={criarPessoaFisica} className={styles.form}>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          value={novaPessoaFisica.cpf}
          onChange={(e) =>
            setNovaPessoaFisica({ ...novaPessoaFisica, cpf: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={novaPessoaFisica.nome}
          onChange={(e) =>
            setNovaPessoaFisica({ ...novaPessoaFisica, nome: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={novaPessoaFisica.email}
          onChange={(e) =>
            setNovaPessoaFisica({ ...novaPessoaFisica, email: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="text"
          value={novaPessoaFisica.telefone}
          onChange={(e) =>
            setNovaPessoaFisica({ ...novaPessoaFisica, telefone: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label>Endereço:</label>
        <input
          type="text"
          value={novaPessoaFisica.endereco}
          onChange={(e) =>
            setNovaPessoaFisica({ ...novaPessoaFisica, endereco: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label>Cidade:</label>
        <input
          type="text"
          value={novaPessoaFisica.cidade}
          onChange={(e) =>
            setNovaPessoaFisica({ ...novaPessoaFisica, cidade: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label>País:</label>
        <input
          type="text"
          value={novaPessoaFisica.pais}
          onChange={(e) =>
            setNovaPessoaFisica({ ...novaPessoaFisica, pais: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label>Código Postal:</label>
        <input
          type="text"
          value={novaPessoaFisica.codigoPostal}
          onChange={(e) =>
            setNovaPessoaFisica({
              ...novaPessoaFisica,
              codigoPostal: e.target.value,
            })
          }
          required
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}