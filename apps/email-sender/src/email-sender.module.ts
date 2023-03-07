import { Module } from '@nestjs/common';
import { EmailSenderService } from './email-sender.service';

@Module({
  imports: [],
  providers: [EmailSenderService],
})
export class EmailSenderModule {}
