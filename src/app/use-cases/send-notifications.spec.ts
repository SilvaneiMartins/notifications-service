import { SendNotification } from './send-notifications';
import { Notification } from '../entities/notification';

const notificatios: Notification[] = [];

const notificationsRepository = {
    async create(notification: Notification) {
        notificatios.push(notification);
    },
};

describe('Send Notification', () => {
    it('should be able to send a notifications', async () => {
        const sendNotification = new SendNotification(notificationsRepository);

        await sendNotification.execute({
            content: 'This is a notification',
            category: 'notification',
            recipientId: 'example-recipient-id',
        });

        console.log(notificatios);

        expect(notificatios).toHaveLength(1);
    });
});
