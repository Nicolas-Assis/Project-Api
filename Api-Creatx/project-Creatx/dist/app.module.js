"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const module_pj_1 = require("./creats/PJ/module-pj");
const module_pf_1 = require("./creats/PF/module-pf");
const pessoa_fisica_entity_1 = require("./entities/pessoa-fisica.entity");
const pessoa_juridica_entity_1 = require("./entities/pessoa-juridica.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5433,
                username: 'nicks',
                password: 'nicks',
                database: 'mydatabase',
                entities: [pessoa_fisica_entity_1.PessoaFisica, pessoa_juridica_entity_1.PessoaJuridica],
                synchronize: true,
            }),
            module_pj_1.PessoasJuridicasModule,
            module_pf_1.PessoasFisicasModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map