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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePjDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePjDto {
    nomeFantasia;
    razaoSocial;
    email;
    cnpj;
    telefone;
    endereco;
    cidade;
    pais;
    codigoPostal;
    representantes;
}
exports.CreatePjDto = CreatePjDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'L&E TORNEADORA', description: 'Nome da empresa' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePjDto.prototype, "nomeFantasia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'L E TORNEADORA LTDA', description: 'Razão Social da empresa' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePjDto.prototype, "razaoSocial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'letorneadora@gmail.com', description: 'Email da empresa' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreatePjDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12.345.678/0001-90', description: 'CNPJ da empresa no formato 00.000.000/0000-00' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, { message: 'O CNPJ deve estar no formato 00.000.000/0000-00' }),
    __metadata("design:type", String)
], CreatePjDto.prototype, "cnpj", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1234567890', description: 'Número de telefone da empresa' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePjDto.prototype, "telefone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Rua das Flores', description: 'Endereço da empresa' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePjDto.prototype, "endereco", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'São Paulo', description: 'Cidade da empresa' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePjDto.prototype, "cidade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Brasil', description: 'País da empresa' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePjDto.prototype, "pais", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12345678', description: 'Código postal da empresa' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePjDto.prototype, "codigoPostal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['123.456.789-00'], description: 'CPFs dos representantes' }),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: 'O CPF deve estar no formato 000.000.000-00', each: true }),
    __metadata("design:type", Array)
], CreatePjDto.prototype, "representantes", void 0);
//# sourceMappingURL=create-pj-dto.js.map