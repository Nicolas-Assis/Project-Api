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
exports.CreateEntityDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateEntityDto {
    cpf;
    cnpj;
}
exports.CreateEntityDto = CreateEntityDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '711.376.661-70', description: 'CPF no formato 000.000.000-00' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: 'O CPF deve estar no formato 000.000.000-00' }),
    __metadata("design:type", String)
], CreateEntityDto.prototype, "cpf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12.345.678/0001-90', description: 'CNPJ no formato 00.000.000/0000-00' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, { message: 'O CNPJ deve estar no formato 00.000.000/0000-00' }),
    __metadata("design:type", String)
], CreateEntityDto.prototype, "cnpj", void 0);
//# sourceMappingURL=all.validation.js.map