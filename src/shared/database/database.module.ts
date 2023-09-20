import { Global, Module } from '@nestjs/common';
import { PrismaService } from './Prisma.service';
import { UserstRepository } from './repositories/users.repositories';
import { CategoriesRepository } from './repositories/categories.repositories';
import { BankAccountsRepository } from './repositories/bank-accounts.repositories ';

@Global()
@Module({
  providers: [
    PrismaService,
    UserstRepository,
    CategoriesRepository,
    BankAccountsRepository,
  ],
  exports: [UserstRepository, CategoriesRepository, BankAccountsRepository],
})
export class DatabaseModule {}
