import { useEffect, useState } from "react";
import api from "../../service/api";
import styles from '../../style/pessoasFisicas.module.css';
import Header from "../../components/PessoasFisicas/header/Header";
import FormPessoaFisica from '../../components/PessoasFisicas/form/Form'
import TabelaPessoasFisicas from "../../components/PessoasFisicas/table/Table";

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
        const response = await api.get("/pessoas-fisicas");
        setPessoasFisicas(response.data);
      } catch (error) {
        console.error("Erro ao buscar pessoas físicas:", error);
      }
    }

    fetchPessoasFisicas();
  }, []);

  async function criarPessoaFisica(event: React.FormEvent) {
    event.preventDefault();
    try {
      const response = await api.post("/pessoas-fisicas", novaPessoaFisica);
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
      <Header
        mostrarFormulario={mostrarFormulario}
        toggleFormulario={() => setMostrarFormulario(!mostrarFormulario)}
      />
      {mostrarFormulario && (
        <FormPessoaFisica
          novaPessoaFisica={novaPessoaFisica}
          setNovaPessoaFisica={setNovaPessoaFisica}
          criarPessoaFisica={criarPessoaFisica}
        />
      )}
      <TabelaPessoasFisicas pessoasFisicas={pessoasFisicas} />
    </div>
  );
}