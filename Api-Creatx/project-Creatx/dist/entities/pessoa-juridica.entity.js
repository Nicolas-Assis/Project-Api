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
exports.PessoaJuridica = void 0;
const typeorm_1 = require("typeorm");
const pessoa_fisica_entity_1 = require("./pessoa-fisica.entity");
let PessoaJuridica = class PessoaJuridica {
    cnpj;
    razaoSocial;
    email;
    telefone;
    endereco;
    cidade;
    pais;
    codigoPostal;
    representantes;
};
exports.PessoaJuridica = PessoaJuridica;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', nullable: false, length: 18 }),
    __metadata("design:type", String)
], PessoaJuridica.prototype, "cnpj", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 100 }),
    __metadata("design:type", String)
], PessoaJuridica.prototype, "razaoSocial", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 100 }),
    __metadata("design:type", String)
], PessoaJuridica.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 20 }),
    __metadata("design:type", String)
], PessoaJuridica.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 100 }),
    __metadata("design:type", String)
], PessoaJuridica.prototype, "endereco", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 50 }),
    __metadata("design:type", String)
], PessoaJuridica.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 50 }),
    __metadata("design:type", String)
], PessoaJuridica.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 10 }),
    __metadata("design:type", String)
], PessoaJuridica.prototype, "codigoPostal", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => pessoa_fisica_entity_1.PessoaFisica),
    (0, typeorm_1.JoinTable)({
        name: 'pessoa_juridica_representantes',
        joinColumn: {
            name: 'pessoa_juridica_cnpj',
            referencedColumnName: 'cnpj'
        },
        inverseJoinColumn: {
            name: 'pessoa_fisica_cpf',
            referencedColumnName: 'cpf'
        }
    }),
    __metadata("design:type", Array)
], PessoaJuridica.prototype, "representantes", void 0);
exports.PessoaJuridica = PessoaJuridica = __decorate([
    (0, typeorm_1.Entity)('pessoa_juridica')
], PessoaJuridica);
//# sourceMappingURL=pessoa-juridica.entity.js.map