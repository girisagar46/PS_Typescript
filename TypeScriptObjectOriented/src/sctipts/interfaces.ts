export interface AccountInfo<TRouteNumber, TBankNumber> {
    routingNumber: TRouteNumber;
    bankNumber: TBankNumber;
}

export interface DepositWithDrawl {
    deposit(amount: number): void;

    withDrawl(amount: number): void;
}

export interface AccountSettings {
    id: number;
    title: string;
    balance: number;
    interestRate?: number;
    accountInfo?: AccountInfo<string, number>;
}

export interface Account extends AccountSettings, DepositWithDrawl { }
