import { useEffect, useState } from 'react';
import api from '../../service/api';
import styles from '../../style/PessoasJuridicas.module.css'; // Importação correta do CSS

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

  useEffect(() => {
    async function fetchPessoasJuridicas() {
      try {
        console.log('Fazendo requisição para a API...');
        const response = await api.get('/pessoas-juridicas/pessoas-juridicas'); // Endpoint correto
        console.log('Resposta da API:', response.data);
        setPessoasJuridicas(response.data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error('Erro ao buscar pessoas jurídicas:', error);
      }
    }

    fetchPessoasJuridicas();
  }, []);

  return (
    <div>
      <h1>Pessoas Jurídicas</h1>
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