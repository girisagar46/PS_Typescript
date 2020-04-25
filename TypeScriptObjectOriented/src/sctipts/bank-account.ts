import { AccountType } from './enums';
import {Account, AccountInfo, AccountSettings} from './interfaces'
import {Constants} from "./constants";

export abstract class BankAccount implements Account{
    private _balance = 0;
    id: number;
    title: string;
    abstract accountType: AccountType;

    constructor(accountSettings: AccountSettings) {
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withDrawl(amount: number) {
        this.balance -= amount;
    }

    getAccountInfo(): AccountInfo<string, number> {
        return {
            routingNumber: Constants.ROUTING_NUMBER,
            bankNumber: Constants.BANK_NUMBER
        };
    };

    get balance() {
        return this._balance;
    }

    set balance(val: number) {
        if (val >= 0) {
            this._balance = val;
        }
        else {
            throw Error('Balance cannot be negative!');
        }
    }

}