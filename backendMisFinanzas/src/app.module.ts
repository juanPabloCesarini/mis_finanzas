import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { MovementTypeModule } from './movement_type/movement_type.module';
import { AccountModule } from './account/account.module';
import { MovementModule } from './movements/movement.module';
import { MovementsModule } from './movements/movements.module';
import { AccountsModule } from './accounts/accounts.module';
import { MovementTypesModule } from './movement_types/movement_types.module';
import { AuthModule } from './auth/auth.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CategoriesModule, SubcategoriesModule, MovementTypeModule, AccountModule, MovementModule, MovementsModule, AccountsModule, MovementTypesModule, AuthModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
