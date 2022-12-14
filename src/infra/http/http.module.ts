import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { SendNotification } from 'src/app/use-cases/send-notifications';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [SendNotification],
})
export class HttpModule {}
