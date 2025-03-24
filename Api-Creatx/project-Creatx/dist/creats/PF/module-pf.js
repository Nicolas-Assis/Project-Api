"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoasFisicasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const crontroller_pf_1 = require("./crontroller-pf");
const service_pf_1 = require("./service-pf");
const pessoa_fisica_entity_1 = require("../../entities/pessoa-fisica.entity");
let PessoasFisicasModule = class PessoasFisicasModule {
};
exports.PessoasFisicasModule = PessoasFisicasModule;
exports.PessoasFisicasModule = PessoasFisicasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pessoa_fisica_entity_1.PessoaFisica])],
        controllers: [crontroller_pf_1.PessoasFisicaController],
        providers: [service_pf_1.UniversalService],
    })
], PessoasFisicasModule);
//# sourceMappingURL=module-pf.js.map