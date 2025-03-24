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
exports.CreatePfDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePfDto {
    nome;
    email;
    cpf;
    telefone;
    endereco;
    cidade;
    pais;
    codigoPostal;
}
exports.CreatePfDto = CreatePfDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'João Silva', description: 'Nome da pessoa física' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePfDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'joao.silva@gmail.com', description: 'Email da pessoa física' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreatePfDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123.456.789-00', description: 'CPF da pessoa física no formato 000.000.000-00' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: 'O CPF deve estar no formato 000.000.000-00' }),
    __metadata("design:type", String)
], CreatePfDto.prototype, "cpf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1234567890', description: 'Número de telefone da pessoa física' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePfDto.prototype, "telefone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Rua das Flores', description: 'Endereço da pessoa física' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePfDto.prototype, "endereco", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'São Paulo', description: 'Cidade da pessoa física' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePfDto.prototype, "cidade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Brasil', description: 'País da pessoa física' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePfDto.prototype, "pais", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12345678', description: 'Código postal da pessoa física' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePfDto.prototype, "codigoPostal", void 0);
//# sourceMappingURL=create-pf-dto.js.map