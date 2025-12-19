import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { MovementsModule } from './movements/movements.module';
import { AccountsModule } from './accounts/accounts.module';
import { MovementTypesModule } from './movement_types/movement_types.module';
import { AuthModule } from './auth/auth.module';
import { SeedModule } from './seed/seed.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CategoriesModule,
    SubcategoriesModule,
    MovementsModule,
    AccountsModule,
    MovementTypesModule,
    AuthModule,
    SeedModule,
    ConfigModule.forRoot({
      isGlobal: true, // disponible en toda la app
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? +process.env.DB_PORT : 3310,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
