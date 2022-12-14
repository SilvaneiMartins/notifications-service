import { Content } from './content';

test('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma nova mensagem.');

    expect(content).toBeTruthy();
});

test('it should not be able to create a notification content less than 3 characters', () => {
    expect(() => new Content('sam')).toThrow();
});

test('it should not be able to create a notification content more than 255 characters', () => {
    expect(() => new Content('s'.repeat(255))).toThrow();
});
