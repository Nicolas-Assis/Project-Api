import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasJuridicasModule } from './creats/PJ/module-pj';
import { PessoasFisicasModule } from './creats/PF/module-pf';
import { PessoaFisica } from './entities/pessoa-fisica.entity';
import { PessoaJuridica } from './entities/pessoa-juridica.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'nicks',
      password: 'nicks',
      database: 'mydatabase',
      entities: [PessoaFisica, PessoaJuridica], 
      synchronize: true, 
    }),
    PessoasJuridicasModule, 
    PessoasFisicasModule, 
  ],
})
export class AppModule {}