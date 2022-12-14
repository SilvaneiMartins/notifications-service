export class Content {
    private readonly content: string;

    get value(): string {
        return this.content;
    }

    private validateContentLength(content: string): boolean {
        return content.length > 3 && content.length < 255;
    }

    constructor(content: string) {
        const isContentLengthValid = this.validateContentLength(content);

        if (!isContentLengthValid) {
            throw new Error('O conteúdo deve ter entre 3 e 255 caracteres.');
        }

        this.content = content;
    }
}
