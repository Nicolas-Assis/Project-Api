import { Entity, Column,  PrimaryColumn } from 'typeorm';

@Entity('pessoa_fisica')
export class PessoaFisica {
  @PrimaryColumn({ nullable: false, length: 14 })
  cpf: string;

  @Column({ nullable: false, length: 50})
  nome: string;

  @Column({ nullable: false, length: 100 })
  email: string;

  @Column({ nullable: false, length: 20 })
  telefone: string;

  @Column({ nullable: false, length: 100 })
  endereco: string;

  @Column({ nullable: false, length: 50 })
  cidade: string;

  @Column({ nullable: false, length: 50 })
  pais: string;

  @Column({ nullable: false, length: 10, })
  codigoPostal: string;
}