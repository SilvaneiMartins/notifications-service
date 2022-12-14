import { SendNotification } from './send-notifications';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';

describe('Send Notification', () => {
    it('should be able to send a notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const sendNotification = new SendNotification(notificationsRepository);

        const { notification } = await sendNotification.execute({
            content: 'This is a notification',
            category: 'notification',
            recipientId: 'example-recipient-id',
        });

        expect(notificationsRepository.notificatios).toHaveLength(1);
        expect(notificationsRepository.notificatios[0]).toEqual(notification);
    });
});
