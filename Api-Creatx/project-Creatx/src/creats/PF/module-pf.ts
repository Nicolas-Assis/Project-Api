import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasFisicaController } from './crontroller-pf';
import { UniversalService } from './service-pf';
import { PessoaFisica } from '../../entities/pessoa-fisica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PessoaFisica])],
  controllers: [PessoasFisicaController],
  providers: [UniversalService],
})
export class PessoasFisicasModule {}