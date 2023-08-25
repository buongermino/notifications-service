import { Module } from '@nestjs/common';
import { SendNotification } from '@application/useCases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
  //Send notification precisa estar definido como um provider para que seja possível usar a injeção de dependencia
})
export class HttpModule {}
