import styles from '../../../style/pessoasFisicas.module.css';

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

    interface form {
        novaPessoaJuridica: PessoaJuridica;
        setNovaPessoaJuridica: (pessoa: PessoaJuridica) => void;
        criarPessoaJuridica: (event: React.FormEvent) => void;  

    }

    export default function FormPessoaJuridica({
        novaPessoaJuridica,
        setNovaPessoaJuridica,
        criarPessoaJuridica,
    }: form) {
        return (
            <form onSubmit={criarPessoaJuridica} className={styles.form}>
            <div>
                <label>CNPJ:</label>
                <input
                type="text"
                value={novaPessoaJuridica.cnpj}
                onChange={(e) =>
                    setNovaPessoaJuridica({ ...novaPessoaJuridica, cnpj: e.target.value })
                }
                required
                />
            </div>
            <div>
                <label>Razão Social:</label>
                <input
                type="text"
                value={novaPessoaJuridica.razaoSocial}
                onChange={(e) =>
                    setNovaPessoaJuridica({ ...novaPessoaJuridica, razaoSocial: e.target.value })
                }
                required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                type="email"
                value={novaPessoaJuridica.email}
                onChange={(e) =>
                    setNovaPessoaJuridica({ ...novaPessoaJuridica, email: e.target.value })
                }
                required
                />
            </div>
            <div>
                <label>Telefone:</label>
                <input
                type="text"
                value={novaPessoaJuridica.telefone}
                onChange={(e) =>
                    setNovaPessoaJuridica({ ...novaPessoaJuridica, telefone: e.target.value })
                }
                required
                />
            </div>
            <div>
                <label>Endereço:</label>
                <input
                type="text"
                value={novaPessoaJuridica.endereco}
                onChange={(e) =>
                    setNovaPessoaJuridica({ ...novaPessoaJuridica, endereco: e.target.value })
                }
                required
                />
            </div>
            <div>
                <label>Cidade:</label>
                <input
                type="text"
                value={novaPessoaJuridica.cidade}
                onChange={(e) =>
                    setNovaPessoaJuridica({ ...novaPessoaJuridica, cidade: e.target.value })
                }
                required
                />
            </div>
            <div>
                <label>País:</label>
                <input
                type="text"
                value={novaPessoaJuridica.pais
                }
                onChange={(e) =>
                    setNovaPessoaJuridica({ ...novaPessoaJuridica, pais: e.target.value })
                }
                required
                />
            </div>
            <div>
                <label>Código Postal:</label>
                <input
                type="text"
                value={novaPessoaJuridica.codigoPostal}
                onChange={(e) =>
                    setNovaPessoaJuridica({ ...novaPessoaJuridica, codigoPostal: e.target.value })
                }
                required
                />
            </div>
            <button type="submit">Cadastrar</button>
            </form> 
        );
    }