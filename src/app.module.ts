import { Module } from "@nestjs/common";
import { ProductsModule } from "./products/products.module.js";
import { UsersModule } from "./products/products.module.js";
@Module({
imports: [ProductsModule, UsersModule],
})
export class AppModule {}