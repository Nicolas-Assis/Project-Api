"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pessoa_juridica_entity_1 = require("../../entities/pessoa-juridica.entity");
const pessoa_fisica_entity_1 = require("../../entities/pessoa-fisica.entity");
let UniversalService = class UniversalService {
    pjRepository;
    pfRepository;
    constructor(pjRepository, pfRepository) {
        this.pjRepository = pjRepository;
        this.pfRepository = pfRepository;
    }
    async createPj(createPjDto) {
        const representantes = await this.pfRepository.findByIds(createPjDto.representantes || []);
        const pj = this.pjRepository.create({ ...createPjDto, representantes });
        return this.pjRepository.save(pj);
    }
    async addRepresentante(cnpj, cpf) {
        const pj = await this.pjRepository.findOne({ where: { cnpj }, relations: ['representantes'] });
        if (!pj) {
            throw new common_1.NotFoundException('Pessoa Jurídica não encontrada');
        }
        const pf = await this.pfRepository.findOne({ where: { cpf } });
        if (!pf) {
            throw new common_1.NotFoundException('Pessoa Física não encontrada');
        }
        pj.representantes.push(pf);
        await this.pjRepository.save(pj);
        return { message: 'PF associado com sucesso!' };
    }
    async removeRepresentante(cnpj, cpf) {
        const pj = await this.pjRepository.findOne({ where: { cnpj }, relations: ['representantes'] });
        if (!pj) {
            throw new common_1.NotFoundException('Pessoa Jurídica não encontrada');
        }
        const pf = await this.pfRepository.findOne({ where: { cpf } });
        if (!pf) {
            throw new common_1.NotFoundException('Pessoa Física não encontrada');
        }
        pj.representantes = pj.representantes.filter(rep => rep.cpf !== cpf);
        await this.pjRepository.save(pj);
        return { message: 'Representante removido com sucesso!' };
    }
    async getPj(cnpj) {
        const pj = await this.pjRepository.findOne({ where: { cnpj }, relations: ['representantes'] });
        if (!pj) {
            throw new common_1.NotFoundException('Pessoa Jurídica não encontrada');
        }
        return pj;
    }
    async getAllPjs() {
        return this.pjRepository.find({ relations: ['representantes'] });
    }
    async getAllUsers() {
        const pfs = await this.pfRepository.find();
        const pjs = await this.pjRepository.find();
        return [...pfs, ...pjs];
    }
    async updatePj(cnpj, updatePjDto) {
        const pj = await this.pjRepository.findOne({ where: { cnpj } });
        if (!pj) {
            throw new common_1.NotFoundException('Pessoa Jurídica não encontrada');
        }
        Object.assign(pj, updatePjDto);
        return this.pjRepository.save(pj);
    }
    async deletePj(cnpj) {
        const pj = await this.pjRepository.findOne({ where: { cnpj } });
        if (!pj) {
            throw new common_1.NotFoundException('Pessoa Jurídica não encontrada');
        }
        await this.pjRepository.remove(pj);
        return { message: 'Pessoa Jurídica excluída com sucesso' };
    }
};
exports.UniversalService = UniversalService;
exports.UniversalService = UniversalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pessoa_juridica_entity_1.PessoaJuridica)),
    __param(1, (0, typeorm_1.InjectRepository)(pessoa_fisica_entity_1.PessoaFisica)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UniversalService);
//# sourceMappingURL=service-pj.js.map