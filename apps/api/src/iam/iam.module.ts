import { Module } from '@nestjs/common';
import { IamService } from './iam.service';
import { IamResolver } from './iam.resolver';

@Module({
  providers: [IamResolver, IamService],
})
export class IamModule {}
