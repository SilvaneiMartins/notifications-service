import { Content } from './content';
import { Notification } from './notification';

describe('Notication', () => {
    it('shoulb be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('Nova solicitação de amizade!'),
            category: 'social',
            recipientId: 'example-recipiendid-id',
        });

        expect(notification).toBeTruthy();
    });
});
