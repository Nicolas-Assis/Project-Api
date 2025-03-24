import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniversalController } from './controller-pj';
import { UniversalService } from './service-pj';
import { PessoaJuridica } from '../../entities/pessoa-juridica.entity';
import { PessoaFisica } from '../../entities/pessoa-fisica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PessoaJuridica, PessoaFisica])],
  controllers: [UniversalController],
  providers: [UniversalService],
})
export class PessoasJuridicasModule {}