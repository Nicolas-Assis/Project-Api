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
exports.PessoasFisicaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const service_pf_1 = require("./service-pf");
const create_pf_dto_1 = require("../../dto/create-pf-dto");
let PessoasFisicaController = class PessoasFisicaController {
    universalService;
    constructor(universalService) {
        this.universalService = universalService;
    }
    async createPf(createPfDto) {
        return this.universalService.createPf(createPfDto);
    }
    async getPf(cpf) {
        return this.universalService.getPf(cpf);
    }
    async getAllPfs() {
        return this.universalService.getAllPfs();
    }
    async updatePf(cpf, updatePfDto) {
        return this.universalService.updatePf(cpf, updatePfDto);
    }
    async deletePf(cpf) {
        return this.universalService.deletePf(cpf);
    }
};
exports.PessoasFisicaController = PessoasFisicaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova Pessoa Física (PF)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pessoa Física criada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Requisição inválida' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pf_dto_1.CreatePfDto]),
    __metadata("design:returntype", Promise)
], PessoasFisicaController.prototype, "createPf", null);
__decorate([
    (0, common_1.Get)(':cpf'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter uma Pessoa Física (PF)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pessoa Física encontrada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Requisição inválida' }),
    __param(0, (0, common_1.Param)('cpf')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PessoasFisicaController.prototype, "getPf", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as Pessoas Físicas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de Pessoas Físicas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PessoasFisicaController.prototype, "getAllPfs", null);
__decorate([
    (0, common_1.Put)(':cpf'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar uma Pessoa Física' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pessoa Física atualizada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Requisição inválida' }),
    __param(0, (0, common_1.Param)('cpf')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_pf_dto_1.CreatePfDto]),
    __metadata("design:returntype", Promise)
], PessoasFisicaController.prototype, "updatePf", null);
__decorate([
    (0, common_1.Delete)(':cpf'),
    (0, swagger_1.ApiOperation)({ summary: 'Excluir uma Pessoa Física' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pessoa Física excluída com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Requisição inválida' }),
    __param(0, (0, common_1.Param)('cpf')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PessoasFisicaController.prototype, "deletePf", null);
exports.PessoasFisicaController = PessoasFisicaController = __decorate([
    (0, swagger_1.ApiTags)('Pessoas Físicas'),
    (0, common_1.Controller)('pessoas-fisicas'),
    __metadata("design:paramtypes", [service_pf_1.UniversalService])
], PessoasFisicaController);
//# sourceMappingURL=crontroller-pf.js.map