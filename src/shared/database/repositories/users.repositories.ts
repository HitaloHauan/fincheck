import { Injectable } from '@nestjs/common';
import { PrismaService } from '../Prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserstRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(createDto);
  }

  findUnique(findUniqueDto: Prisma.UserFindUniqueArgs) {
    return this.prismaService.user.findUnique(findUniqueDto);
  }
}
