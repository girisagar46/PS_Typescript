export class Customer {
    name: string;
    isActive: boolean;

    constructor(name: string) {
        this.name = name;
        this.isActive = false;
    }

    announce(): string {
        return "Hello, my name is " + this.name;
    }
}