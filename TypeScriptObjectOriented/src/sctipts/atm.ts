import {DepositWithDrawl, Account} from "./interfaces";

export class ATM implements DepositWithDrawl{
    constructor(private account: Account) {
    }

    deposit(amount: number): void {
        this.account.deposit(amount);
    }

    withDrawl(amount: number): void {
        this.account.withDrawl(amount);
    }
}