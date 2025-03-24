"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoasJuridicasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const controller_pj_1 = require("./controller-pj");
const service_pj_1 = require("./service-pj");
const pessoa_juridica_entity_1 = require("../../entities/pessoa-juridica.entity");
const pessoa_fisica_entity_1 = require("../../entities/pessoa-fisica.entity");
let PessoasJuridicasModule = class PessoasJuridicasModule {
};
exports.PessoasJuridicasModule = PessoasJuridicasModule;
exports.PessoasJuridicasModule = PessoasJuridicasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pessoa_juridica_entity_1.PessoaJuridica, pessoa_fisica_entity_1.PessoaFisica])],
        controllers: [controller_pj_1.UniversalController],
        providers: [service_pj_1.UniversalService],
    })
], PessoasJuridicasModule);
//# sourceMappingURL=module-pj.js.map