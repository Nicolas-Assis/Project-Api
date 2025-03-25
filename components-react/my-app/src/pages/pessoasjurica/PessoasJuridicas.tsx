import { useEffect, useState } from 'react';
import api from '../../service/api';
import styles from '../../style/PessoasJuridicas.module.css';
import Header from '../../components/PessoaJuridica/header/Header';
import FormPessoaJuridica from '../../components/PessoaJuridica/form/Form';
import TabelaPessoasJuridicas from '../../components/PessoaJuridica/table/Table';

export default function PessoasJuridicas() {
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

  const [pessoasJuridicas, setPessoasJuridicas] = useState<PessoaJuridica[]>([]);
  const [novaPessoaJuridica, setNovaPessoaJuridica] = useState<PessoaJuridica>({
    cnpj: '',
    razaoSocial: '',
    email: '',
    telefone: '',
    endereco: '',
    cidade: '',
    pais: '',
    codigoPostal: '',
  });

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    async function fetchPessoasJuridicas() {
      try {
        const response = await api.get('/pessoas-juridicas/pessoas-juridicas');
        setPessoasJuridicas(response.data);
      } catch (error) {
        console.error('Erro ao buscar pessoas jurídicas:', error);
      }
    }

    fetchPessoasJuridicas();
  }, []);

  async function criarPessoaJuridica(event: React.FormEvent) {
    event.preventDefault();
    try {
      const response = await api.post('/pessoas-juridicas/pessoas-juridicas', novaPessoaJuridica);
      setPessoasJuridicas([...pessoasJuridicas, response.data]);
      setNovaPessoaJuridica({
        cnpj: '',
        razaoSocial: '',
        email: '',
        telefone: '',
        endereco: '',
        cidade: '',
        pais: '',
        codigoPostal: '',
      });
      setMostrarFormulario(false);
    } catch (error) {
      console.error('Erro ao cadastrar pessoa jurídica:', error);
    }
  }

  return (
    <div className={styles.container}>
      <Header
        mostrarFormulario={mostrarFormulario}
        toggleFormulario={() => setMostrarFormulario(!mostrarFormulario)}
      />
      {mostrarFormulario && (
        <FormPessoaJuridica
          novaPessoaJuridica={novaPessoaJuridica}
          setNovaPessoaJuridica={setNovaPessoaJuridica}
          criarPessoaJuridica={criarPessoaJuridica}
        />
      )}
      <TabelaPessoasJuridicas pessoasJuridicas={pessoasJuridicas} />
    </div>
  );
}