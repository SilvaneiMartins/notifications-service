import { Notification } from 'src/app/entities/notification';
import { NotificationsRepository } from 'src/app/repositories/notifications-repository';

export class InMemoryNotificationsRepository
    implements NotificationsRepository
{
    public notificatios: Notification[] = [];

    async create(notification: Notification) {
        this.notificatios.push(notification);
    }
}
