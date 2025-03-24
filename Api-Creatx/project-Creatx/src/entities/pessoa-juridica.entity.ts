import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
import { PessoaFisica } from './pessoa-fisica.entity';

@Entity('pessoa_juridica')
export class PessoaJuridica {
  @PrimaryColumn({ type: 'varchar', nullable: false, length: 18 })
  cnpj: string;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  razaoSocial: string;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  email: string;

  @Column({ type: 'varchar', nullable: false, length: 20 })
  telefone: string;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  endereco: string;

  @Column({ type: 'varchar', nullable: false, length: 50 })
  cidade: string;

  @Column({ type: 'varchar', nullable: false, length: 50 })
  pais: string;

  @Column({ type: 'varchar', nullable: false, length: 10 })
  codigoPostal: string;

  @ManyToMany(() => PessoaFisica)
  @JoinTable({
    name: 'pessoa_juridica_representantes', // Nome da tabela de junção correta
    joinColumn: {
      name: 'pessoa_juridica_cnpj', // Nome da coluna de junção para PessoaJuridica
      referencedColumnName: 'cnpj'
    },
    inverseJoinColumn: {
      name: 'pessoa_fisica_cpf', // Nome da coluna de junção para PessoaFisica
      referencedColumnName: 'cpf'
    }
  })
  representantes: PessoaFisica[];
}