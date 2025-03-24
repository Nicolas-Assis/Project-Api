import { useEffect, useState } from "react";
import api from "../../service/api";
import styles from '../../style/pessoasFisicas.module.css';



export default function PessoasFisicas() {
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

  const [pessoasFisicas, setPessoasFisicas] = useState<PessoaFisica[]>([]);
  const [novaPessoaFisica, setNovaPessoaFisica] = useState<PessoaFisica>({
    cpf: "",
    nome: "",
    email: "",
    telefone: "",
    endereco: "",
    cidade: "",
    pais: "",
    codigoPostal: "",
  });

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    async function fetchPessoasFisicas() {
      try {
        console.log("Fazendo requisição para a API...");
        const response = await api.get("/pessoas-fisicas"); // Endpoint correto
        console.log("Resposta da API:", response.data);
        setPessoasFisicas(response.data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar pessoas físicas:", error);
      }
    }

    fetchPessoasFisicas();
  }, []);

  async function criarPessoaFisica(event: React.FormEvent) {
    event.preventDefault();
    try {
      console.log("Cadastrando nova Pessoas Fiscas...", novaPessoaFisica);
      const response = await api.post("/pessoas-fisicas", novaPessoaFisica);
      console.log("Resposta da API:", response.data);
      setPessoasFisicas([...pessoasFisicas, response.data]);
      setNovaPessoaFisica({
        cpf: "",
        nome: "",
        email: "",
        telefone: "",
        endereco: "",
        cidade: "",
        pais: "",
        codigoPostal: "",
      });
      setMostrarFormulario(false);
    } catch (error) {
      console.error("Erro ao cadastrar pessoa física:", error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Pessoas Físicas</h1>
            <button
                className={styles.button}
                onClick={() => setMostrarFormulario(!mostrarFormulario)}
                >
                
                {mostrarFormulario ? "Cancelar" : "Nova Pessoa Física"}
            </button>
      </div>

      {mostrarFormulario && (
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
                setNovaPessoaFisica({
                  ...novaPessoaFisica,
                  nome: e.target.value,
                })
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
                setNovaPessoaFisica({
                  ...novaPessoaFisica,
                  email: e.target.value,
                })
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
                setNovaPessoaFisica({
                  ...novaPessoaFisica,
                  telefone: e.target.value,
                })
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
                setNovaPessoaFisica({
                  ...novaPessoaFisica,
                  endereco: e.target.value,
                })
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
                setNovaPessoaFisica({
                  ...novaPessoaFisica,
                  cidade: e.target.value,
                })
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
                setNovaPessoaFisica({
                  ...novaPessoaFisica,
                  pais: e.target.value,
                })
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
      )}

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
    </div>
  );
}