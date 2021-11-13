"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsModule = void 0;
const common_1 = require("@nestjs/common");
const blogs_service_1 = require("./blogs.service");
const blogs_controller_1 = require("./blogs.controller");
const blog_entity_1 = require("./entities/blog.entity");
const typeorm_1 = require("@nestjs/typeorm");
let BlogsModule = class BlogsModule {
};
BlogsModule = __decorate([
    (0, common_1.Module)({
        controllers: [blogs_controller_1.BlogsController],
        providers: [blogs_service_1.BlogsService],
        imports: [typeorm_1.TypeOrmModule.forFeature([blog_entity_1.Blog])]
    })
], BlogsModule);
exports.BlogsModule = BlogsModule;
//# sourceMappingURL=blogs.module.js.map