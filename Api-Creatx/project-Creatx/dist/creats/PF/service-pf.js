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
const pessoa_fisica_entity_1 = require("../../entities/pessoa-fisica.entity");
let UniversalService = class UniversalService {
    pfRepository;
    constructor(pfRepository) {
        this.pfRepository = pfRepository;
    }
    async createPf(createPfDto) {
        const pf = this.pfRepository.create(createPfDto);
        return this.pfRepository.save(pf);
    }
    async getPf(cpf) {
        const pf = await this.pfRepository.findOne({ where: { cpf } });
        if (!pf) {
            throw new common_1.NotFoundException('Pessoa Física não encontrada');
        }
        return pf;
    }
    async getAllPfs() {
        return this.pfRepository.find();
    }
    async updatePf(cpf, updatePfDto) {
        const pf = await this.pfRepository.findOne({ where: { cpf } });
        if (!pf) {
            throw new common_1.NotFoundException('Pessoa Física não encontrada');
        }
        Object.assign(pf, updatePfDto);
        return this.pfRepository.save(pf);
    }
    async deletePf(cpf) {
        const pf = await this.pfRepository.findOne({ where: { cpf } });
        if (!pf) {
            throw new common_1.NotFoundException('Pessoa Física não encontrada');
        }
        await this.pfRepository.remove(pf);
        return { message: 'Pessoa Física excluída com sucesso' };
    }
};
exports.UniversalService = UniversalService;
exports.UniversalService = UniversalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pessoa_fisica_entity_1.PessoaFisica)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UniversalService);
//# sourceMappingURL=service-pf.js.map