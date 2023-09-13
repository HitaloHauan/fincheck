import { Global, Module } from '@nestjs/common';
import { PrismaService } from './Prisma.service';
import { UserstRepository } from './repositories/users.repositories';

@Global()
@Module({
  providers: [PrismaService, UserstRepository],
  exports: [UserstRepository],
})
export class DatabaseModule {}
