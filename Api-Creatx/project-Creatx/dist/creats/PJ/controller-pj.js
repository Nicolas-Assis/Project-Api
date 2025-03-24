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
exports.UniversalController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const service_pj_1 = require("../PJ/service-pj");
const create_pj_dto_1 = require("../../dto/create-pj-dto");
let UniversalController = class UniversalController {
    universalService;
    constructor(universalService) {
        this.universalService = universalService;
    }
    async createPj(createPjDto) {
        return this.universalService.createPj(createPjDto);
    }
    async addRepresentante(cpf, cnpj) {
        return this.universalService.addRepresentante(cnpj, cpf);
    }
    async removeRepresentante(cpf, cnpj) {
        return this.universalService.removeRepresentante(cnpj, cpf);
    }
    async getPj(cnpj) {
        return this.universalService.getPj(cnpj);
    }
    async getAllPjs() {
        return this.universalService.getAllPjs();
    }
    async getAllUsers() {
        return this.universalService.getAllUsers();
    }
    async updatePj(cnpj, updatePjDto) {
        return this.universalService.updatePj(cnpj, updatePjDto);
    }
    async deletePj(cnpj) {
        return this.universalService.deletePj(cnpj);
    }
};
exports.UniversalController = UniversalController;
__decorate([
    (0, common_1.Post)('pessoas-juridicas'),
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova Pessoa Jurídica (PJ)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pessoa Jurídica criada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Requisição inválida' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pj_dto_1.CreatePjDto]),
    __metadata("design:returntype", Promise)
], UniversalController.prototype, "createPj", null);
__decorate([
    (0, common_1.Post)('pessoas-fisicas/:cpf/empresas/:cnpj'),
    (0, swagger_1.ApiOperation)({ summary: 'Adicionar representante para uma Pessoa Jurídica (PJ)' }),
    (0, swagger_1.ApiParam)({ name: 'cpf', description: 'CPF da pessoa física no formato 000.000.000-00' }),
    (0, swagger_1.ApiParam)({ name: 'cnpj', description: 'CNPJ da empresa no formato 00.000.000/0000-00' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Representante adicionado com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Requisição inválida' }),
    __param(0, (0, common_1.Param)('cpf')),
    __param(1, (0, common_1.Param)('cnpj')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UniversalController.prototype, "addRepresentante", null);
__decorate([
    (0, common_1.Delete)('pessoas-fisicas/:cpf/empresas/:cnpj'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover representante de uma Pessoa Jurídica (PJ)' }),
    (0, swagger_1.ApiParam)({ name: 'cpf', description: 'CPF da pessoa física no formato 000.000.000-00' }),
    (0, swagger_1.ApiParam)({ name: 'cnpj', description: 'CNPJ da empresa no formato 00.000.000/0000-00' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Representante removido com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Requisição inválida' }),
    __param(0, (0, common_1.Param)('cpf')),
    __param(1, (0, common_1.Param)('cnpj')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UniversalController.prototype, "removeRepresentante", null);
__decorate([
    (0, common_1.Get)('pessoas-juridicas/:cnpj'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter uma Pessoa Jurídica (PJ)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pessoa Jurídica encontrada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Requisição inválida' }),
    __param(0, (0, common_1.Param)('cnpj')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UniversalController.prototype, "getPj", null);
__decorate([
    (0, common_1.Get)('pessoas-juridicas'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as Pessoas Jurídicas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de Pessoas Jurídicas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UniversalController.prototype, "getAllPjs", null);
__decorate([
    (0, common_1.Get)('usuarios'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os usuários' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de usuários' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UniversalController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Put)('pessoas-juridicas/:cnpj'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar uma Pessoa Jurídica' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pessoa Jurídica atualizada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Requisição inválida' }),
    __param(0, (0, common_1.Param)('cnpj')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_pj_dto_1.CreatePjDto]),
    __metadata("design:returntype", Promise)
], UniversalController.prototype, "updatePj", null);
__decorate([
    (0, common_1.Delete)('pessoas-juridicas/:cnpj'),
    (0, swagger_1.ApiOperation)({ summary: 'Excluir uma Pessoa Jurídica' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pessoa Jurídica excluída com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Requisição inválida' }),
    __param(0, (0, common_1.Param)('cnpj')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UniversalController.prototype, "deletePj", null);
exports.UniversalController = UniversalController = __decorate([
    (0, swagger_1.ApiTags)('Pessoas Jurídicas'),
    (0, common_1.Controller)('pessoas-juridicas'),
    __metadata("design:paramtypes", [service_pj_1.UniversalService])
], UniversalController);
//# sourceMappingURL=controller-pj.js.map