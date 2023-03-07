import { Module } from '@nestjs/common';
import { TopicModule } from './topic/topic.module';
import { IamModule } from './iam/iam.module';

@Module({
  imports: [TopicModule, IamModule],
})
export class AppModule {}
