import {CheckingAccount} from "./sctipts/checking-account";
import {SavingsAccount} from "./sctipts/savings-account";
import {BankAccount} from "./sctipts/bank-account";
import {Renderer} from "./sctipts/renders";
import {AccountList} from "./sctipts/account-list";
import {AccountType} from "./sctipts/enums";
import {ATM} from "./sctipts/atm";


class Main {
    checkingAccount: CheckingAccount;
    savingsAccount: SavingsAccount;
    currentAccount: BankAccount;
    atm: ATM;

    constructor(private renderer: Renderer) {
        // Create CheckingAccount instance
        this.checkingAccount = new CheckingAccount({
            id: 1,
            title: 'Jane Doe Checking',
            balance: 5000
        });
        this.savingsAccount = new SavingsAccount({
            id: 100,
            title: 'Jane Doe Savings',
            balance: 10000,
            interestRate: 2.5
        });
        let html = this.renderAccounts();
        this.renderer.render('<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />' + html);
    }

    renderAccounts() {
        let acctsHtml: string = '';
        const accList = new AccountList();
        accList.add(this.checkingAccount);
        accList.add(this.savingsAccount);

        accList.getAccounts().forEach((acct, index) => {
            acctsHtml += acct.title + '<br />';
        });
        return acctsHtml;
    }

    changeView(view?: string) {
        switch (view) {
            case 'checking':
                this.currentAccount = this.checkingAccount;
                break;
            case 'savings':
                this.currentAccount = this.savingsAccount;
                break;
            case 'atm':
                this.currentAccount = this.checkingAccount;
                this.renderAtm();
                return;
        }
        this.renderAccount(this.currentAccount);
    }

    renderAtm() {
        const html = `
                <h3>ATM</h3>
                <br /><br />
                Current Checking Account Balance: $${this.checkingAccount.balance}
                <br /><br />
                $<input type="text" id="depositWithdrawalAmount">&nbsp;&nbsp;
                <button onclick="main.depositWithDrawal(true, true)">Deposit</button>&nbsp;
                <button onclick="main.depositWithDrawal(false, true)">Withdrawal</button>&nbsp;
            `;
        this.renderer.render(html);
    }

    renderAccount(account: BankAccount) {
        const accountType = AccountType[account.accountType];
        const accountInfo = account.getAccountInfo()
        const html = `
                <h3>${accountType} Account</h3>
                <br />
                <span class="label">Owner:</span> ${account.title}
                <span class="label">RoutingNumber:</span> ${accountInfo.routingNumber}
                <span class="label">Bank:</span> ${accountInfo.bankNumber}
                <br />
                <span class="label">Balance:</span> $${account.balance.toFixed(2)}
                <br /><br />
                $<input type="text" id="depositWithdrawalAmount">&nbsp;&nbsp;
                <button onclick="main.depositWithDrawal(true)">Deposit</button>&nbsp;
                <button onclick="main.depositWithDrawal(false)">Withdrawal</button>&nbsp;
            `;
        this.renderer.render(html);
    }

    depositWithDrawal(deposit: boolean) {
        let amountInput: HTMLInputElement = document.querySelector('#depositWithdrawalAmount');
        let amount = +amountInput.value;
        let error;
        try {
            if (deposit) {
                this.currentAccount.deposit(amount);
            }
            else {
                this.currentAccount.withDrawl(amount);
            }
        }
        catch (e) {
            error = e;
        }

        this.renderAccount(this.currentAccount);
        if (error) {
            this.renderer.renderError(error.message);
        }
    }
}

// Create main object and add handlers for it
const renderer = new Renderer(document.querySelector('#viewTemplate'));
const main = new Main(renderer);

// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but that's not the focus of this demo
(<any>window).main = main;